import { Project, TeamMember, Service } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Revolution",
    description: "A blockchain-based financial platform for secure transactions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "Blockchain", "TypeScript"]
  },
  {
    id: 2,
    title: "HealthTech Solutions",
    description: "AI-powered healthcare management system",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"]
  },
  {
    id: 3,
    title: "Smart City Platform",
    description: "IoT-based city infrastructure management",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
    technologies: ["IoT", "AWS", "React Native", "Node.js"]
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Jordan Sanchez | marisak98",
    role: "Devops, SysAdmin, GNU/Linux, bash y backend developer",
    image: "https://avatars.githubusercontent.com/u/114886771?v=4",
    github: "https://github.com/marisak98",
    linkedin: "https://ec.linkedin.com/in/jordan-alexander-sanchez-cuascota-94b205256",
    mail: "sanchezjordan.sh@gmail.com"
  },
  {
    id: 2,
    name: "Jean Cedeño | JacoJean07",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/132111636?v=4",
    github: "https://github.com/JacoJean07",
    linkedin: "https://www.linkedin.com/in/jean-carlos-cede%C3%B1o-0617732a5/",
    mail: "jeancarlos10171@gmail.com"
  },
  {
    id: 3,
    name: "Pablo Perez | Kongobogo ",
    role: "Product Manager, Scrum Master, UX Designer",
    image: "https://avatars.githubusercontent.com/u/111101691?v=4",
    github: "https://github.com/lordPius",
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Software Personalizado",
    description: "Creamos software personalizado para atender a tus necesidades",
    icon: "Code2"
  },
  {
    id: 2,
    title: "Soluciones de Cloud",
    description: "Escala tus operaciones con nuestras soluciones de cloud",
    icon: "Cloud"
  },
  {
    id: 3,
    title: "Seguridad Informática",
    description: "Protege tus datos y aplicaciones con nuestras soluciones de seguridad",
    icon: "Shield"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Desarrollamos soluciones de AI y Machine Learning para mejorar tus operaciones",
    icon: "Brain"
  }
];