import SideBarStudent from "../sidebar_student"
import books from '../assets/books.jpg';
import { TbAlertCircle, TbArrowBigDown, TbArrowBigUp, TbChartLine, TbClipboardText, TbExternalLink, TbPlus } from "react-icons/tb";
import { BsFillCalendar2Fill, BsFillCameraVideoFill, BsFillFileDiffFill, BsFillFileTextFill } from "react-icons/bs";
import { FaCalendarAlt, FaFileDownload, FaFileVideo } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FiActivity } from "react-icons/fi";

function Home() {
  return (
    <div className="flex h-screen ">

    <SideBarStudent className="flex-shrink-0 h-screen overflow-y-auto" />

      {/* Contenu principal scrollable */}
      <div className=" overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center">
        <div className=" grid grid-rows-[1fr_5fr] h-full gap-2">
          <div className="  rounded-xl items-center justify-center flex relative h-28 " 
          style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
            <div className="absolute inset-0 bg-[#388388] bg-opacity-50 rounded-xl"></div>
            <h1 className=" relative z-10 text-white text-5xl font-semibold ">Acceuil</h1>
          </div>

          <div className="grid grid-cols-[5fr_1fr] gap-2">
            <div className="rounded-xl grid grid-rows-2 gap-2">

              <div className=" grid grid-cols-2 gap-2 ">

              <div className="bg-white shadow-lg h-[73%] shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Prochaines Séances</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="group relative bg-white p-4 rounded-lg border-l-4 border-[#388388] hover:border-[#5ab0b0] transition-all duration-200 hover:scale-[101%] cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-[#f8fafc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

                  {/* Second Session */}
                  <div className="group relative bg-white p-4 rounded-lg border-l-4 border-[#388388] hover:border-[#5ab0b0] transition-all duration-200 hover:scale-[101%] cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-[#f8fafc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center space-x-3 relative">
                      <div className="bg-[#388388] p-2 rounded-full">
                        <FaRegClock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">10:30 - 12:00</h3>
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

              {/* Dernières Absences */}
              <div className="bg-white shadow-lg h-[73%] shadow-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#388388] h-20 rounded-t-xl flex items-center justify-center relative">
                  <h1 className="text-white text-xl font-semibold tracking-tight">Dernières Absences</h1>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5ab0b0] to-[#388388]"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg animate-pulse-once">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-800">Nouvelle absence non justifiée</span>
                      <button className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors">
                        Justifier
                      </button>
                    </div>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4 relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full -ml-1.5"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">12 Mars 2024</h3>
                        <p className="text-gray-600">Théorie des Graphes</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">2 heures</span>
                          <span className="text-sm text-red-600 flex items-center">
                            <FaExclamationTriangle className="h-4 w-4 mr-1" />
                            Non justifiée
                          </span>
                        </div>
                      </div>
                      <HiQuestionMarkCircle className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-help" />
                    </div>
                  </div>

                  {/* Progress Chart */}
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Absences ce semestre</span>
                      <span>3%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#388388] rounded-full transition-all duration-500" 
                        style={{ width: '3%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              </div>

              <div className="grid grid-rows-2 gap-2 -mt-36">
              {/* Séances en ligne - Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="bg-gradient-to-r from-[#388388] to-[#45a0a0] p-6">
                  <div className="flex justify-between items-start">
                    <h1 className="text-white text-3xl font-serif font-bold drop-shadow-md">Séances en ligne</h1>
                    <div className="flex items-center space-x-2">
                      <span className="text-white/90 text-sm">Prochaine session</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 hover:bg-slate-50 rounded-lg p-4 transition-colors">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#388388]/10 p-2 rounded-lg">
                          <FaCalendarAlt className="text-[#388388] text-xl"/>
                        </div>
                        <h2 className="text-xl font-semibold font-serif text-gray-800">
                          Introduction à l ingénierie des services numériques
                        </h2>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-[#388388]"/>
                          2h00 • 10 participants
                        </span>
                        <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                        <span className="flex items-center gap-1">
                          <FaRegUser className="text-[#388388]"/>
                          Pr. Martin Dubois
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-3">
                      <div className="bg-[#388388]/5 p-4 rounded-lg flex items-center gap-3">
                        <FaRegClock className="text-[#388388] text-xl"/>
                        <div>
                          <p className="text-sm text-gray-600">Commence dans</p>
                          <p className="text-lg font-bold text-[#388388]">1h45</p>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-[#388388] to-[#45a0a0] hover:from-[#45a0a0] hover:to-[#388388] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105">
                        <BsFillCameraVideoFill className="text-xl"/>
                        <span className="font-semibold">Rejoindre</span>
                      </button>
                    </div>
                  </div>

                  {/* Timeline Schedule */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                      {['12 Juin', '15 Juin', '18 Juin'].map((date, idx) => (
                        <div key={idx} className="flex-shrink-0 bg-[#388388]/5 p-3 rounded-lg flex items-center gap-2">
                          <BsFillCalendar2Fill className="text-[#388388]"/>
                          <span className="text-sm font-medium">{date}</span>
                          <div className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Supports du cours - Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-[#388388] to-[#45a0a0] p-6">
                  <h1 className="text-white text-3xl font-serif font-bold drop-shadow-md">Supports du cours</h1>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Fichiers principaux */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#388388] p-2 rounded-lg">
                            <BsFillFileTextFill className="text-white text-xl"/>
                          </div>
                          <div>
                            <h3 className="font-semibold">Notes de cours.pdf</h3>
                            <p className="text-sm text-gray-600">12 Mo • Dernière modif: 2h</p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-[#388388]/10 rounded-full transition-colors">
                          <FaFileDownload className="text-[#388388] text-xl"/>
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#388388] p-2 rounded-lg">
                            <FaFileVideo className="text-white text-xl"/>
                          </div>
                          <div>
                            <h3 className="font-semibold">Enregistrement.mp4</h3>
                            <p className="text-sm text-gray-600">1.2 Go • 45:30 min</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div className="h-full bg-[#388388] rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-sm text-[#388388]">65%</span>
                        </div>
                      </div>
                    </div>

                    {/* Statistiques rapides */}
                    <div className="bg-[#388388]/5 p-4 rounded-lg space-y-3">
                      <h3 className="font-semibold text-[#388388] flex items-center gap-2">
                        <FiActivity className="text-xl"/>
                        Derniers ajouts
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        {['TP1.pdf', 'TD3.pptx', 'Ressources.zip'].map((file, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-sm rounded-full flex items-center gap-2">
                            <BsFillFileDiffFill className="text-[#388388]"/>
                            {file}
                          </span>
                        ))}
                      </div>
                      <button className="w-full mt-2 bg-[#388388] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#45a0a0] transition-colors">
                        <TbExternalLink className="text-lg"/>
                        Consulter l archive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>

            <div className="rounded-xl grid grid-rows-3 gap-2 bg-slate-50">
            {/* Projets Card */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="bg-gradient-to-r from-[#388388] to-[#45a0a0] h-16 rounded-t-xl flex items-center justify-between px-7 relative">
                <h1 className="text-white text-xl font-semibold tracking-tight">Projets</h1>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <TbExternalLink className="text-white text-2xl hover:text-green-200 transition-colors cursor-pointer" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between hover:bg-slate-50 p-3 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#388388]/10 p-2 rounded-lg">
                      <TbClipboardText className="text-[#388388] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Projet IA</h3>
                      <p className="text-sm text-gray-600">Date limite: 15 Juin</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gradient-to-r from-[#388388] to-[#45a0a0] rounded-full transition-all duration-500" 
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-[#388388]">65%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-medium">3 Terminés</p>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <p className="text-amber-800 font-medium">2 En cours</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded-lg">
                    <p className="text-red-800 font-medium">1 Retard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Card */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="bg-gradient-to-r from-[#388388] to-[#45a0a0] h-16 rounded-t-xl flex items-center justify-between px-7 relative">
                <h1 className="text-white text-xl font-semibold tracking-tight">Notes</h1>
                <TbExternalLink className="text-white text-2xl hover:text-green-200 transition-colors cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#388388]/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TbChartLine className="text-[#388388] text-xl" />
                    <span className="font-medium">Moyenne Générale</span>
                  </div>
                  <span className="text-2xl font-bold text-[#388388]">14.2</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center hover:bg-slate-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-800 rounded-full">16</span>
                      <div>
                        <p className="font-medium">Algorithmique</p>
                        <p className="text-sm text-gray-600">12 Mars 2024</p>
                      </div>
                    </div>
                    <TbArrowBigUp className="text-green-600" />
                  </div>
                  
                  <div className="flex justify-between items-center hover:bg-slate-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full">11</span>
                      <div>
                        <p className="font-medium">Base de données</p>
                        <p className="text-sm text-gray-600">5 Avril 2024</p>
                      </div>
                    </div>
                    <TbArrowBigDown className="text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Homeworks Card */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="bg-gradient-to-r from-[#388388] to-[#45a0a0] h-16 rounded-t-xl flex items-center justify-between px-7 relative">
                <h1 className="text-white text-xl font-semibold tracking-tight">Homeworks</h1>
                <TbExternalLink className="text-white text-2xl hover:text-green-200 transition-colors cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <TbAlertCircle className="text-red-600 text-xl" />
                  <div>
                    <p className="font-medium">Exercices de maths</p>
                    <p className="text-sm text-red-600">En retard - À rendre urgent</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between hover:bg-slate-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-[#388388] rounded-sm"></div>
                      <p>Rapport de physique</p>
                    </div>
                    <span className="text-sm text-gray-500">Demain</span>
                  </div>
                  
                  <div className="flex items-center justify-between hover:bg-slate-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-[#388388] rounded-sm"></div>
                      <p>Présentation histoire</p>
                    </div>
                    <span className="text-sm text-gray-500">3 jours</span>
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 p-2 bg-[#388388]/10 text-[#388388] rounded-lg hover:bg-[#388388]/20 transition-colors">
                  <TbPlus className="text-xl" />
                  <span>Ajouter une tâche</span>
                </button>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Home
