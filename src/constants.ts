import { Code2, Server, Wrench } from "lucide-react";

export const name = "Sadaf";
export const role = "software developer intern";
export const about ="passionate about building efficient, scalable, and maintainable applications. I enjoy tackling complex problems, learning new technologies, and turning ideas into functional, high-quality solutions.";
export const endpoint = "https://formspree.io/f/xreldopa";
export const footerBrand = "Sadaf's Portfolio";
export const linkedinURL = "https://www.linkedin.com/in/sadafofcl/";
export const githubURL = "https://github.com/sadafofcl";
export const heroImageSrc = "/heroImg.png";
export const position = "Trainee";
export const company = "ChicMic Studios"; 

export const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-pink-500/10 to-purple-500/10",
  },
  {
    title: "Programming Languages",
    icon: Server,
    items: [ "Java", "JavaScript", "TypeScript", "C++", "MFC", "Python"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Vite", "VS Code", "Visual Studio", "Vercel"],
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const projects = [
  {
      title: "Password Generator",
      description:
        "A secure and customizable password generator built with React and TypeScript. Users can adjust password length, include numbers and special characters, and instantly copy generated passwords to the clipboard. Perfect for creating strong, unique passwords for all accounts.",
      category: "Frontend Development",
      image: "/projImg2.png", 
      reverse: true,
      cta: "Try it now",
      link: "https://password-generator-react-typescript.vercel.app", 
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and contact information.",
    category: "Frontend Development",
    image: "/projImg3.png",
    reverse: false,
  },
  {
    title: "MFC SDI Graphics Editor with File Operations using GDI",
    description:
      "An MFC-based SDI application with object serialization for file operations such as Create, Open, Save, and Save As, implemented 2D vector graphics rendering using Win32 GDI within the View's OnDraw() method, and integrated modal CDialog-based input interfaces using MFC command routing and message maps.",
    category: "Software Development",
    image: "/projImg1.png",
    reverse: true,
    cta: "View work",
    link: "https://github.com/sadafofcl?tab=repositories",
  },
  {
    title: "Image Viewer Dialog App",
    description:
      "A dialog-based MFC application in C++ that dynamically renders BMP images using CStatic and SetBitmap(), supports runtime image selection via CFileDialog without restarting the app, and handles image switching using Windows GDI and message mapping.",
    category: "Software Development",
    image: "/projImg4.png",
    reverse: false,
    cta: "View work",
    link: "https://github.com/sadafofcl?tab=repositories",
  },
];
