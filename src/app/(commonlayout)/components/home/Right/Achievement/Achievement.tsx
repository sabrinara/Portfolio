"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { getAchievements } from "@/services/achievement";
import { IAchievement } from "@/types/achievement";

const Achievement = () => {
    const [achievements, setAchievements] = useState<IAchievement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

    useEffect(() => {

        const fetchAchievements = async () => {
            try {
                setLoading(true);
                const data = await getAchievements();

                // 🧩 Sort by date (latest first)
                const sortedData = (data || []).sort((a, b) => {
                    const dateA = a.date ? new Date(a.date).getTime() : 0;
                    const dateB = b.date ? new Date(b.date).getTime() : 0;
                    return dateB - dateA; // descending order (latest first)
                });
                setAchievements(sortedData);


                setAchievements(sortedData);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch achievements.");
            } finally {
                setLoading(false);
            }
        };

        fetchAchievements();
    }, []);

    if (loading)
        return <p className="text-muted-foreground mt-4 text-center">Loading achievements...</p>;

    if (error)
        return <p className="text-red-500 mt-4 text-center">{error}</p>;

    const displayedAchievements = achievements.slice(0, 3);

    return (
        <section
            className="scroll-mt-[100px] md:scroll-mt-[60px] my-2  md:mt-20"
            id="achievement"
        >
            <h1 className="md:hidden text-2xl font-medium text-text mt-6">
                Achievements
            </h1>

            <div className="gap-6">
                {displayedAchievements.map((ach) => (
                    <div
                        key={ach._id}
                        className="flex justify-between items-start gap-4 py-4"
                    >
                        {/* 🏆 Image */}
                        {ach.image && (
                            <div className="relative w-1/4 h-28 my-1">
                                <Image
                                    src={ach.image}
                                    alt={ach.title}
                                    fill
                                    className="w-full h-full rounded-sm shadow-lg object-cover object-top ease-in-out duration-[8s] hover:object-bottom"
                                />
                            </div>
                        )}

                        {/* 📝 Details */}
                        <div className="w-3/4">
                            <h2 className="text-[20px] font-semibold text-text">{ach.title}</h2>

                            {/* Type */}
                            <p className="text-hovertext text-sm font-medium capitalize mb-1">
                                {ach.type}
                            </p>

                            {/* Date (optional if exists) */}
                            {ach.date && (
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                                    <CalendarDays size={14} />
                                    <span>{new Date(ach.date).toLocaleDateString()}</span>
                                </div>
                            )}

                            {/* Details text */}
                            {ach.details && (
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                                    {ach.details}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔗 View More Button */}
            <div onClick={() => router.push("/achievements")} className="flex justify-end">
               <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer hover:text-text bg-secondary/10 transition-all duration-300 text-hovertext">
                    View all achievements <ArrowUpRight size={16} />
                </div>
            </div>
        </section>
    );
};

export default Achievement;
