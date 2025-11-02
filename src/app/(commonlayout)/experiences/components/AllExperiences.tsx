"use client";

import React, { useEffect, useState } from "react";
import { getExperiences } from "@/services/experience";
import { IExperience } from "@/types/experience";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import LoadingUI from "../../shared/Loading/LoadingUI";
import ExperienceProjects from "./ExperienceProjects"; // ✅ Import the new component
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AllExperiences = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const data = await getExperiences();
        setExperiences(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load experiences.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading)
    return (
      <div>
        <LoadingUI />
      </div>
    );
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!experiences.length) return <p>No experiences found.</p>;

  const sortedExperiences = [...experiences].sort((a, b) => {
    const aEnd =
      a.endDate && a.endDate.toLowerCase?.() !== "present"
        ? new Date(a.endDate)
        : new Date();
    const bEnd =
      b.endDate && b.endDate.toLowerCase?.() !== "present"
        ? new Date(b.endDate)
        : new Date();
    return bEnd.getTime() - aEnd.getTime();
  });

  return (
    <section
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-2"
      id="experiences"
    >
      <h1 className="text-3xl font-semibold text-center mb-8 text-text">
        My <span className="text-hovertext">Experiences</span>
      </h1>

      <div className="flex flex-col gap-8">
        {sortedExperiences.map((exp) => (
          <div
            key={exp._id}
            className="flex flex-col gap-4 rounded-2xl py-6 md:p-10 hover:bg-card/20 transition-all duration-300 border"
          >
            {/* Date (Desktop) */}
            <div className="hidden md:flex items-center gap-2 text-muted-foreground/80 text-sm font-bold whitespace-nowrap md:mt-1">
              <CalendarDays size={16} />
              <span>
                {exp.startDate
                  ? new Date(exp.startDate).toLocaleDateString()
                  : "N/A"}{" "}
                –{" "}
                {exp.endDate &&
                  exp.endDate.toLowerCase() !== "present"
                  ? new Date(exp.endDate).toLocaleDateString()
                  : "Present"}
              </span>
            </div>

            {/* Experience Info */}
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Title */}
                {exp.certificateUrl ? (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-2xl font-bold text-text"
                    title="Click to view certificate"
                  >
                    {exp.title}
                  </a>
                ) : (
                  <h2 className="text-xl font-bold text-text">{exp.title}</h2>
                )}

                {/* Subtitle / Type */}
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full"
                    title={exp.type}
                  >
                    {exp.subTitle} <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              {/* About */}
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {exp.about}
              </p>

              {/* Technologies */}
              {exp.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                 <h4 className="text-[14px] md:text-lg font-semibold text-text mb-2">
                    Technologies-
                  </h4>
                  <div className="">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm mx-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Projects Section */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-6">
                      <h4 className="text-[14px] md:text-lg font-semibold text-text mb-2">Projects-</h4>
                  <ExperienceProjects projects={exp.projects} />
                </div>
              )}


              {/* Date (Mobile) */}
              <div className="flex md:hidden items-center gap-2 text-muted-foreground text-sm font-bold whitespace-nowrap mt-4">
                <CalendarDays size={16} />
                <span>
                  {exp.startDate
                    ? new Date(exp.startDate).toLocaleDateString()
                    : "N/A"}{" "}
                  –{" "}
                  {exp.endDate &&
                    exp.endDate.toLowerCase() !== "present"
                    ? new Date(exp.endDate).toLocaleDateString()
                    : "Present"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllExperiences;
