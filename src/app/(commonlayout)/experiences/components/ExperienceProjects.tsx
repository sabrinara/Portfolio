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
    return <p className="text-muted-foreground text-center mt-4">No projects found in this experience.</p>;

  return (
    <section className="mt-4 p-4 md:p-0">
      <div
        className={`${
          projects.length > 1
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-6 justify-center items-center"
        }`}
      >
        {projects.map((project) =>
          projects.length > 1 ? (
            // Multi-project card design
            <div
              key={project._id}
              className="flex flex-col justify-between items-center rounded-xl bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden shadow-sm w-full"
            >
              {/* Image */}
              {project.imageArray?.length > 0 && (
                <Link
                  href={project.urls?.[0]?.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-48 sm:h-56 md:h-64 lg:h-56"
                >
                  <Image
                    src={project.imageArray[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom rounded-t-xl"
                  />
                </Link>
              )}

              {/* Content */}
              <div className="py-4 w-full">
                <div className="flex justify-between items-start sm:items-center mb-2 flex-col sm:flex-row gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-text">{project.title}</h3>
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

                <p className="text-muted-foreground text-sm line-clamp-6 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies?.slice(0, 6).map((tech, i) => (
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
                      className="inline-block px-4 py-2 text-xs sm:text-[14px] rounded bg-secondary text-buttontext hover:bg-primary/20 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Single project card design
            <div
              key={project._id}
              className="flex flex-col sm:flex-row justify-between items-center rounded-xl bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden shadow-sm w-full"
            >
              {/* Image */}
              {project.imageArray?.length > 0 && (
                <Link
                  href={project.urls?.[0]?.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full sm:w-1/2 h-60 sm:h-64 md:h-72 lg:h-80"
                >
                  <Image
                    src={project.imageArray[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom rounded-2xl"
                  />
                </Link>
              )}

              {/* Content */}
              <div className="p-4 sm:p-6 w-full sm:w-1/2">
                <div className="flex justify-between items-start sm:items-center mb-2 flex-col sm:flex-row gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-text">{project.title}</h3>
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

                <p className="text-muted-foreground text-sm line-clamp-6 mb-3">{project.description}</p>

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
                      className="inline-block px-4 py-2 text-xs sm:text-[14px] rounded bg-secondary text-buttontext hover:bg-primary/20 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ExperienceProjects;
