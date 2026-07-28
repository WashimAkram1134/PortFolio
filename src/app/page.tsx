import { supabase } from "@/lib/supabase";
import PortfolioUI from "@/components/PortfolioUI";
// Fallback local data if Supabase fetch fails (e.g. if tables don't exist yet)
import { skills as fallbackSkills, projects as fallbackProjects, publications as fallbackPubs } from "@/lib/data";

export default async function Home() {
  // Fetch Skills
  const { data: skillsData, error: skillsError } = await supabase
    .from("skills")
    .select("*");

  // Fetch Projects
  const { data: projectsData, error: projectsError } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  // Fetch Research
  const { data: researchData, error: researchError } = await supabase
    .from("research_publications")
    .select("*");

  // If there's an error (e.g., tables not created yet), use fallback data
  const skills = skillsData && skillsData.length > 0 ? skillsData : fallbackSkills;
  
  // Need to map the local DB schema to the Supabase schema in case of fallback
  const projects = projectsData && projectsData.length > 0 
    ? projectsData 
    : fallbackProjects.map(p => ({
        ...p,
        image_url: p.image,
        tech_stack: p.techStack,
        live_url: p.liveUrl,
        github_url: p.githubUrl,
        is_featured: p.isFeatured
      }));

  const publications = researchData && researchData.length > 0 ? researchData : fallbackPubs;

  return (
    <PortfolioUI 
      skills={skills}
      projects={projects}
      publications={publications}
    />
  );
}
