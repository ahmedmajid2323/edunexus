import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import {doc_summarization} from './functions/summarization.js';
import { ChatGroq } from "@langchain/groq";
import multer from 'multer';
import { promises as fs } from 'fs';
import { store_chroma } from './functions/store_rag.js';
import { conversational_rag } from './functions/rag.js';
import { ChromaClient } from 'chromadb';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const llm = new ChatGroq({
    model: "llama-3.1-8b-instant", 
    temperature: 0.7,        
});

app.post('/summarization'/* , upload_summary.single('pdf') */, async (req, res) => {
    try {
      const path = req.body.path;
      const tab = path.split('/'); //tab[tab.length - 1]
      const pdfPath = "../front/public/pdf/" + tab[tab.length - 1]
      const summary = await doc_summarization(llm , pdfPath); 
      const formattedSummary = summary.replace(/\n/g, '<br>');  
      res.status(200).json({summary : formattedSummary})
    } catch (error) {
      console.error('Error summarizing document:', error);
      res.status(500).json({ error: 'Failed to summarize the document' });
    } 
});

const client = new ChromaClient({ path: "http://localhost:8000" });
const clearDirectory = async (req, res, next) => {
  try {
    await client.deleteCollection({ name: "rag_zc" });
    await client.createCollection({ name: "rag_zc" });
    next();
  } catch (error) {
    console.error('Error clearing directory:', error);
    res.status(500).json({ error: 'Failed to clear directory' });
  }
};

app.post('/conv_rag_store',clearDirectory, async (req, res) => {
  try {
    const path = req.body.path;
    const tab = path.split('/'); //tab[tab.length - 1]
    const pdfPath = "../front/public/pdf/" + tab[tab.length - 1]
    await store_chroma(pdfPath)
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file for conversational rag document:', error);
    res.status(500).json({ error: 'Failed to store file for conversational rag the document' });
  } 
});

app.post('/conv_rag', async (req, res) => {
  try {
    const  {user_input , history} = req.body
    const llm_response = await conversational_rag(llm , history , user_input)
    console.log(user_input)
    res.status(200).json({ llm_response });
  } catch (error) {
    console.error('Error sending llm response for rag:', error);
  }
});



app.listen(3000, () => {
    console.log(`chat app listening on port 3000`);
  });