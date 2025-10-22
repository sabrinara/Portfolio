"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/services/projects"; // 👈 your API service
import { Project } from "@/types/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";

const Projects = () => {
    const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-muted-foreground mt-4">Loading projects...</p>;
  if (error) return <p className="text-red-500 mt-4">{error}</p>;

  // ✅ Only take first 2 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="scroll-mt-[100px] md:scroll-mt-[60px] my-6" id="projects">
      <h1 className="md:hidden text-2xl font-medium text-text mt-6">
        Projects
      </h1>

      <div className="gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project._id}
            className="flex justify-between items-start gap-4 py-4"
          >
            {/* 📸 Project Image */}
            {project.imageArray && project.imageArray.length > 0 && (
              <div className="relative w-1/4 h-28 my-1">
                <Image
                  src={project.imageArray[0]}
                  alt={project.title}
                  fill
                  className="w-full h-full rounded-sm shadow-lg object-cover object-top ease-in-out duration-[8s] hover:object-bottom"
                />
              </div>
            )}

            <div className="w-3/4">
              <h2 className="text-[20px] font-semibold text-text">{project.title}</h2>

              {project.subTitle && (
                <p className="text-muted-foreground text-sm mb-2">
                  {project.subTitle}
                </p>
              )}

              {project.description && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {project.description}
                </p>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => router.push('/projects')} className="flex justify-end">
  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer hover:text-hovertext hover:bg-secondary/10 transition-all duration-300">
    View more projects <ArrowUpRight size={16} />
  </div>
</div>

    </section>
  );
};

export default Projects;
