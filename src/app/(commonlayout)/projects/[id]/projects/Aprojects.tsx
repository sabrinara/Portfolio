"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projects";
import { Project } from "@/types/projects";
import Image from "next/image";
import LeftSideScroll from "./LeftSideScroll";
import ProjectUrls from "./ProjectUrls";
import Link from "next/link";
import LoadingUI from "@/app/(commonlayout)/shared/Loading/LoadingUI";
import { CalendarClock, MonitorCog, RotateCcwKey } from "lucide-react";
import TechFeaDate from "./TechFeaDate";
const Aprojects = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading)
    return (
      <div>
        <LoadingUI />
      </div>
    )
  if (!project) return <p className="mt-4 text-red-500 text-center">Project not found</p>;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "keyFeatures", label: "Key Features" },
    { id: "technologies", label: "Technologies" },
    // { id: "urls", label: "Project Links" },
  ];
  console.log("Project data):", project);
  return (
    <section className="md:w-[1120px] mx-auto md:py-10 md:gap-10 relative">
      <TechFeaDate
        date={project.date}
        totalTechnologyCount={project.totalTechnologyCount}
        totalKeyFeaturesCount={project.totalKeyFeaturesCount}
      />

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.imageArray && project.imageArray.length > 0 && (
        <div className="relative w-full h-48 md:h-[500px] mb-6">
          {project.urls?.website ? (
            <Link
              href={project.urls.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.imageArray?.[0]}
                alt={project.title}
                fill
                className="object-cover object-top rounded-sm transition-all duration-[10s] ease-in-out hover:object-bottom"
              />
            </Link>
          ) : (
            <Image
              src={project.imageArray?.[0]}
              alt={project.title}
              fill
              className="object-cover object-top rounded-sm transition-all duration-[10s] ease-in-out hover:object-bottom"
            />
          )}

        </div>
      )}
      <div className="md:flex  gap-10 py-2 md:py-10">
        <div className="flex flex-col gap-6">
          {/* URLs Section */}
          <div className="sticky top-24">
            <ProjectUrls urls={project.urls} />
          </div>

          {/* Left Floating Navigation */}
          <div className="sticky top-80">
            <LeftSideScroll sections={sections} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">


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

          {/* Overview */}
          <section id="overview" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">About This Project</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Key Features */}
          {project.keyFeatures?.length > 0 && (
            <section id="keyFeatures" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="p-3 border border-border rounded-lg hover:bg-secondary/10 transition cursor-pointer"
                  >
                    <a
                      href={`#feature-${index + 1}`}
                      className="text-hovertext hover:text-primary"
                    >
                      ✅ {feature.title || `Feature ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Individual Feature Details */}
          {project.keyFeatures?.map((feature, index) => (
            <section
              key={index}
              id={`feature-${index + 1}`}
              className="mb-10 scroll-mt-24 border-t border-border pt-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {feature.title || `Feature ${index + 1}`}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.details || "Detailed information coming soon..."}
              </p>
              {feature.image && (
                <div className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </section>
          ))}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <section id="technologies" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
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
            </section>
          )}


        </div>
      </div>
    </section>
  );
};

export default Aprojects;
