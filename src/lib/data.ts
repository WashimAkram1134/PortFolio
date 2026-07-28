import { 
  Cpu, ScanEye, Globe, Server, Code2, BrainCircuit, Layers, Zap, Microscope,
  LucideIcon
} from "lucide-react";

export type Skill = {
  name: string;
  icon: string;
  category: "Role" | "Technology";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  isFeatured: boolean;
};

export type Publication = {
  title: string;
  status: string;
  tech: string;
  metrics: string;
  url: string;
};

export const skills: Skill[] = [
  { name: "AI Engineer", icon: "Cpu", category: "Role" },
  { name: "Computer Vision", icon: "ScanEye", category: "Role" },
  { name: "GIS & Remote Sensing", icon: "Globe", category: "Role" },
  { name: "Backend Developer", icon: "Server", category: "Role" },
  { name: "Python", icon: "Code2", category: "Technology" },
  { name: "Machine Learning", icon: "BrainCircuit", category: "Technology" },
  { name: "Laravel", icon: "Layers", category: "Technology" },
  { name: "FastAPI", icon: "Zap", category: "Technology" },
  { name: "ML Student", icon: "Microscope", category: "Role" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Based Crop Suitability (Ongoing)",
    description: "Predicting crop suitability using GIS, Remote Sensing and Historical Agricultural Data.",
    image: "/images/ai based crop suitability.png",
    techStack: ["Python", "ML", "GIS", "Remote Sensing"],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true
  },
  {
    id: "2",
    title: "CampusBuddy",
    description: "A university collaboration platform with routine, notes, community, alumni and question bank.",
    image: "/images/campusbuddy.png",
    techStack: ["Laravel", "PHP", "MySQL", "Filament"],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: false
  },
  {
    id: "3",
    title: "RentHub",
    description: "Rental marketplace for vehicles, apartments, electronics, furniture, books and more.",
    image: "/images/renthub.png",
    techStack: ["Laravel", "PHP", "MySQL", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: false
  }
];

export const publications: Publication[] = [
  {
    title: "Object Detection in Adverse Weather Using YOLO and Explainable AI",
    status: "Ongoing",
    tech: "YOLOv11, PyTorch, OpenCV, XAI",
    metrics: "mAP50, Precision, Recall, F1-score",
    url: "#"
  },
  {
    title: "AI-Based Crop Suitability Prediction Using GIS and Remote Sensing",
    status: "Completed",
    tech: "Python, Machine Learning, GIS, Remote Sensing",
    metrics: "Accuracy, Precision, Recall, F1-score, AUC",
    url: "#"
  }
];
