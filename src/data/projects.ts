import { Project } from '../types';

import templierdrivre_img from '../img/frontpage_templier-driver.png'
import driveLog_img from '../img/frontpage_drive_log.png'
import evutech_img from '../img/Capture_evutech.png'
import qrlyzer_img from '../img/QRlyzer.png'

export const projects: Project[] = [
    {
    id: 1,
    title: {
      fr: "QRlyzer",
      en: "QRlyzer"
    },
    description: {
      fr: "QRLYZE est une application SaaS de gestion de QR Codes dynamiques. Elle permet de générer, personnaliser et suivre les scans en temps réel avec des analyses détaillées (appareils, dates). Le modèle inclut un abonnement Premium via Stripe, débloquant des designs avancés, des logos personnalisés et un accès illimité au studio de création.",
      en: "QRLYZE is a SaaS platform for dynamic QR Code management. Create, customize, and track scans with real-time analytics (device types, timestamps). Features a Stripe-powered Premium tier for advanced designs, custom logos, and unlimited studio access."
    },
    image: qrlyzer_img,
    technologies: ["React", "Flask", "Tailwind", "CSS", "MongoDB, Stripe"],
    websiteLink: "https://qr-code-generator-orcin-two.vercel.app/",
    githubLink: "https://github.com/Ecmosplasmidou/qr_code_generator",
  },
  {
    id: 2,
    title: {
      fr: "E-vutech",
      en: "E-vutech"
    },
    description: {
      fr: "E-VUTECH est une plateforme web développée avec React et Firebase dédiée à la réservation de formations à la sécurité routière pour véhicules utilitaires (VUL). Les entreprises peuvent configurer leurs sessions sur mesure, sélectionner des créneaux via un calendrier dynamique et gérer leurs listes de participants en temps réel. Le back-office administrateur permet un suivi précis des quotas de session et la validation automatisée des dossiers, démontrant une maîtrise des architectures Single Page Application (SPA) et de la gestion de bases de données NoSQL.",
      en: "E-VUTECH is a web platform developed with React and Firebase, dedicated to booking road safety training sessions for light commercial vehicles (LCVs). Businesses can customize their training sessions, select slots via a dynamic calendar, and manage participant lists in real time. The admin back-office enables precise monitoring of session quotas and automated document validation, demonstrating a mastery of Single Page Application (SPA) architectures and NoSQL database management."
    },
    image: evutech_img,
    technologies: ["React", "JavaScript", "Tailwind", "Firebase"],
    websiteLink: "https://e-vutech.fr/",
    githubLink: "https://github.com/Ecmosplasmidou/E-vutech",
  },
  {
  id: 3,
  title: {
    fr: "Templier-driver",
    en: "Templier-driver"
  },
  description: {
    fr: "Templier Driver propose une interface connectée à Shopify, alliant un espace membre sécurisé et un système de badges de fidélité, conçus pour valoriser chaque palier d'achat par l'attribution de grades exclusifs.",
    en: "Templier Driver offers a Shopify-integrated interface, blending a secure member portal with a loyalty badge system designed to reward purchase milestones through exclusive rank progression."
  },
  image: templierdrivre_img,
  technologies: ["React", "Express" ,"firebase", "Tailwind", "CSS", "Hubspot"],
  githubLink: "https://github.com/Ecmosplasmidou/TemplierDriver",
  websiteLink: "https://www.templierdriver.com/"
  },
  {
    id: 4,
    title: {
      fr: "Olympic Ticket Hub",
      en: "Olympic Ticket Hub"
    },
    description: {
      fr: "Olympic Ticket Hub est un site codé en Django qui permet l'achat de billets pour les JO 2024. Les utilisateurs peuvent consulter les événements, sélectionner des billets et payer en ligne de façon sûre. Les fonctionnalités d'administration incluent le suivi des ventes et la gestion des billets, mettant en valeur les compétences en développement web.",
      en: "Olympic Ticket Hub is a Django-based site for buying tickets to the 2024 Olympics. Users can view events, select tickets, and pay securely online. Admin features include sales tracking and ticket management, showcasing web dev skills."
    },
    image: "https://www.dropbox.com/scl/fi/4ivk6q72bpv1tp9u941qe/carrent.png?rlkey=hbq8pf4rguur2lgf1qakc8y7e&st=notq6i71&raw=1",
    technologies: ["Django", "JavaScript", "Bootstrap", "MangoDb"],
    githubLink: "https://github.com/Ecmosplasmidou/site_jo_finale",
  },
  {
    id: 5,
    title: {
      fr: "PhotosShare",
      en: "PhotosShare"
    },
    description: {
      fr: "PhotosShare est un réseau social de partage de photos, codé avec Angular 18 et TypeScript, inspiré par Instagram. Il permet aux utilisateurs de créer des comptes, de publier des photos et d'interagir avec les publications d'autres.",
      en: "PhotosShare is a photo-sharing social network, coded with Angular 18 and TypeScript, inspired by Instagram. It allows users to create accounts, publish photos, and interact with other users' posts."
    },
    image: "https://www.dropbox.com/scl/fi/7koi15hd02i9vxew3hq5y/capture_photosshare.png?rlkey=akuw2t88ed7erbardw20oppbw&st=5vsn2441&raw=1",
    technologies: ["Angular", "TypeScript", "Firebase", "SCSS"],
    githubLink: "https://github.com/Ecmosplasmidou/PhotosShare",
    websiteLink: "https://snapphotoshare.netlify.app/"
  },
  {
    id: 6,
    title: {
      fr: "Hafeze Cuisine",
      en: "Hafeze Cuisine"
    },
    description: {
      fr: "Hafeze Cuisine est un site de ventes à emporter servant des plats italiens, mauriciens et indiens. Commandez en ligne pour une expérience culinaire pratique et de haute qualité à la maison.",
      en: "Hafeze Cuisine is a takeaway restaurant serving Italian, Mauritian, and Indian dishes. Order online for a convenient, high-quality dining experience at home."
    },
    image: "https://www.dropbox.com/scl/fi/fl561smweog1pe4k9ba62/tripguide.png?rlkey=i25dt8lizg0und83pgqcwqnf0&st=39eirk7m&raw=1",
    technologies: ["Flask", "Bootstrap", "JavaScript", "SQLite"],
    githubLink: "https://github.com/Ecmosplasmidou/hafeze_cuisine",
  },
  {
    id: 7,
    title: {
      fr: "Linkedin Scrapper",
      en: "Linkedin Scrapper"
    },
    description: {
      fr: "Ce script utilise Selenium pour automatiser la recherche de recruteurs RH sur LinkedIn. Il se connecte à un compte LinkedIn, effectue une recherche ciblée par ville, récupère les profils correspondants, puis leur envoie un message automatique concernant une recherche d'emploi. Il gère les éventuels blocages et sauvegarde la page source pour analyse.",
      en: "This script uses Selenium to automate the search for HR recruiters on LinkedIn. It logs into a LinkedIn account, performs a targeted search by city, retrieves matching profiles, and then sends them an automated message regarding a job search. It handles potential blocks and saves the page source for analysis."
    },
    image: "https://www.dropbox.com/scl/fi/qzkkqzn5nqn2ih76x34r6/DALL-E-2025-03-02-11.26.44-A-modern-sleek-Python-logo-with-a-tech-inspired-design.-The-logo-features-the-iconic-Python-snake-in-a-minimalist-geometric-style-with-blue-and-yell.webp?rlkey=mqw4g1wj4omhuar8oar780wi8&st=97k6n95s&raw=1",
    technologies: ["Python"],
    githubLink: "https://github.com/Ecmosplasmidou/linkedin_scrapper/tree/main",
  },
  {
  id: 8,
  title: {
    fr: "Xylecho",
    en: "Xylecho"
  },
  description: {
    fr: "Xylecho conçoit et installe des solutions acoustiques, alliant performance, design et expertise technique pour créer des environnements plus calmes et agréables.",
    en: "Xylecho designs and installs acoustic solutions, combining performance, design, and technical expertise to create quieter and more pleasant environments."
  },
  image: "https://www.dropbox.com/scl/fi/18aj9ydnuw3mkigkfgky8/screen_xylecho_portfolio.png?rlkey=1ctep5q05nfc4mg4xhij8rfux&st=rdyotymn&raw=1",
  technologies: ["Webflow", "JavaScript"],
  websiteLink: "https://xylecho.com/"
  },
  {
  id: 9,
  title: {
    fr: "Drive_log",
    en: "Drive_log"
  },
  description: {
    fr: "Drive Log opère en synergie avec Templier Driver pour offrir une plateforme de télémétrie et d'actualités mécaniques de pointe, intégrant un écosystème de fidélité exclusif où chaque interaction renforce le grade et le prestige des passionnés au sein de la communauté.",
    en: "Drive Log operates in synergy with Templier Driver to provide a cutting-edge telemetry and motorsport news platform, featuring an exclusive loyalty ecosystem where every interaction enhances member rank and prestige within the racing community."
  },
  image: driveLog_img,
  technologies: ["React", "TypeScript", "Tailwind", "CSS"],
  githubLink: "https://github.com/Ecmosplasmidou/drive_log_blog"
  },
];