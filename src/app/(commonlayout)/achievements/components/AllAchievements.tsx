"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { getAchievements } from "@/services/achievement";
import { IAchievement } from "@/types/achievement";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

// 🪄 Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const AllAchievements = () => {
    const [achievements, setAchievements] = useState<IAchievement[]>([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selected, setSelected] = useState<IAchievement | null>(null);

    useEffect(() => {
        // 🧩 Initialize AOS (only for medium+ screens to improve performance)
        if (window.innerWidth >= 768) {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
                once: true,
            });
        }

        const fetchAchievements = async () => {
            try {
                // setLoading(true);
                const data = await getAchievements();
             
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
                // setLoading(false);
            }
        };

        fetchAchievements();
    }, []);

    // if (loading)
    //     return <p className="text-muted-foreground mt-4 text-center">Loading achievements...</p>;

    if (error)
        return <p className="text-red-500 mt-4 text-center">{error}</p>;

    return (
        <section
            className="scroll-mt-[100px] md:scroll-mt-[60px] my-10 px-4 md:px-10"
            id="achievement"
        >
            <h1 className="text-3xl font-semibold text-center mb-8 text-text">
                My <span className="text-hovertext">Achievements</span>
            </h1>

            {/* 🧩 Achievements Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((ach, index) => (
                    <div
                        key={ach._id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="relative group cursor-pointer overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-500 h-56"
                        onClick={() => setSelected(ach)}
                    >
                        {ach.image && (
                            <Image
                                src={ach.image}
                                alt={ach.title}
                                fill
                                className="w-full h-56 rounded object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                        <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="font-semibold text-base">{ach.title}</h3>
                            <p className="text-xs capitalize text-gray-300">{ach.type}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🪄 Dialog (Modal) */}
            <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
                <DialogContent className="max-w-xl">
                    {selected && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-lg md:text-3xl font-semibold text-text">
                                    {selected.title}
                                </DialogTitle>
                                {selected.date && (
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                        <CalendarDays size={14} />
                                        <span>{new Date(selected.date).toLocaleDateString()}</span>
                                    </div>
                                )}
                            </DialogHeader>

                            {selected.image && (
                                <Image
                                    src={selected.image}
                                    alt={selected.title}
                                    width={600}
                                    height={400}
                                    className="rounded my-3 object-cover"
                                />
                            )}

                            <DialogDescription>
                                <div className="text-sm text-muted-foreground leading-relaxed">
                                    {selected.details}
                                </div>
                                <div className="text-sm mt-2 font-medium text-hovertext capitalize">
                                    Type: {selected.type}
                                </div>
                            </DialogDescription>

                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default AllAchievements;
