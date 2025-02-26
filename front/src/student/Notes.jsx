import React, { useState, useEffect } from 'react';
import SideBarStudent from "../sidebar_student";
import { Search, Plus, Trash2, Edit, Save, X, Calendar, BookOpen } from "lucide-react";
import books from '../assets/books.jpg';

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Algorithmes de tri', content: 'Tri fusion: O(n log n), Tri rapide: O(n log n) en moyenne', category: 'Algorithmique Avancée', date: '2025-02-20' },
    { id: 2, title: 'Théorie des Graphes', content: 'Un graphe G est défini par G = (V, E) où V est l\'ensemble des sommets et E l\'ensemble des arêtes', category: 'Théorie des Graphes', date: '2025-02-18' },
    { id: 3, title: 'Ingénierie des services', content: 'Les principes SOLID: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion', category: 'Ingénierie', date: '2025-02-15' }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeNote, setActiveNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '', category: '' });
  const [categories] = useState(['Algorithmique Avancée', 'Théorie des Graphes', 'Ingénierie', 'Mathématiques', 'Autre']);
  const [filter, setFilter] = useState('Toutes');

  // Filter notes based on search term and category filter
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'Toutes' || note.category === filter;
    return matchesSearch && matchesFilter;
  });

  // Handle creating a new note
  const handleCreateNote = () => {
    if (newNote.title.trim() === '') return;
    
    const currentDate = new Date().toISOString().split('T')[0];
    const newNoteItem = {
      id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1,
      title: newNote.title,
      content: newNote.content,
      category: newNote.category || 'Autre',
      date: currentDate
    };
    
    setNotes([...notes, newNoteItem]);
    setNewNote({ title: '', content: '', category: '' });
    setActiveNote(newNoteItem);
    setEditMode(false);
  };

  // Handle updating a note
  const handleUpdateNote = () => {
    if (!activeNote) return;
    
    setNotes(notes.map(note => 
      note.id === activeNote.id ? activeNote : note
    ));
    setEditMode(false);
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (activeNote && activeNote.id === id) {
      setActiveNote(null);
      setEditMode(false);
    }
  };

  return (
    <div className="flex h-screen">
      <SideBarStudent className="flex-shrink-0 h-screen overflow-y-auto" />

      <div className=" overflow-y-auto w-full h-screen p-2 flex-row justify-center items-center ">
        {/* Header Banner */}
        <div className="  rounded-xl items-center justify-center flex relative h-28 " 
        style={{backgroundImage:`url(${books})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
          <div className="absolute inset-0 bg-[#388388] bg-opacity-30 rounded-xl"></div>
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">Notes</h1>
        </div>

        <div className="flex flex-col pt-3 gap-6">
          {/* Main content area */}
          <div className="flex gap-6">
            {/* Notes list */}
            <div className="w-1/3 bg-white rounded shadow overflow-hidden">
              <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
                <h2 className="font-semibold text-xl flex items-center gap-2">
                  <BookOpen size={20} />
                  Mes Notes
                </h2>
              </div>

              <div className="p-4">
                <div className="mb-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        className="pl-10 pr-4 py-2 w-full border rounded-md text-gray-800"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    <select 
                      className="px-3 py-2 border rounded-md bg-white text-gray-800"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="Toutes">Toutes</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    className="flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition w-full"
                    onClick={() => {
                      setActiveNote(null);
                      setEditMode(true);
                    }}
                  >
                    <Plus size={18} />
                    Nouvelle Note
                  </button>
                </div>

                {filteredNotes.length === 0 ? (
                  <p className="text-gray-500 italic p-4 text-center">Aucune note trouvée</p>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredNotes.map(note => (
                      <div 
                        key={note.id}
                        className={`p-4 border-l-4 shadow-sm rounded cursor-pointer transition ${
                          activeNote && activeNote.id === note.id ? 'border-l-teal-600 bg-teal-50' : 'border-l-gray-300 hover:border-l-teal-300 hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          setActiveNote(note);
                          setEditMode(false);
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{note.title}</h3>
                          <div className="flex gap-2">
                            <button 
                              className="text-teal-600 hover:text-teal-800"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveNote(note);
                                setEditMode(true);
                              }}
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              className="text-red-500 hover:text-red-700"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteNote(note.id);
                              }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{note.content}</p>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">{note.category}</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {note.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Note editor/viewer */}
            <div className="w-2/3 bg-white rounded shadow">
              <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
                <h2 className="font-semibold text-xl">
                  {editMode 
                    ? (activeNote ? 'Modifier la note' : 'Nouvelle note') 
                    : activeNote 
                      ? 'Détails de la note' 
                      : 'Sélectionnez une note'
                  }
                </h2>
                {activeNote && !editMode && (
                  <button 
                    className="flex items-center gap-1 bg-white text-teal-800 px-3 py-1 rounded-md"
                    onClick={() => setEditMode(true)}
                  >
                    <Edit size={16} />
                    Modifier
                  </button>
                )}
              </div>
              
              <div className="p-6">
                {editMode ? (
                  // Edit mode
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Titre</label>
                      <input
                        type="text"
                        placeholder="Titre de la note"
                        className="w-full px-4 py-2 border rounded-md"
                        value={activeNote ? activeNote.title : newNote.title}
                        onChange={(e) => {
                          if (activeNote) {
                            setActiveNote({...activeNote, title: e.target.value});
                          } else {
                            setNewNote({...newNote, title: e.target.value});
                          }
                        }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Catégorie</label>
                      <select
                        className="w-full px-4 py-2 border rounded-md"
                        value={activeNote ? activeNote.category : newNote.category}
                        onChange={(e) => {
                          if (activeNote) {
                            setActiveNote({...activeNote, category: e.target.value});
                          } else {
                            setNewNote({...newNote, category: e.target.value});
                          }
                        }}
                      >
                        <option value="" disabled>Sélectionner une catégorie</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Contenu</label>
                      <textarea
                        placeholder="Contenu de la note"
                        className="w-full px-4 py-2 border rounded-md h-64 resize-none"
                        value={activeNote ? activeNote.content : newNote.content}
                        onChange={(e) => {
                          if (activeNote) {
                            setActiveNote({...activeNote, content: e.target.value});
                          } else {
                            setNewNote({...newNote, content: e.target.value});
                          }
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <button
                        className="px-4 py-2 border rounded-md hover:bg-gray-100"
                        onClick={() => {
                          setEditMode(false);
                          if (!activeNote) setActiveNote(null);
                        }}
                      >
                        Annuler
                      </button>
                      <button
                        className="flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
                        onClick={activeNote ? handleUpdateNote : handleCreateNote}
                      >
                        <Save size={18} />
                        {activeNote ? 'Mettre à jour' : 'Enregistrer'}
                      </button>
                    </div>
                  </div>
                ) : activeNote ? (
                  // View mode
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">{activeNote.title}</h2>
                      <div className="flex gap-3">
                        <span className="text-sm bg-teal-100 text-teal-800 px-2 py-1 rounded">{activeNote.category}</span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar size={14} />
                          {activeNote.date}
                        </span>
                      </div>
                    </div>
                    <div className="whitespace-pre-line bg-gray-50 p-4 rounded min-h-64 text-gray-800">
                      {activeNote.content}
                    </div>
                  </div>
                ) : (
                  // No note selected
                  <div className="h-64 flex flex-col items-center justify-center text-gray-500">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">Aucune note sélectionnée</h3>
                      <p className="mb-4">Sélectionnez une note dans la liste ou créez-en une nouvelle</p>
                      <button 
                        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md mx-auto hover:bg-teal-700"
                        onClick={() => {
                          setActiveNote(null);
                          setEditMode(true);
                        }}
                      >
                        <Plus size={18} />
                        Créer une note
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;