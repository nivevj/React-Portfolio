import {
    creator,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
  } from "../assets";

  import {
    cvrde,
    sparks,
    cpt,
    mcw,
    code,
    content,
    art,
    django,
    flask,
    sqlite,
    llama2,
    inventory,
    blog,
  } from '../assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id:"work",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: code,
    },
    {
      title: "Application Developer",
      icon: creator,
    },
    {
      title: "Content Creator",
      icon: content,
    },
    {
      title: "Doodling and Art",
      icon: art,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Sqlite",
      icon: sqlite,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Video Codec Engineer",
      company_name: "MulticoreWare",
      icon: mcw,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - June 2024",
      points: [
        "Worked on text detection and text tracking algorithms.",
        "Developed a text tracking model in Python and C++ using Optical flow algorithm to track text in the videos.",
        "Worked on Python script files and updated the script files to the latest Python version for performance tests.",
        "Explored high-level video codec architecture and the different encoders being used in the industry.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "Combat Vehicles Research & Development Establishment - DRDO",
      icon: cvrde,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Explore different AI tools and ML algorithms.",
        "Documented various ML algorithms being used in different test cases and created a simple ML model.",
      ],
    },
    {
      title: "Computer Networking Intern",
      company_name: "Chennai Port Trust",
      icon: cpt,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Explored the different computer networking architecture and protocols being used.",
        "Learnt about the network infrastructre and how communication is being carried out between client and server.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The Sparks Foundation",
      icon: sparks,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Dec 2021",
      points: [
        "Created a web application for fundraising using the front-end web development stack.",
        "Payment gateway integration is achieved with the application for fund collection using RazorPay.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Finance Analyzer Tool using LLM",
      description:
        "A finance analyzer tool that takes user transaction data then analyzes and categorizes the transactions. Ollama platform is used to run LLAMA2 model which categorize transaction data and are visualized on a monthly and yearly basis.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ollama",
          color: "green-text-gradient",
        },
        {
          name: "llm",
          color: "pink-text-gradient",
        },
        {
          name: "data-science",
          color: "blue-text-gradient",
        },
      ],
      image: llama2,
      source_code_link: "https://github.com/nivevj/Finance-analyzer-using-LLM",
    },
    {
      name: "N-Blog, A blog application",
      description:
        "A blog application where users can register and publish blogs on different categories. Built with CRUD operations allowing users to create, read, update, and delete their blogs. Users can leave comments and upvote on other published blogs.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/nivevj/N-Blog/tree/comment-feature",
    },
    {
      name: "Retail Store Stock Inventory Analytics",
      description:
        "A digitized inventory management system that performs retail store stock analysis using SARIMA algorithm and NewsVendor formula. The model predicts the inventory needed to fulfill customers and calculates the optimal order quantity for the inventory",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "data-science",
          color: "pink-text-gradient",
        },
        {
          name: "ml",
          color: "blue-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/nivevj/Retail-store-stock-inventory-analytics",
    },
  ];
  
  export { services, technologies, experiences, projects };