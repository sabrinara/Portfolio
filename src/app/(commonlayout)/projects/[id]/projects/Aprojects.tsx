"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projects";
import { Project } from "@/types/projects";
import Image from "next/image";

const Aprojects = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("overview");

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

  // 👇 Highlight active section while scrolling
 useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]"); // ✅ explicitly type HTMLElement

  const handleScroll = () => {
    let current = "overview";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // ✅ no more TypeScript error
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id") || "overview";
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  if (loading) {
    return <p className="mt-4 text-muted-foreground text-center">Loading...</p>;
  }

  if (!project) {
    return <p className="mt-4 text-red-500 text-center">Project not found</p>;
  }

  return (
    <section className="md:w-[1120px] mx-auto py-10 px-4 md:flex md:gap-10 relative ">
      {/* ==== Left Floating Navigation ==== */}
      <aside className="hidden md:block w-64 sticky top-24 h-fit bg-secondary/10 rounded-xl p-4">
        <h3 className="font-semibold mb-4 text-lg text-hovertext">Quick Links</h3>
        <nav className="flex flex-col gap-2 text-sm">
          {[
            { id: "overview", label: "Overview" },
            { id: "keyFeatures", label: "Key Features" },
            { id: "technologies", label: "Technologies" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ==== Main Content ==== */}
      <div className="flex-1">
        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        {/* Image */}
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

        {/* Overview Section */}
        <section id="overview" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-2">About This Project</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Key Features Section */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
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

        {/* Feature Details */}
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
                  alt={`Feature ${index + 1} image`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </section>
        ))}

        {/* Technologies Section */}
        {project.technologies && project.technologies.length > 0 && (
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
    </section>
  );
};

export default Aprojects;
