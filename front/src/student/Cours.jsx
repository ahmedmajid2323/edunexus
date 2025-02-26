import SideBarStudent from "../sidebar_student"
import Pdf_render from "./pdf_render"
import books from '../assets/books.jpg';
import { TbExternalLink } from "react-icons/tb";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Button,
  useDisclosure,
  Avatar,
  Input,
} from "@heroui/react";
import { useState } from "react";
import {Skeleton} from "@heroui/react";
import axios from 'axios'

function Cours() {

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [Input_value, setInput_value] = useState('')
  const [Summary, setSummary] = useState('')
  const [Loading_sum, setLoading_sum] = useState(false)
  const [Loading_rag, setLoading_rag] = useState(false)
  const [Selected_path, setSelected_path] = useState('')

  const handleSendMessage = () => {
    if (Input_value.trim() === "") return; // Don't send empty messages

    setMessages((prev) => [
      ...prev,
      { role: "user", content: Input_value.trim() },
    ]);

    axios.post('http://localhost:3000/conv_rag', {history: messages , user_input: Input_value})
    .then((response)=>{
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.llm_response },
      ]);
    })
    .catch((error)=>{
      console.log('error in response for llm response: ',error)
    })

    setInput_value("");
  };

  const {
    isOpen: isModal1Open,
    onOpen: onModal1Open,
    onOpenChange: onModal1OpenChange,
  } = useDisclosure();

  const {
    isOpen: isModal2Open,
    onOpen: onModal2Open,
    onOpenChange: onModal2OpenChange,
  } = useDisclosure();

  const {
    isOpen: isModal3Open,
    onOpen: onModal3Open,
    onOpenChange: onModal3OpenChange,
  } = useDisclosure();

  const view_pdf = (path)=>{
    setSelected_path(path)
    onModal3Open()
  }

  const chat_doc = (path)=>{
    setMessages([{ role: "assistant", content: "Hello! How can I assist you today?" },])
    onModal2Open()
    setLoading_rag(true)

    axios.post('http://localhost:3000/conv_rag_store', {path})
    .then(()=>{
      setLoading_rag(false)
    })
    .catch((error)=>{
      console.log('error in response for rag storing: ',error)
    })
  }

  const view_summary = async (pdf_path)=>{
    onModal1Open()
    setLoading_sum(true)

    axios.post('http://localhost:3000/summarization', {path :pdf_path})
    .then((response)=>{
      setSummary(response.data.summary)
      setLoading_sum(false)
    })
    .catch((error)=>{
      console.log('error in response for summarization: ',error)
    })
  }

  const cours = [
    {name: 'cours n°1' , path:'../../public/pdf/Architecting IoT Device-INDP2_Part 1.pdf'}, 
    {name: 'cours n°2' , path:'../../public/pdf/chapt1_WirelessChannels (2)-1.pdf'},
    {name: 'cours n°3' , path:'../../public/pdf/PISTES STRATÉGIQUES 24+-2.pdf'},
  ]

  return (
    <div className=" flex">

      <SideBarStudent/>

      <div className=" w-full h-screen p-2 flex-row justify-center items-center">
        <div className=" grid grid-rows-[1fr_5fr] h-full gap-1">

          <div className="  rounded-xl items-center justify-center flex relative h-28 " 
          style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
            <div className="absolute inset-0 bg-[#388388] bg-opacity-30 rounded-xl"></div> 
            <h1 className="text-white text-4xl font-bold drop-shadow-lg">Support de cours</h1>
          </div>

          <div className="bg-slate-100 shadow-sm shadow-slate-400 rounded-xl grid grid-cols-[5fr_2fr]">
            <div className="p-5">
              <div className="  h-16 flex justify-center items-center">
                <h1 className=" text-[#388388] text-3xl font-serif font-bold" >nom de la matiere</h1>
              </div>
              <div className=" mt-10">
                {
                  cours.map((elt , index)=>{
                    return(
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-200 mb-5 rounded-2xl" >
                        <h1 className=" text-black text-lg font-medium font-serif" >{elt.name}</h1>
                        <div className="flex gap-2 items-center">
                          <Button onPress={()=>{view_summary(elt.path)}} className="p-2 bg-[#388388] rounded-full px-4 hover:cursor-pointer"><h1 className=" text-white text-md font-semibold" >Summarize</h1></Button>
                          <Button onPress={()=>{chat_doc(elt.path)}} className="p-2 bg-[#388388] rounded-full px-4 hover:cursor-pointer"><h1 className=" text-white text-md font-semibold" >Chat</h1></Button>
                          <Button onPress={()=>{view_pdf(elt.path)}} className="p-2 bg-[#388388] rounded-full px-4 hover:cursor-pointer"><TbExternalLink className=" text-white text-xl font-semibold" /></Button>
                        </div>  
                      </div> 
                    )
                  })
                }
               
              </div>
            </div>

            <div className="bg-[#388388] rounded-r-xl p-6 flex flex-col items-center justify-center space-y-6">
              <h1 className="text-white text-2xl font-bold mb-4">Choisir</h1>

              <div className="w-full max-w-md">
                <label className="block text-white text-sm font-medium mb-2">Option 1</label>
                <select className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <option value="" disabled selected>Sélectionnez une option</option>
                  <option className=" text-black" value="1">Option 1</option>
                  <option className=" text-black" value="2">Option 2</option>
                  <option className=" text-black" value="3">Option 3</option>
                </select>
              </div>

              <div className="w-full max-w-md">
                <label className="block text-white text-sm font-medium mb-2">Option 2</label>
                <select className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <option value="" disabled selected>Sélectionnez une option</option>
                  <option className=" text-black" value="1">Option 1</option>
                  <option className=" text-black" value="2">Option 2</option>
                  <option className=" text-black" value="3">Option 3</option>
                </select>
              </div>

              <div className="w-full max-w-md">
                <label className="block text-white text-sm font-medium mb-2">Option 3</label>
                <select className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <option value="" disabled selected>Sélectionnez une option</option>
                  <option className=" text-black" value="1">Option 1</option>
                  <option className=" text-black" value="2">Option 2</option>
                  <option className=" text-black" value="3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Modal isOpen={isModal1Open} size="3xl" onOpenChange={onModal1OpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cours n°1</ModalHeader>
              <ModalBody>
                {
                  Loading_sum ? 
                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-3 w-3/5 rounded-lg" />
                      <Skeleton className="h-3 w-3/5 rounded-lg" />
                      <Skeleton className="h-3 w-4/5 rounded-lg" />
                      <Skeleton className="h-3 w-4/5 rounded-lg" /> 
                    </div>
                  :
                  <div
                    dangerouslySetInnerHTML={{ __html: Summary }}
                    style={{ 
                      whiteSpace: 'pre-wrap', // Optional: Preserve formatting
                      height: '500px', // Set a fixed height
                      overflowY: 'auto', // Enable vertical scrolling
                      border: '1px solid #e5e7eb', // Optional: Add a border
                      borderRadius: '8px', // Optional: Add rounded corners
                      padding: '12px', // Optional: Add padding
                    }}
                  />
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isModal2Open} size="3xl" onOpenChange={onModal2OpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">chat with Cours n°1</ModalHeader>
              <ModalBody >
                <div style={!Loading_rag ? { 
                  whiteSpace: 'pre-wrap',
                  height: '500px', 
                  overflowY: 'auto', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px', 
                  padding: '12px'
                } : 
                  {whiteSpace: 'pre-wrap',
                    height: '500px', 
                    overflowY: 'auto', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    padding: '12px', alignItems:'center' ,justifyContent:'center',display:'flex' }}
                >
              {
                Loading_rag ? 
                <Spinner color="warning" label="Loading..." />
                :
                <div className="flex flex-col gap-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}>
                      <div
                        className={`flex items-center gap-2 ${
                          message.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}>
                        <Avatar
                          name={message.role === "user" ? "User" : "AI"}
                          size="sm"
                          className={`${
                            message.role === "user" ? "bg-blue-500" : "bg-green-500"
                          }`}/>

                        <div
                          className={`p-3 rounded-lg max-w-[70%] ${
                            message.role === "user"
                              ? "bg-blue-100 text-blue-900"
                              : "bg-green-100 text-green-900"
                          }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              } 
              </div>
            </ModalBody>

            <ModalFooter>
              <div className="flex gap-2 w-full">
                <Input
                  isDisabled={Loading_rag}
                  placeholder="Type your message..."
                  value={Input_value}
                  onChange={(e) => setInput_value(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button color="primary" onPress={handleSendMessage}>
                  Send
                </Button>
              </div>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isModal3Open} size="4xl" onOpenChange={onModal3OpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">chat with `Cours n°1`</ModalHeader>
              <ModalBody>
                <Pdf_render path={Selected_path} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    
    </div>
  )
}

export default Cours
