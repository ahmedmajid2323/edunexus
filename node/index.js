import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { doc_summarization } from "./functions/summarization.js";
import { ChatGroq } from "@langchain/groq";
import { store_chroma } from "./functions/store_rag.js";
import { conversational_rag } from "./functions/rag.js";
import { ChromaClient } from "chromadb";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize the LLM
const llm = new ChatGroq({
    model: "llama-3.1-8b-instant",
    temperature: 0.7,
});

// Initialize ChromaDB Client
const client = new ChromaClient({ path: "http://localhost:8000" });

async function initializeChromaDB() {
    try {
        const collections = await client.listCollections();
        console.log("✅ Connected to ChromaDB. Available collections:", collections );
    } catch (error) {
        console.error("❌ Failed to connect to ChromaDB:", error);
    }
}

initializeChromaDB();

// Summarization Endpoint
app.post("/summarization", async (req, res) => {
    try {
        const pdfPath = `../front/public/pdf/${path.basename(req.body.path)}`;
        const summary = await doc_summarization(llm, pdfPath);
        const formattedSummary = summary.replace(/\n/g, "<br>");
        res.status(200).json({ summary: formattedSummary });
    } catch (error) {
        console.error("❌ Error summarizing document:", error);
        res.status(500).json({ error: "Failed to summarize the document" });
    }
});

// Middleware to Clear and Reset ChromaDB Collection
const resetChromaDB = async (req, res, next) => {
    try {
        const collections = await client.listCollections();

        if (collections.includes("rag_zc")) {
            const collection = await client.getCollection({ name: "rag_zc" });
            await client.deleteCollection(collection);
            console.log("🗑 Deleted existing ChromaDB collection 'rag_zc'.");
        }

        await client.createCollection({ name: "rag_zc" });
        console.log("✅ Created new ChromaDB collection 'rag_zc'.");

        next();
    } catch (error) {
        console.error("❌ Error resetting ChromaDB collection:", error);
        res.status(500).json({ error: "Failed to reset ChromaDB collection" });
    }
};

// Store Document in ChromaDB for RAG
app.post("/conv_rag_store", resetChromaDB, async (req, res) => {
    try {
        const pdfPath = `../front/public/pdf/${path.basename(req.body.path)}`;
        await store_chroma(pdfPath);
        res.status(200).json({ message: "File stored successfully in ChromaDB" });
    } catch (error) {
        console.error("❌ Error storing file in ChromaDB:", error);
        res.status(500).json({ error: "Failed to store file for RAG" });
    }
});

// Conversational RAG Endpoint
app.post("/conv_rag", async (req, res) => {
    try {
        const { user_input, history } = req.body;
        const llm_response = await conversational_rag(llm, history, user_input);
        console.log("User input:", user_input);
        res.status(200).json({ llm_response });
    } catch (error) {
        console.error("❌ Error in conversational RAG:", error);
        res.status(500).json({ error: "Failed to process RAG query" });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("🚀 Chat app listening on port 3000");
});
