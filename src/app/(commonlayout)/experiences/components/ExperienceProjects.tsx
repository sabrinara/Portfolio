"use client";

import React, { useEffect, useState } from "react";
import { Project } from "@/types/projects";
import { getProjectById } from "@/services/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LoadingUI from "../../shared/Loading/LoadingUI";

interface ExperienceProjectsProps {
  projectIds: any[]; // ← allow both string and {$oid: string}
}

const ExperienceProjects: React.FC<ExperienceProjectsProps> = ({ projectIds }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        // ✅ Normalize IDs before API call
        const ids = projectIds.map((id) =>
          typeof id === "object" && "$oid" in id ? id.$oid : id
        );

        const projectPromises = ids.map((id) => getProjectById(id));
        const results = await Promise.all(projectPromises);

        setProjects(results);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    if (projectIds.length > 0) {
      fetchProjects();
    } else {
      setLoading(false);
    }
  }, [projectIds]);

  if (loading) return <LoadingUI />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!projects.length) return null;

  return (
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project._id}
          className="rounded-xl bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden shadow-sm"
        >
          {/* Image */}
          {project.imageArray?.length > 0 && (
            <Link
              href={project.urls?.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-48 w-full"
            >
              <Image
                src={project.imageArray[0]}
                alt={project.title}
                fill
                className="object-cover object-top rounded-t-xl transition-all duration-[5s] ease-in-out hover:object-bottom"
              />
            </Link>
          )}

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-text">{project.title}</h3>
              <Link
                href={project.urls?.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hovertext hover:text-primary flex items-center gap-1 text-sm"
              >
                Visit <ArrowUpRight size={14} />
              </Link>
            </div>

            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-secondary/10 text-hovertext px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceProjects;
