import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
    title: {
      fr: "Ecmosgotchi",
      en: "Ecmosgotchi"
    },
    description: {
      fr: "Ecmosgotchi était mon tout premier projet, créé en utilisant HTML, CSS et JavaScript. C'est un tamagotchi virtuel où vous en prenez soin en le nourrissant, en jouant, pour le rendre heureux et le garder en vie le plus longtemps possible. Ce projet m'a aidé à apprendre les bases du développement web et a suscité ma passion pour le codage.",
      en: "Ecmosgotchi was my very first project, created using HTML, CSS, and JavaScript. It is a virtual tamagotchi where you take care of your pet by feeding it, playing games, and keeping it happy. This project helped me learn the fundamentals of web development and sparked my passion for coding."
    },
    image: "https://www.dropbox.com/scl/fi/hpcsvagogbhipzn6bip6l/jobit.png?rlkey=vo9kpszvu5jlcvkfrg2y3quh6&st=u2c2axqv&raw=1",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    githubLink: "https://github.com/Ecmosplasmidou/Tamagochi",
    websiteLink: "https://ecmosgotchi-tamagotchi-by-ecmosdev.netlify.app/"
  },
  {
    id: 3,
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
    id: 4,
    title: {
      fr: "Trendy Paris",
      en: "Trendy Paris"
    },
    description: {
      fr: "Trendy Paris était un site de e-commerce sur Shopify axé sur le prêt-à-porter. La boutique présentait une sélection de vêtements tendance. Lancée pour offrir une mode de qualité et accessible, elle a fonctionné avec succès jusqu'en décembre 2023.",
      en: "Trendy Paris was a Shopify-based e-commerce project focused on ready-to-wear fashion. The store showcased a selection of trendy apparel, embodying the essence of style. Launched to deliver quality and accessible, it operated successfully until December 2023."
    },
    image: "https://www.dropbox.com/scl/fi/k62hqaantg5garwqg725x/trendyparis.png?rlkey=xvliiy0fxt8li66ab2ozm4upt&st=1o07vule&raw=1",
    technologies: ["Shopify", "JavaScript", "HTML", "CSS"],
    socialLink: "https://www.instagram.com/trendypofficiel/",
  },
  {
    id: 5,
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
  }
];