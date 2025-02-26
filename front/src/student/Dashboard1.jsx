import  { useState } from "react";
import { TbAlertCircle, TbPlus, TbUpload, TbCalendar, TbFolder, TbUsers, TbChecklist, TbStack2 } from "react-icons/tb";
import books from '../assets/books.jpg';
import SideBarStudent from "../sidebar_student";
import {parseDate} from "@internationalized/date";
import {Button, Calendar} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

const Dashboard1 = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
    <div className="flex h-screen bg-[#f8fafc]">
  <SideBarStudent className="flex-shrink-0 h-screen overflow-y-auto" />
  
  {/* Main Content */}
  <div className=" overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center">

  <div className=" mb-3 rounded-xl items-center justify-center flex relative h-28 " 
    style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
      <div className="absolute inset-0 bg-[#388388] bg-opacity-30 rounded-xl"></div>
      <h1 className="text-white text-4xl font-bold drop-shadow-lg">Projects</h1>
    </div>

    {/* Header Stats */}
    <div className="grid grid-cols-1 pb-3 md:grid-cols-4 gap-6">
      <div className="bg-gradient-to-br from-white to-[#f0fdfa] p-6 rounded-3xl shadow-sm border border-[#e2e8f0] hover:shadow-md transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#64748b]">Active Projects</p>
            <p className="text-3xl font-bold text-[#0f172a] mt-2">12</p>
          </div>
          <div className="w-12 h-12 bg-[#388388] rounded-xl flex items-center justify-center">
            <TbStack2 className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f0fdfa] p-6 rounded-3xl shadow-sm border border-[#e2e8f0] hover:shadow-md transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#64748b]">Tasks Completed</p>
            <p className="text-3xl font-bold text-[#0f172a] mt-2">84%</p>
          </div>
          <div className="w-12 h-12 bg-[#5ab0b0] rounded-xl flex items-center justify-center">
            <TbChecklist className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f0fdfa] p-6 rounded-3xl shadow-sm border border-[#e2e8f0] hover:shadow-md transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#64748b]">Upcoming Deadlines</p>
            <p className="text-3xl font-bold text-[#0f172a] mt-2">3</p>
          </div>
          <div className="w-12 h-12 bg-[#388388] rounded-xl flex items-center justify-center">
            <TbAlertCircle className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f0fdfa] p-6 rounded-3xl shadow-sm border border-[#e2e8f0] hover:shadow-md transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#64748b]">Team Members</p>
            <p className="text-3xl font-bold text-[#0f172a] mt-2">8</p>
          </div>
          <div className="w-12 h-12 bg-[#5ab0b0] rounded-xl flex items-center justify-center">
            <TbUsers className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
      {/* Project Gallery */}
      <div className="lg:col-span-2 space-y-6">
        <div className=" flex justify-between">
        <h2 className="text-2xl font-bold text-[#0f172a]">Project Gallery</h2>
        <Button onPress={onOpen}
        className=" p-2 bg-gradient-to-br from-[#388388] to-[#5ab0b0] hover:cursor-pointer hover:scale-90 duration-400 rounded-xl gap-2 flex items-center justify-center">
          <TbPlus className="text-white w-6 h-6" />
          <h1 className=" text-white font-semibold drop-shadow-lg">add new project</h1>
        </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0f172a]">{project.name}</h3>
                  <p className="text-sm text-[#64748b] mt-2">{project.deadline}</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <img 
                          key={index}
                          src={member.avatar} 
                          className="w-8 h-8 rounded-full border-2 border-white" 
                          alt={member.name} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#388388] to-[#5ab0b0] rounded-xl flex items-center justify-center">
                  <TbFolder className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#64748b]">Progress</span>
                  <span className="text-sm font-medium text-[#388388]">{project.progress}%</span>
                </div>
                <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#388388] to-[#5ab0b0] transition-all duration-500" 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        {/* Progress Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex justify-center items-center border-[#e2e8f0]">
          <div>
            <h3 className="text-lg text-center font-semibold text-[#0f172a] mb-4">Deadlines</h3>
            <Calendar color="danger" aria-label="Date (Uncontrolled)" defaultValue={parseDate("2025-02-03")} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h3 className="text-lg font-semibold text-[#0f172a]">Quick Actions</h3>
          <button className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-[#f1f5f9] rounded-xl transition-colors">
            <span className="text-[#0f172a]">New Project</span>
            <TbPlus className="text-[#388388] w-5 h-5" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-[#f1f5f9] rounded-xl transition-colors">
            <span className="text-[#0f172a]">Upload File</span>
            <TbUpload className="text-[#388388] w-5 h-5" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-[#f1f5f9] rounded-xl transition-colors">
            <span className="text-[#0f172a]">Schedule Meeting</span>
            <TbCalendar className="text-[#388388] w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-gray-800">Create New Project</h2>
          <p className="text-sm text-gray-500">Fill in the details to add a new project</p>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter project name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Members
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter names separated by commas"
                />
                <p className="text-xs text-gray-500 mt-1">e.g., John, Sarah, Mike</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the project goals and objectives..."
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <Button 
            color="secondary" 
            variant="bordered" 
            onPress={onClose}
            className="hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button  
            onPress={() => {
              // Add your form submission logic here
              const newProject = {
                id: projects.length + 1,
                name: "New Project Name", // Get from form state
                deadline: "New Deadline", // Get from form state
                progress: 0, // Start at 0%
                team: ["Team", "Members"], // Get from form state
                tasks: [],
                description: "Project Description" // Get from form state
              };
              
              setProjects([...projects, newProject]);
              onClose();
            }}
            className="bg-gradient-to-br from-[#388388] to-[#5ab0b0] text-white font-medium">
            Create Project
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>

</div>
  );
};

export default Dashboard1;