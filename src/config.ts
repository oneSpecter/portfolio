export const siteConfig = {
  name: "Andrea Blasetti",
  title: "Studente di Informatica",
  description: "Portfolio personale di Andrea Blasetti",
  accentColor: "#7C3AED",
  dkbackgroundColor: "#000023",
  social: {
    email: "andreaablasetti@gmail.com",
    linkedin: "https://www.linkedin.com/in/andreablasetti/",
    instagram: "https://www.instagram.com/andre.blasetti/",
    github: "https://github.com/oneSpecter",
  },
  aboutMe:
    "ICT Specialist – Analyst presso Mare Group, dove contribuisco allo sviluppo e all’analisi di soluzioni informatiche in un contesto aziendale strutturato. Parallelamente studio Informatica presso l’Università La Sapienza di Roma, approfondendo programmazione e tecnologie digitali con un forte orientamento all’innovazione e alla crescita continua.",
  skills: ["Java", "Angular", "JavaScript", "Python", "MongoDB", "mySQL", "REST API"],
  projects: [
    {
      name: "MareBank",
      description: "Progettazione e sviluppo di un’applicazione bancaria web full-stack basata su Java (Spring Boot), Angular e MySQL. L’applicazione implementa un’architettura client-server con API REST per la gestione di utenti, conti bancari, carte e transazioni. Il sistema utilizza un database relazionale strutturato e segue principi di sviluppo software modulari e scalabili, con separazione tra backend e frontend. Il progetto è stato realizzato come dimostrazione pratica di competenze nello sviluppo di applicazioni enterprise e sistemi struttati.",
      link: "https://github.com/oneSpecter/marebank",
      skills: ["Angular", "Api Rest", "Java SpringBoot", "MySql"]
    },
    {
      name: "Spiccibot",
      description:
        "SpicciBot è un bot Telegram progettato per la gestione delle finanze personali, sviluppato per semplificare il tracciamento di spese ed entrate direttamente tramite chat. L’applicazione consente agli utenti di registrare movimenti finanziari, generare resoconti e gestire transazioni ricorrenti tramite un sistema di “preferiti”. Il progetto è stato strutturato con logica modulare e orientata all’automazione, con l’obiettivo di offrire un’interfaccia semplice ma efficace per il monitoraggio delle proprie finanze.",
      link: "https://github.com/oneSpecter/SpicciBot.git",
      skills: ["Python", "Telegram Bot API", "SQLite", "Data Visualization"],
    },
    {
      name: "Be Cyber Project",
      description:
        "Ideazione, sviluppo e gestione di un canale YouTube dedicato alla tecnologia, con una crescita organica fino a 560 iscritti e oltre 272.000 visualizzazioni. Responsabile dell’intero ciclo di produzione dei contenuti: pianificazione editoriale, registrazione, montaggio e pubblicazione. Ottimizzazione dei video per l’algoritmo della piattaforma attraverso strategie SEO, analisi delle performance e gestione attività.",
      link: "https://www.youtube.com/@becyber",
      skills: ["Content Creation", "Video Editing", "YouTube SEO", "Social Media Management", "Storytelling"]
    },
  ],
  experience: [
    {
      company: "Mare Group",
      title: "ICT Specialist – Analyst",
      dateRange: "Marzo 2026 – Presente",
      bullets: [
        "Analisi e supporto allo sviluppo di soluzioni software e sistemi informatici in contesto aziendale",
        "Collaborazione con team tecnici per la progettazione, implementazione e ottimizzazione di applicazioni e servizi IT",
        "Attività di analisi dei requisiti, supporto ai processi di sviluppo",
      ],
    },
    {
      company: "Mare Group",
      title: "Stagista",
      dateRange: "Febbraio 2026 – Marzo 2026",
      bullets: [
        "Supporto alle attività di sviluppo e analisi software all’interno di un ambiente aziendale strutturato",
        "Affiancamento al team IT nella comprensione dei flussi di lavoro, delle architetture applicative e dei processi di sviluppo",
        "Partecipazione a task tecnici e attività di testing per il miglioramento e la validazione delle soluzioni software",
      ],
    }
  ],
  education: [
    {
      school: "Università Sapienza di Roma",
      degree: "Laurea in Informatica (in corso)",
      dateRange: "2025-Present",
      achievements: [
        //"Media voto X/30",
        "Corso di laurea triennale in Informatica",
      ],
    },
    {
      school: "Accademia Informatica",
      degree: "Developer Certificate",
      dateRange: "04/2025 - 12/2025",
      achievements: [
        "570 ore di corso",
        "Esame finale con voto 30/30",
        "Sviluppo web Java + Angular",
      ],
    },
    {
      school: "Diploma di Maturità Scientifica",
      degree: "Liceo Scientifico Pacinotti-Archimede",
      dateRange: "2019-2024",
      achievements: [
        "Diploma con voto 79/100",
        "Studente atleta con media voto 8/10",
      ],
    },
  ],
  Cv: [{
    title: "Vuoi un .pdf?",
    link: "./Cv.pdf",
    download: "Andrea Blasetti Cv.pdf",
  }]
}
