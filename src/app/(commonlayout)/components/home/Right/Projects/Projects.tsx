"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/services/projects";
import { Project } from "@/types/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LoadingUI from "@/app/(commonlayout)/shared/Loading/LoadingUI";

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // setLoading(true);
        const data = await getProjects();
        // ✅ Only keep featured projects
        const featured = data.filter((p: Project) => p.featuredProject === true);
        setProjects(featured);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects.");
      } finally {
        // setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // if (loading)
  //       return (
  //           <div>
  //               <LoadingUI />
  //           </div>
  //       )
  if (error)
    return <p className="text-red-500 mt-4 text-center">{error}</p>;
  if (projects.length === 0)
    return <p className="text-muted-foreground mt-4 text-center">No featured projects found.</p>;

  const displayedProjects = projects.slice(0, 4);

  return (
    <section
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-4 md:mt-20"
      id="projects"
    >
      <h1 className="md:hidden text-2xl font-medium text-text my-4 text-center">
        Featured Projects
      </h1>

      <div className="space-y-8" >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project._id}
            className="flex justify-between items-start gap-4 py-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* 🖼️ Image */}
            {project.imageArray?.length > 0 && (
              <motion.div
                className="relative w-1/4 h-28 my-1 overflow-hidden rounded-sm shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.imageArray[0]}
                  alt={project.title}
                  fill
                  className="object-cover object-top rounded-sm transition-all duration-[6s] ease-in-out hover:object-bottom"
                onClick={() => router.push(`/projects/${project._id}`)}/>
              </motion.div>
            )}

            {/* 📋 Details */}
            <div className="w-3/4" onClick={() => router.push(`/projects/${project._id}`)}>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[20px] font-semibold text-hovertext">
                  {project.title}
                </h2>
                   {project.subTitle && ( 
                    <p className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm transition-colors duration-200">
                      {project.subTitle}
                    </p> 
                  )}
              </div>

           

              {project.description && (
                <p className="text-sm text-justify text-muted-foreground mb-3 line-clamp-3"> {project.description}

                </p>
              )}

             {project.technologies?.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2 mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>
                        )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        onClick={() => router.push("/projects")}
        className="flex justify-center md:justify-end mt-6"
        whileHover={{ scale: 1.05 }}
      >
        <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer text-sm hover:text-text bg-secondary/10 transition-all duration-300 text-hovertext">
          View more projects <ArrowUpRight size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
