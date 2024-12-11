export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  mail?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}