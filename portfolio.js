import emoji from "react-easy-emoji";

export const greetings = {
  name: "Godbless Onoriode",
  title: "Hi! I'm Godbless",
  description:
    "I'm a passionate Full Stack Web Developer having an experience of building Web applications with Angular/ Reactjs / Nodejs/ Nestjs/ Ionic and some other cool libraries and frameworks and Cross Platform Mobile Apps With Angular.",
  resumeLink: "https://1drv.ms/b/s!AqTK0czETeAdjOtioGLSKJckubIvmg?e=0O4qHA",
};

export const openSource = {
  githubUserName: "onosgb",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://web.facebook.com/onosgb",
  instagram: "https://www.instagram.com/onosgb/",
  twitter: "https://twitter.com/onosgb",
  github: "https://github.com/onosgb",
  linkedin: "https://www.linkedin.com/in/godbless-onoriode-a33587127/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "logos:angular-icon",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "php",
      fontAwesomeClassname: "logos:php",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "nestjs",
      fontAwesomeClassname: "logos:nestjs",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Imo State Polytecnic",
    subHeader: "Higher National Diploma (HND) in Computer Science",
    duration: "November 2014 - October 2016",
    desc: "Participated in the research of Design and implementation of online social network.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    schoolName: "Imo State Polytecnic",
    subHeader: "Odinary National Diploma (OND) in Computer Science",
    duration: "November 2010 - August 2012",
    desc: "Participated in the research of Network and Information Services.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "M-R International (MrSoft",
    companylogo: "/img/icons/common/google.svg",
    date: "NOV 2018 – Present ",
    desc: "Responsibilities",
    descBullets: [
      "Develop and maintain web applications using JavaScript, TypeScript, HTML, CSS, Angular, Node.js, React, MongoDB, Postgres, MSSQL, and AWS.",
      "Collaborate with cross-functional teams to deliver high-quality software solutions",
      "Conduct code reviews and ensure adherence to coding standards",
      "Participate in the entire software development life cycle",
      "Troubleshoot and debug applications.",
      "Implement security measures to protect applications from external threats Mentor and train junior developers",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    companylogo: "/img/icons/common/github.svg",
    date: "FEB 2018 – NOV 2018 ",
    desc: "Responsibilities",
    descBullets: [
      " I Successfully integrated a third-party payment gateway into the application, enabling seamless payments for users",
      "I Implemented a caching mechanism that improved the application's performance by reducing the load on the server by 50%",
      "Increased digital sales by improving e-commerce experience on existing websites through 25+ A/B tests, resulting in 60% increase in online orders the following year, ahead of schedule by 6 months.",
    ],
  },
];

export const projects = [
  {
    name: "Ignatius Ajuru University of Education",
    desc: "School website built with wordpress, to manage the content of the university",
    github: "",
    link: "https://iauoe.edu.ng",
  },

  {
    name: "University of Port Harcourt Business School",
    desc: "The purpose of this Portal is to oversee the administration of short programmes offered by the University of Port Harcourt Business School.",
    github: "",
    link: "http://odelportal.uniport.edu.ng",
  },
  {
    name: "Crypto Hunter",
    desc: "Application for tracking crypto currency and their current price",
    github: "https://github.com/Onosgb/crypto-hunter",
    link: "https://crypto-hunter-six.vercel.app/",
  },

  {
    name: "Fidelity",
    desc: "The bank application allows users to register and login, make payments within the application, as well as view and print their previous payment history.",
    github: "https://github.com/Onosgb/bank-app",
    link: "https://bank-app-theta.vercel.app ",
  },

  {
    name: "Rivers State Ministry",
    desc: "A management application was developed for Rivers State to help manage the affairs of various ministries, including contract management, task management, accounting, and other related functions. Log In details: Email: onosgb@gmail.com, password: jamesauthor@gmail.com",
    github: "",
    link: "https://rvsm-pi.vercel.app",
  },

  {
    name: "Crypto Wallets",
    desc: "This is a system for managing crypto wallets that allows users to sign up, register, update their profile information, and unlock crypto trading. After requesting access, the user will receive a token via email, which must be confirmed before they can engage in crypto trading.",
    github: "",
    link: "https://rtncrypto.vercel.app/",
  },
];

export const feedbacks = [
  {
    name: "Joel Stanley",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Onos has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Daniel Ndubuisi",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
