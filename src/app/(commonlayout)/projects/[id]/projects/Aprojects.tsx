"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projects";
import { Project } from "@/types/projects";
import Image from "next/image";

const Aprojects = () => {
  const { id } = useParams(); // 🆔 get ID from URL
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id as string);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p className="mt-4 text-muted-foreground">Loading...</p>;
  if (!project) return <p className="mt-4 text-red-500">Project not found</p>;

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {project.imageArray && project.imageArray.length > 0 && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={project.imageArray[0]}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {project.subTitle && (
        <p className="text-lg text-muted-foreground mb-4">{project.subTitle}</p>
      )}

      <p className="text-base mb-6">{project.description}</p>

      <div>
        <h3 className="font-semibold mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aprojects;
