import Cv from "./components/Cv.astro";

export const siteConfig = {
  name: "Andrea Blasetti",
  title: "Studente di informatica",
  description: "Portfolio website of Andrea Blasetti",
  accentColor: "#7C3AED",
  dkbackgroundColor: "#000023",
  social: {
    email: "andreaablasetti@gmail.com",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://x.com/",
    github: "https://github.com/",
  },
  aboutMe:
    "Sono Andrea Blasetti, appassionato di informatica e tecnologie, con un background che unisce competenze tecniche e capacità relazionali. Attualmente studio Informatica presso La Sapienza, dove coltivo il mio interesse per la programmazione e l’innovazione digitale. Parallelamente, ho maturato esperienze lavorative in contesti diversi: dalla gestione completa di un locale come addetto alla ristorazione, al ruolo di assistente bagnante, fino a servizi di babysitting e tutoraggio privato. Questi percorsi mi hanno permesso di sviluppare organizzazione, problem solving, spirito di adattamento e comunicazione efficace. Lo sport ha avuto un ruolo fondamentale nella mia formazione personale: il calcio e, soprattutto, cinque anni di pallanuoto agonistica mi hanno insegnato disciplina, lavoro di squadra e resilienza. Mi considero una persona curiosa, veloce nell’apprendere e motivata a crescere, sempre pronta a mettersi in gioco per raggiungere obiettivi ambiziosi.",
  skills: ["Java", "React", "Node.js", "Python", "MongoDB"],
  projects: [
    {
      name: "Harmoninq",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://github.com/oneSpecter/harmoninq.git",
      skills: ["Node.js", "Python", "REST API", "User Authentication", "Testing", "Full-stack Development"]

    },
    {
      name: "Spiccibot",
      description:
        "SpicciBot è un bot Telegram per la gestione delle spese e delle entrate personali. Permette agli utenti di registrare movimenti, visualizzare resoconti, e gestire preferiti (movimenti ricorrenti).",
      link: "https://github.com/oneSpecter/SpicciBot.git",
      skills: ["Python", "Telegram Bot API", "SQLite", "Data Visualization"],
    },
    {
      name: "Be Cyber project",
      description:
        "Ho creato e gestito un canale YouTube dedicato a Tech, raggiungendo [560 iscritti / 272.709 visualizzazioni]. Ho curato ideazione, produzione, montaggio e promozione dei video, ottimizzando i contenuti per l’algoritmo di YouTube e interagendo con la community.",
      link: "https://www.youtube.com/@becyber",
      skills: ["Content Creation", "Video Editing", "YouTube SEO", "Social Media Management", "Storytelling"]
    },
  ],
  experience: [
    {
      company: "Belloverde Srl",
      title: "Cameriere e Barman",
      dateRange: "Apr 2025 - In corso",
      bullets: [
        "Accoglienza e servizio clienti con attenzione e cortesia",
        "Preparazione di cocktail e bevande ",
        "Gestione delle comande e coordinamento con la cucina",
        "Supporto nella gestione del locale per garantire un’esperienza piacevole agli ospiti",
      ],
    },
    {
      company: "Winebar Parsifal, Viale Val Padana, 101, 00141 Roma",
      title: "Addetto alla Gestione",
      dateRange: "Nov 2024 - Dic 2024",
      bullets: [
        "Gestione completa del locale, incluse apertura e chiusura",
        "Preparazione di cocktail e supporto in cucina",
        "Servizio ai clienti e gestione delle comande",
        "Mantenimento degli standard di pulizia e ordine del locale",
      ],
    },
    {
      company: "Strutture Private (piscina)",
      title: "Assistente alla Sicurezza e Manutenzione",
      dateRange: "2022 - 2024",
      bullets: [
        "Sicurezza dei bagnanti, pronto intervento e primo soccorso in emergenza",
        "Manutenzione dell'area piscina e delle attrezzature",
        "Supervisione e assistenza per garantire il rispetto delle norme di sicurezza",
      ],
    },
  ],
  education: [
    {
      school: "Diploma di Maturità Scientifica",
      degree: "Liceo Scientifico Pacinotti-Archimede",
      dateRange: "2019-2024",
      achievements: [
        "Diploma con voto 79/100",
        "Studente-atleta con media voto 8/10",
      ],
    },
    {
      school: "Università Sapienza di Roma",
      degree: "Laura in Informatica (in corso)",
      dateRange: "2025-Present",
      achievements: [
        "Media voto X/30",
        "Corso di laurea triennale in Informatica",
      ],
    },
    {
      school: "Accademia informatica",
      degree: "Developer Certificate",
      dateRange: "04/2025 - 12/2025",
      achievements: [
        "670 ore di corso",
        "Esame finale con voto X/30",
        "Sviluppo web Java + Angular",
      ],
    },
  ],
  Cv: [{
    title: "Vuoi un .pdf?",
    link: "/Cv.pdf",
    download: "Andrea Blasetti Cv.pdf",
  }]
};
