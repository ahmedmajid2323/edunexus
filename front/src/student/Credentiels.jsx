import React from 'react';
import SideBarStudent from "../sidebar_student";
import books from '../assets/books.jpg';
import patron from '../assets/patron.jpeg';

function Credentials() {
  // Sample student data
  const student = {
    id: "ST12345",
    name: "El Patron",
    email: "El_Patron@supcom.tn",
    program: "Computer Science",
    year: 3,
    gpa: 3.8,
    enrollmentDate: "2022-09-05",
    status: "Active",
    attendance: 92,
    courses: [
      { id: "CS301", name: "Algorithmique Avancée", prof: "Pr. Dupont", room: "Salle A24", time: "08:30 - 10:00", day: "Lundi", progress: 75 },
      { id: "CS310", name: "Théorie des Graphes", prof: "Pr. Lambert", room: "Salle B12", time: "10:30 - 12:00", day: "Mercredi", progress: 65 },
      { id: "MATH250", name: "Analyse Numérique", prof: "Dr. Moreau", room: "Salle C08", time: "14:00 - 16:00", day: "Jeudi", progress: 80 },
      { id: "ENG220", name: "Communication Technique", prof: "Mme. Dubois", room: "Salle D15", time: "09:00 - 11:00", day: "Vendredi", progress: 90 }
    ],
    absences: [
      { date: "12 Mars 2024", course: "Théorie des Graphes", duration: "2 heures", justified: false },
      { date: "5 Février 2024", course: "Analyse Numérique", duration: "2 heures", justified: true }
    ],
    projects: [
      { id: 1, name: "IA", deadline: "15 Juin", completion: 65, status: "En cours" },
      { id: 2, name: "Base de données", deadline: "30 Mai", completion: 85, status: "En cours" },
      { id: 3, name: "Réseau", deadline: "10 Avril", completion: 100, status: "Terminé" }
    ],
    notes: [
      { id: 1, course: "Algorithmique Avancée", grade: 16, maxGrade: 20 },
      { id: 2, course: "Théorie des Graphes", grade: 14.5, maxGrade: 20 },
      { id: 3, course: "Analyse Numérique", grade: 15, maxGrade: 20 },
      { id: 4, course: "Communication Technique", grade: 17.5, maxGrade: 20 }
    ]
  };

  // Calculate average grade
  const averageGrade = (student.notes.reduce((total, note) => total + note.grade, 0) / student.notes.length).toFixed(1);

  // Calculate semester absence percentage
  const absencePercentage = 3;

  return (
    <div className="flex min-h-screen bg-gray-100">

      <SideBarStudent className="flex-shrink-0 h-screen overflow-y-auto" />
      
      <div className=" overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center">
        {/* Header Banner */}
        <div className="  rounded-xl items-center justify-center flex relative h-28 " 
        style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
          <div className="absolute inset-0 bg-[#388388] bg-opacity-30 rounded-xl"></div>
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">Profile</h1>
        </div>
        
        <div className=" pt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Profile Information */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="p-4 bg-teal-600 text-white">
                <h2 className="text-xl font-semibold">Information Personnelle</h2>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img src={patron}
                      alt="Profile" 
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{student.name}</h3>
                    <p className="text-gray-600">{student.program} - Année {student.year}</p>
                    <p className="text-sm text-gray-500">ID: {student.id}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4 border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span>{student.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date d'inscription:</span>
                    <span>{student.enrollmentDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Statut:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {student.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assiduité:</span>
                    <span>{student.attendance}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Prochaines Séances */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="p-4 bg-teal-600 text-white flex justify-between items-center">
                <h2 className="text-xl font-semibold">Prochaines Séances</h2>
              </div>
              <div className="p-4">
                {student.courses.slice(0, 2).map((course, index) => (
                  <div key={course.id} className="mb-4 border-l-4 border-teal-600 pl-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{course.time}</div>
                        <div>{course.name}</div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {course.room}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {course.prof}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Projets */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="p-4 bg-teal-600 text-white flex justify-between items-center">
                <h2 className="text-xl font-semibold">Projets</h2>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                {student.projects.map((project) => (
                  <div key={project.id} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="font-medium">{project.name}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      Date limite: {project.deadline}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${project.completion >= 100 ? 'bg-green-500' : 'bg-teal-500'}`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {project.completion}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Dernières Absences */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="p-4 bg-teal-600 text-white">
                <h2 className="text-xl font-semibold">Dernières Absences</h2>
              </div>
              <div className="p-4">
                {student.absences.length > 0 ? (
                  <>
                    {student.absences.map((absence, index) => (
                      <div key={index} className="mb-4 p-4 bg-red-50 rounded-md border-l-4 border-red-400">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{absence.date}</div>
                            <div className="text-gray-600">{absence.course}</div>
                            <div className="text-sm text-gray-500">{absence.duration}</div>
                          </div>
                          {absence.justified ? (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              Justifiée
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                              Non justifiée
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4">
                      <div className="text-sm text-gray-600">Absences ce semestre</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="h-2 rounded-full bg-teal-500"
                            style={{ width: `${absencePercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{absencePercentage}%</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-500 py-4">Aucune absence enregistrée</p>
                )}
              </div>
            </div>
            
            {/* Notes */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="p-4 bg-teal-600 text-white flex justify-between items-center">
                <h2 className="text-xl font-semibold">Notes</h2>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-teal-600">{averageGrade}</div>
                  <div className="text-sm text-gray-500">Moyenne Générale</div>
                </div>
                
                <div className="space-y-3">
                  {student.notes.map((note) => (
                    <div key={note.id} className="flex items-center justify-between">
                      <span className="text-gray-700">{note.course}</span>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative mr-2">
                          <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#E6E6E6"
                              strokeWidth="3"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke={note.grade >= 10 ? "#4FD1C5" : "#F56565"}
                              strokeWidth="3"
                              strokeDasharray={`${(note.grade / note.maxGrade) * 100}, 100`}
                            />
                          </svg>
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <span className="text-sm font-medium">{note.grade}</span>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">{note.grade}/{note.maxGrade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;