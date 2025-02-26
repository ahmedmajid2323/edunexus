# EduNexus - Plateforme d'Apprentissage en Ligne

## Présentation
EduNexus est une plateforme d'apprentissage en ligne qui lie les apprenants avec leurs institutions en numérisant différentes ressources. Les utilisateurs peuvent consulter, résumer et accéder à leurs cours, consulter leurs projets, consulter leurs notes, et voir leurs séances, absences, et toute information liée à leur apprentissage.

## Fonctionnalités
- **Authentification** : Système sécurisé d'inscription et de connexion.
- **Cours en ligne** : Consultez et joignez vos cours en ligne.
- **Cours et Quizs** : Accédez à vos cours, leurs résumés et un chatbot qui vous aide à les réviser!
- **Projtes** : Consultez et créez vos projets tout en ajoutant vos camarades de groupe et en poursuivant votre avancement.
- **Notes** : Consultez vos notes si vous êtes des apprenants et notez les examens si vous êtes des enseignants.
- **Absences** : Consultez vos absences et leurs états(justifiées ou pas) .
- **Profil** : Consultez et modifiez votre profil accessible par les autres utilisateurs de la plateforme.

## Technologies utilisées
- **Frontend** : HTML, CSS, JavaScript, React, Vite
- **Backend** : Node.js, langchain, express
- **Base de données** : ChromaDB
- **Déploiement** : Docker 

## Installation
### Prérequis
- Node.js installé

### Étapes
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/ahmedmajid2323/edunexus.git
   cd EduNexus
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer les variables d'environnement dans un fichier `.env` :
   ```
   GROQ_API_KEY=votre_cle_secrete_de_groq
   ```
4. Démarrer le serveur de développement :
   ```bash
   npm start
   ```
5. Accéder à la plateforme à `http://localhost:5173`

## Contribution
1. Forker le dépôt.
2. Créer une branche de fonctionnalité : `git checkout -b nom-fonctionnalité`.
3. Valider les modifications : `git commit -m "Ajout d'une nouvelle fonctionnalité"`.
4. Pousser vers votre branche : `git push origin nom-fonctionnalité`.
5. Ouvrir une pull request.

## Ce projet a été réalisé par un groupe d'étudiants de l'Ecole Supérieure de Communications de Tunis dans le cadre de la matière "Introduction à l'Ingénieurie des Services Numériques"
