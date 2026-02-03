import { Code2, Server, Wrench } from "lucide-react";

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
    items: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Vite", "VS Code", "Visual Studio "],
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const projects = [
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
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and contact information.",
    category: "Frontend Development",
    image: "/projImg3.png",
    reverse: false,
  },
  {
    title: "Image Viewer Dialog App",
    description:
      "A dialog-based MFC application in C++ that dynamically renders BMP images using CStatic and SetBitmap(), supports runtime image selection via CFileDialog without restarting the app, and handles image switching using Windows GDI and message mapping.",
    category: "Software Development",
    image: "/projImg4.png",
    reverse: true,
    cta: "View work",
    link: "https://github.com/sadafofcl?tab=repositories",
  },
];
