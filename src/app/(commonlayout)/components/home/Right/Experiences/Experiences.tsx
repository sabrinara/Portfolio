"use client";

import React, { useEffect, useState } from "react";
import { getExperiences } from "@/services/experience";
import { IExperience } from "@/types/experience";
import { CalendarDays, ArrowUpRight, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LoadingUI from "@/app/(commonlayout)/shared/Loading/LoadingUI";

const Experiences = () => {
  const router = useRouter();
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // setLoading(true);
        const data = await getExperiences();
        setExperiences(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load experiences.");
      } finally {
        // setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  //  if (loading)
  //         return (
  //             <div>
  //                 <LoadingUI />
  //             </div>
  //         )
  if (error)
    return <p className="text-red-500 mt-4 text-center">{error}</p>;
  if (!experiences.length)
    return <p className="text-muted-foreground mt-4 text-center">No experiences found.</p>;

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

  const displayedExperiences = sortedExperiences.slice(0, 2);

  return (
    <section
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-6 md:mt-20"
      id="experiences"
    >
      <h1 className="md:hidden text-2xl font-medium text-text my-4 text-center">
        My Experiences
      </h1>

      <div className="flex flex-col gap-6">
        {displayedExperiences.map((exp, index) => (
          <motion.div
            key={exp._id}
            className="flex justify-between items-start rounded-2xl py-5 md:px-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push("/experiences")}
          >
            {/* Date (Desktop View) */}
            <div className="hidden md:flex items-center gap-2 text-muted-foreground/80 text-sm font-bold whitespace-nowrap md:mt-1"  >
              <CalendarDays size={16} />
              <span>
                {exp.startDate
                  ? new Date(exp.startDate).toLocaleDateString()
                  : "N/A"}{" "}
                –{" "}
                {exp.endDate && exp.endDate.toLowerCase() !== "present"
                  ? new Date(exp.endDate).toLocaleDateString()
                  : "Present"}
              </span>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Title / Certificate Link */}
                {exp.certificateUrl ? (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xl font-bold text-text"
                    title="Click to view certificate"
                  >
                    {exp.title}
                  </a>
                ) : (
                  <h2 className="text-xl font-bold text-text">{exp.title}</h2>
                )}

                {/* Subtitle with Link */}
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

              {/* Description */}
              <motion.p
                className="mt-3 text-base text-justify leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {exp.about}
              </motion.p>

              <div className="flex justify-between items-start mt-4">
                {/* Technologies */}
                {exp.technologies?.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary/10 text-hovertext hover:text-primary px-3 py-1 rounded-full text-sm transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                )}
                {exp.type === "company" && exp.resumeUrl && (
                  <a
                    href={exp.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-hovertext hover:text-primary transition-colors"
                    title="View Github"
                  >
                    <Github />
                  </a>
                )}
              </div>

              {/* Date (Mobile View) */}
              <div className="flex justify-end md:hidden items-center gap-2 text-muted-foreground text-sm font-bold whitespace-nowrap mt-4">
                <CalendarDays size={16} />
                <span>
                  {exp.startDate
                    ? new Date(exp.startDate).toLocaleDateString()
                    : "N/A"}{" "}
                  –{" "}
                  {exp.endDate && exp.endDate.toLowerCase() !== "present"
                    ? new Date(exp.endDate).toLocaleDateString()
                    : "Present"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        onClick={() => router.push("/experiences")}
        className="flex justify-center md:justify-end mt-6"
        whileHover={{ scale: 1.05 }}
      >
        <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer text-sm hover:text-text bg-secondary/10 transition-all duration-300 text-hovertext">
          View my all experiences <ArrowUpRight size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
