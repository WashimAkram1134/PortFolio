-- 0. Clean up existing tables (so you can run this script multiple times safely)
DROP TABLE IF EXISTS public.skills CASCADE;
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.research_publications CASCADE;

-- 1. Create Skills Table
CREATE TABLE public.skills (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  icon text NOT NULL,
  category text NOT NULL
);

-- Seed Skills
INSERT INTO public.skills (name, icon, category) VALUES
('AI Engineer', 'Cpu', 'Role'),
('Computer Vision', 'ScanEye', 'Role'),
('GIS & Remote Sensing', 'Globe', 'Role'),
('Backend Developer', 'Server', 'Role'),
('Python', 'Code2', 'Technology'),
('Machine Learning', 'BrainCircuit', 'Technology'),
('Laravel', 'Layers', 'Technology'),
('FastAPI', 'Zap', 'Technology'),
('ML Student', 'Microscope', 'Role');

-- 2. Create Projects Table
CREATE TABLE public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  tech_stack text[] NOT NULL,
  live_url text,
  github_url text,
  is_featured boolean DEFAULT false,
  order_index int DEFAULT 0
);

-- Seed Projects
INSERT INTO public.projects (title, description, image_url, tech_stack, live_url, github_url, is_featured, order_index) VALUES
('AI-Based Crop Suitability (Ongoing)', 'Predicting crop suitability using GIS, Remote Sensing and Historical Agricultural Data.', '/images/ai based crop suitability.png', ARRAY['Python', 'ML', 'GIS', 'Remote Sensing'], '#', '#', true, 1),
('CampusBuddy', 'A university collaboration platform with routine, notes, community, alumni and question bank.', '/images/campusbuddy.png', ARRAY['Laravel', 'PHP', 'MySQL', 'Filament'], '#', '#', false, 2),
('RentHub', 'Rental marketplace for vehicles, apartments, electronics, furniture, books and more.', '/images/renthub.png', ARRAY['Laravel', 'PHP', 'MySQL', 'REST API'], '#', '#', false, 3);

-- 3. Create Research Publications Table
CREATE TABLE public.research_publications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  status text NOT NULL,
  tech text NOT NULL,
  metrics text NOT NULL,
  url text NOT NULL
);

-- Seed Research
INSERT INTO public.research_publications (title, status, tech, metrics, url) VALUES
('Object Detection in Adverse Weather Using YOLO and Explainable AI', 'Ongoing', 'YOLOv11, PyTorch, OpenCV, XAI', 'mAP50, Precision, Recall, F1-score', '#'),
('AI-Based Crop Suitability Prediction Using GIS and Remote Sensing', 'Completed', 'Python, Machine Learning, GIS, Remote Sensing', 'Accuracy, Precision, Recall, F1-score, AUC', '#');

-- Set up Row Level Security (RLS) so anyone can read this public data
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.research_publications FOR SELECT USING (true);
