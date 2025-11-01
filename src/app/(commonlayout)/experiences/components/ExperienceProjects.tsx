"use client";
import React from "react";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ExperienceProjectsProps {
  projects: Project[];
}

const ExperienceProjects: React.FC<ExperienceProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0)
    return <p className="text-muted-foreground">No projects found in this experience.</p>;

  return (
    <section className="mt-6">
      {/* <h1 className="text-2xl font-semibold text-center mb-6 text-text">
        Experience <span className="text-hovertext">Projects</span>
      </h1> */}

      <div className="flex flex-col gap-6 justify-center items-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex justify-between items-center rounded-xl bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden shadow-sm"
          >
            {/* Image */}
            {project.imageArray?.length > 0 && (
              <Link
                href={project.urls?.[0]?.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-74 w-1/2"
              >
                <Image
                  src={project.imageArray[0]}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
                />
              </Link>
            )}

            {/* Content */}
            <div className="p-4 md:p-6 w-1/2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-text">
                  {project.title}
                </h3>
                {project.urls?.[0]?.website && (
                  <Link
                    href={project.urls[0].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hovertext hover:text-primary flex items-center gap-1 text-sm"
                  >
                    Visit <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>

              <p className="text-muted-foreground text-sm line-clamp-6 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-secondary/10 text-hovertext px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project._id && (
               <div className="flex justify-end">
                 <Link
                  href={`/projects/${project._id}`}
                  className="inline-block  px-4 py-2 text-xs md:text-[14px] rounded bg-secondary text-buttontext hover:bg-primary/20 transition-all "
                >
                  View Details
                </Link>
               </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceProjects;
