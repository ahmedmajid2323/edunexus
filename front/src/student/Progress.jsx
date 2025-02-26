import React, { useState } from "react";
import { TbClipboardText, TbAlertCircle, TbChartLine } from "react-icons/tb";
import { FaRegClock, FaRegUser, FaFileDownload } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import books from '../assets/books.jpg';
import SideBarStudent from "../sidebar_student"

const Progress = () => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Reason:", reason);
    console.log("File:", file);
    handleClose();
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <SideBarStudent />
      <div className="overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center">
        <div className="grid grid-rows-[1fr_5fr] h-full gap-2">
          {/* Header Section */}
          <div className="  rounded-xl items-center justify-center flex relative h-28 " style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
            <div className="absolute inset-0 bg-[#388388] bg-opacity-50 rounded-xl"></div>
            <h1 className=" relative z-10 text-white text-5xl font-semibold ">Avancement</h1>
          </div>
          {/* Main Grid */}
          <div className="grid grid-cols-[5fr_1fr] gap-2">
            {/* Left Column */}
            <div className="rounded-xl grid grid-rows-2 gap-2">
              {/* Upcoming Sessions */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Upcoming Sessions</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="group relative bg-white p-4 rounded-lg border-l-4 border-[#388388] hover:border-[#5ab0b0] transition-all duration-200 hover:scale-[101%] cursor-pointer">
                    <div className="flex items-center space-x-3 relative">
                      <div className="bg-[#388388] p-2 rounded-full">
                        <FaRegClock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">08:30 - 10:00</h3>
                        <p className="text-gray-600">Algorithmique Avancée</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                      <MdMeetingRoom className="h-4 w-4" />
                      <span>Salle A24</span>
                      <FaRegUser className="h-4 w-4 ml-2" />
                      <span>Pr. Dupont</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Absences */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Recent Absences</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-red-800">Nouvelle absence non justifiée</span>
                    <button
                      onClick={handleOpen}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
                    >
                      Justifier
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="rounded-xl bg-white shadow-lg shadow-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                <h1 className="text-white text-xl font-semibold tracking-tight">Quick Actions</h1>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 bg-[#388388] text-white px-4 py-2 rounded-lg hover:bg-[#5ab0b0] transition-colors">
                  <TbClipboardText className="h-5 w-5" />
                  <span>View Projects</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-[#388388] text-white px-4 py-2 rounded-lg hover:bg-[#5ab0b0] transition-colors">
                  <TbAlertCircle className="h-5 w-5" />
                  <span>Report Issue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Justification Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Justifier une absence
          <IconButton onClick={handleClose} style={{ position: "absolute", right: 10, top: 10 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <textarea
            placeholder="Expliquez la raison de votre absence..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input type="file" onChange={handleFileChange} className="mt-3 w-full" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Annuler</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">Soumettre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Progress;
