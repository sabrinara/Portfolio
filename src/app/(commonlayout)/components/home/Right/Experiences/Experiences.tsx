"use client";

import React, { useEffect, useState } from "react";
import { getExperiences } from "@/services/experience";
import { IExperience } from "@/types/experience";
import { CalendarDays, Link as LinkIcon, FileText, ArrowUpRight } from "lucide-react";

const Experiences = () => {
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

    if (loading) return <p className="text-muted-foreground mt-4">Loading experiences...</p>;
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
        <section className="scroll-mt-[60px] my-16" id="experiences">
            {/* <h1 className="text-3xl font-semibold uppercase mb-6 text-text">
                Experiences
            </h1> */}

            <div className="flex flex-col gap-6">
                {sortedExperiences.map((exp) => (
                    <div
                        key={exp._id}
                        className="flex justify-between items-start rounded-2xl py-5 px-2 hover:bg-card/20 gap-4"
                    >
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold whitespace-nowrap md:mt-1">
                            <CalendarDays size={16} />
                            <span>
                                {exp.startDate ? new Date(exp.startDate).toLocaleDateString() : "N/A"} –{" "}
                                {exp.endDate && exp.endDate.toLowerCase() !== "present"
                                    ? new Date(exp.endDate).toLocaleDateString()
                                    : "Present"}
                            </span>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                                {/* <h2 className="text-xl font-bold text-text">{exp.title}</h2> */}
                                {exp.certificateUrl && (
                                    <a
                                        href={exp.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xl font-bold text-text"
                                        title="Click to certificate"
                                    >
                                        {exp.title}
                                    </a>
                                )}
                                {exp.url && (
                                    <a
                                        href={exp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm bg-secondary/10 text-secondary hover:text-hovertext px-3 py-1 rounded-full"
                                        title={exp.type}
                                    >
                                        {exp.subTitle} <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>

                            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                                {exp.about}
                            </p>

                            {exp.technologies?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-secondary/10 text-secondary hover:text-hovertext px-3 py-1 rounded-full text-sm"
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
        </section>
    );
};

export default Experiences;
