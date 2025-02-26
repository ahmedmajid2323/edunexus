import React, { useState } from "react";
import { TbClipboardText, TbAlertCircle } from "react-icons/tb";
import { FaRegClock, FaRegUser, FaPlus, FaTasks, FaUsers } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import books from '../assets/books.jpg';
import SideBarStudent from "../sidebar_student";
import Chart from 'react-apexcharts';

const Dashboard1 = () => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "IA Project",
      deadline: "15 Juin",
      progress: 65,
      team: ["Alice", "Bob", "Charlie"],
      tasks: [
        { name: "Task 1", progress: 80, assignedTo: "Alice" },
        { name: "Task 2", progress: 60, assignedTo: "Bob" },
        { name: "Task 3", progress: 45, assignedTo: "Charlie" },
      ],
      description: "This project focuses on developing an AI-based solution for task management."
    },
    {
      id: 2,
      name: "Web Development",
      deadline: "30 Juin",
      progress: 40,
      team: ["David", "Eve"],
      tasks: [
        { name: "Task 1", progress: 90, assignedTo: "David" },
        { name: "Task 2", progress: 70, assignedTo: "Eve" },
      ],
      description: "This project involves building a responsive web application."
    }
  ]);

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: "New Project",
      deadline: "01 Jan 2025",
      progress: 0,
      team: [],
      tasks: [],
      description: "Description of the new project."
    };
    setProjects([...projects, newProject]);
  };

  // Chart 1: Project Progress
  const progressChartOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#f2f2f2',
          strokeWidth: '67%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val) + '%';
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#388388'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };

  const progressChartSeries = [65]; // Example progress value

  // Chart 2: Task Completion
  const taskChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
    },
    yaxis: {
      title: {
        text: 'Completion (%)',
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ['#388388', '#5ab0b0'],
  };

  const taskChartSeries = [
    {
      name: 'Completion',
      data: [80, 60, 45, 90, 70],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <SideBarStudent />
      <div className="overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center">
        <div className="grid grid-rows-[1fr_5fr] h-full gap-2">
          {/* Header Section */}
          <div className="rounded-xl items-center justify-center flex relative h-28" style={{ backgroundImage: `url(${books})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute inset-0 bg-[#388388] bg-opacity-50 rounded-xl"></div>
            <h1 className="relative z-10 text-white text-5xl font-semibold">Projects</h1>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-[3fr_1fr] gap-2">
            {/* Left Column */}
            <div className="rounded-xl grid grid-rows-2 gap-2">
              {/* Projects List */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Projects</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                <div className="p-6 space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="group relative bg-white p-4 rounded-lg border-l-4 border-[#388388] hover:border-[#5ab0b0] transition-all duration-200 hover:scale-[101%] cursor-pointer"
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="flex items-center space-x-3 relative">
                        <div className="bg-[#388388] p-2 rounded-full">
                          <TbClipboardText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{project.name}</h3>
                          <p className="text-gray-600">Deadline: {project.deadline}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                        <span>Progress: {project.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Task Progress Section */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Task Progress</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                <div className="p-6 space-y-4">
                  {selectedProject && selectedProject.tasks.map((task, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#388388] p-2 rounded-full">
                            <FaTasks className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{task.name}</h3>
                            <p className="text-gray-600">Assigned to: {task.assignedTo}</p>
                          </div>
                        </div>
                        <div className="w-1/3 bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#388388] h-2.5 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details Popup */}
              {selectedProject && (
                <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} fullWidth maxWidth="sm">
                  <DialogTitle>
                    {selectedProject.name}
                    <IconButton onClick={() => setSelectedProject(null)} style={{ position: "absolute", right: 10, top: 10 }}>
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent>
                    <p className="text-gray-600">{selectedProject.description}</p>
                    <h4 className="font-semibold mt-4">Team Members</h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.team.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mt-4">Tasks</h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.tasks.map((task, index) => (
                        <li key={index}>{task.name} - {task.progress}%</li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Right Column (Charts and Quick Access) */}
            {/* Quick Access Section */}
            <div className="bg-white shadow-lg shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Quick Actions</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                <div className="p-6 space-y-4">
                  <button
                    onClick={handleAddProject}
                    className="w-full flex items-center justify-center space-x-2 bg-[#388388] text-white px-4 py-2 rounded-lg hover:bg-[#5ab0b0] transition-colors"
                  >
                    <FaPlus className="h-5 w-5" />
                    <span>Add Project</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 bg-[#388388] text-white px-4 py-2 rounded-lg hover:bg-[#5ab0b0] transition-colors">
                    <TbAlertCircle className="h-5 w-5" />
                    <span>Report Issue</span>
                  </button>
                </div>
              </div>
            <div className="rounded-xl grid grid-rows-2 gap-2">
              {/* Chart 1: Project Progress */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Progress</h2>
                <Chart
                  options={progressChartOptions}
                  series={progressChartSeries}
                  type="radialBar"
                  height={350}
                />
              </div>

              {/* Chart 2: Task Completion */}
              <div className="bg-white shadow-lg shadow-slate-200 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Completion</h2>
                <Chart
                  options={taskChartOptions}
                  series={taskChartSeries}
                  type="bar"
                  height={350}
                />
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

export default Dashboard1;