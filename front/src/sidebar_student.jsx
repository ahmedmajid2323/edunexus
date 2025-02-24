import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import edunexux from './assets/edunexux.png';

function SideBarStudent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Array of links for mapping through the sidebar items
  const sidebarLinks = [
    { path: '/', label: 'Acceuil', icon: <FaHome  color="white" /> },
    { path: '/cours', label: 'Cours', icon: <IoDocument color="white" /> },
    { path: '/projects', label: 'Mes projets', icon: <FaUsers color="white" /> },
    { path: '/note', label: 'Mes notes', icon: <PiNotepadBold  color="white" /> },
    { path: '/progress', label: 'avancement', icon: <GiProgression color="white" /> },
    { path: '/credentiels', label: 'Profile', icon: <CgProfile color="white" /> },
  ];

  return (
    <div 
    className="w-[18%] bg-[#388388] shadow-md p-5 rounded-2xl m-2 flex-col justify-center"
    style={{ 
        height: 'calc(100vh - 1rem)', 
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.7)",
        overflow: 'hidden' // Prevent scrolling
    }}>
      <img src={edunexux} className=' ' />

      <div className="mt-10 flex flex-col justify-around gap-7">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <div
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex text-xl items-center gap-3 rounded-3xl p-2 
                ${isActive ? 'bg-[#4ABFBD] text-white shadow-2xl' : 'hover:bg-[#4ABFBD] hover:text-white'} 
                hover:cursor-pointer transition-all`}
            >
            <div className="flex justify-center items-center w-6 ml-5"> 
                {link.icon}
            </div>
            
            <h1 style={{ fontFamily: 'serif' }} className="text-white ml-4">
                {link.label}
            </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBarStudent;
