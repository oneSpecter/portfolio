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
    "Sono Andrea Blasetti, appassionato di informatica e tecnologie, con un background che unisce competenze tecniche e capacità relazionali. Attualmente studio Informatica presso La Sapienza, dove coltivo il mio interesse per la programmazione e l’innovazione digitale. Parallelamente, ho maturato esperienze lavorative in contesti diversi: dalla gestione completa di un locale come addetto alla ristorazione, al ruolo di assistente bagnante, fino a servizi di babysitting e tutoraggio privato. Questi percorsi mi hanno permesso di sviluppare organizzazione, problem solving, capacità di adattamento e comunicazione efficace. Lo sport ha avuto un ruolo fondamentale nella mia formazione personale: il calcio e, soprattutto, cinque anni di pallanuoto agonistica mi hanno insegnato disciplina, lavoro di squadra e resilienza. Mi considero una persona curiosa, veloce nell’apprendere e motivata a crescere, sempre pronta a mettersi in gioco per raggiungere obiettivi ambiziosi.",
  skills: ["Java", "Angular", "JavaScript", "Python", "MongoDB", "mySQL", "REST API"],
  projects: [
    {
      name: "Harmoninq",
      description:
      "Applicazione web full-stack per la gestione della libreria musicale personale, con funzionalità di creazione di playlist, caricamento di brani e integrazione con un convertitore da YouTube. Realizzata con Node.js e MongoDB. *Progetto attualmente in fase di sviluppo*",
      link: "https://github.com/oneSpecter/harmoninq.git",
      skills: ["Node.js", "Python", "REST API", "User Authentication", "Testing", "Full-stack Development"]
    },
    {
      name: "Spiccibot",
      description:
        "SpicciBot è un bot Telegram per la gestione delle spese e delle entrate personali. Permette agli utenti di registrare movimenti, visualizzare resoconti e gestire preferiti (movimenti ricorrenti).",
      link: "https://github.com/oneSpecter/SpicciBot.git",
      skills: ["Python", "Telegram Bot API", "SQLite", "Data Visualization"],
    },
    {
      name: "Be Cyber Project",
      description:
        "Ho creato e gestito un canale YouTube dedicato alla tecnologia, raggiungendo 560 iscritti e 272.709 visualizzazioni. Ho curato l’ideazione, la produzione, il montaggio e la promozione dei video, ottimizzando i contenuti per l’algoritmo di YouTube e interagendo con la community.",
      link: "https://www.youtube.com/@becyber",
      skills: ["Content Creation", "Video Editing", "YouTube SEO", "Social Media Management", "Storytelling"]
    },
  ],
  experience: [
    {
      company: "Belloverde Srl",
      title: "Cameriere e Barman",
      dateRange: "Apr 2025 - oggi",
      bullets: [
        "Gestione del servizio ai clienti con approccio orientato alla qualità e all'efficienza",
        "Preparazione professionale di cocktail e bevande, con attenzione ai dettagli e alla presentazione",
        "Coordinamento costante con la cucina per garantire tempi di servizio ottimali e comunicazione efficace",
        "Supporto nella gestione operativa del locale, sviluppando capacità organizzative e problem solving in ambienti dinamici",
      ],
    },
    {
      company: "Winebar Parsifal – Roma, Italia",
      title: "Cameriere e Responsabile di Sala",
      dateRange: "2022 – 2024",
      bullets: [
        "Gestione operativa del locale e coordinamento del personale durante le ore di punta",
        "Organizzazione e ottimizzazione dei flussi di lavoro per migliorare efficienza e tempi di servizio",
        "Gestione dei rapporti con i clienti, problem solving e capacità di lavorare sotto pressione",
        "Applicazione di un approccio sistematico alla risoluzione dei problemi e al miglioramento continuo del servizio",
      ],
    },
    {
      company: "ASD Roma 2020",
      title: "Atleta di Pallanuoto Agonista",
      dateRange: "2018 – 2025",
      bullets: [
        "Allenamenti regolari e partecipazione a competizioni in contesti altamente competitivi",
        "Sviluppo di disciplina, concentrazione e resilienza",
        "Collaborazione costante in team per il raggiungimento di obiettivi comuni",
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
        "Studente atleta con media voto 8/10",
      ],
    },
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
        //"Esame finale con voto X/30",
        "Sviluppo web Java + Angular",
      ],
    },
  ],
  Cv: [{
    title: "Vuoi un .pdf?",
    link: "./Cv.pdf",
    download: "Andrea Blasetti Cv.pdf",
  }]
}
