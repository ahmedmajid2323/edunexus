# Edunexus

Une plateforme complète pour gérer les activités académiques (cours, projets, notes, absences) avec une interface intuitive et des fonctionnalités intelligentes.

## Fonctionnalités Clés 🚀

### 1. Authentification Sécurisée 🔒
- **Connexion** via email et mot de passe.
- **Sécurité** : Chiffrement des mots de passe (bcrypt) et tokens JWT.
- Protection des routes avec middleware d'authentification.

### 2. Navigation via Sidebar 🗂️
- **Sections Accessibles** :
  - Accueil 🏠
  - Cours 📚
  - Mes Projets 📂
  - Mes Notes 📊
  - Profil 👤

---

### 3. Tableau de Bord (Accueil) 🎯
- **Prochaines Séances** : Liste des cours à venir (matière, heure, salle).
- **Suivi des Absences** : Visualisation des absences/motifs sur un calendrier.
- **Progression des Projets** : Graphiques d'avancement (barres/pourcentages).
- **Séances en Direct** : Bouton "Rejoindre la Réunion" (intégration Zoom/Google Meet).
- **Résultats d'Examen** : Notes par matière + calcul automatique des moyennes.

### 4. Gestion des Cours 📑
- **Bibliothèque de PDF** : Téléchargement et prévisualisation des cours.
- **Résumés Intelligents** : Synthèses générées par IA (ex: ChatGPT).
- **Chatbot Éducatif** : 
  - Réponses instantanées aux questions sur les cours.
  - Exemples de requêtes : "Explique les théorèmes de Pythagore", "Donne un exercice sur Java".

### 5. Espace Projets 🛠️
- **Liste des Projets** : Filtrage par statut (en cours/terminé/urgent).
- **Gestion des Tâches** : 
  - Checklist interactives avec % de complétion.
  - Assignation des tâches aux membres.
- **Dates Limites** : Notifications 3 jours avant l'échéance.
- **Création de Projet** : Formulaire avec titre, description, membres, pièces jointes.

### 6. Module de Notes 🧮
- **Relevé de Notes** : Affichage par matière/semestre (diagrammes en radar).
- **Journal de Remarques** : Notes personnelles privées (ex: "Réviser le chapitre 5").

### 7. Profil Utilisateur 🌟
- **Informations** : Photo, nom, email, filière.
- **Historique** : 
  - 5 dernières absences avec justificatifs.
  - Prochaines séances (triées par date).
- **Édition** : Mise à jour du mot de passe ou de la photo.
