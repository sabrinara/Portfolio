"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { getAchievements } from "@/services/achievement";
import { IAchievement } from "@/types/achievement";

const Achievement = () => {
  const [achievements, setAchievements] = useState<IAchievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const data = await getAchievements();

        const sortedData = (data || []).sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        });

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
    return (
      <p className="text-muted-foreground mt-4 text-center">
        Loading achievements...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 mt-4 text-center">
        {error}
      </p>
    );

  const displayedAchievements = achievements.slice(0, 3);

  return (
    <section
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-4 md:mt-20"
      id="achievements"
    >
      <h1 className="md:hidden text-2xl font-medium text-text my-4 text-center">
        Achievements
      </h1>

      <div className="space-y-8">
        {displayedAchievements.map((ach, index) => (
          <motion.div
            key={ach._id}
            className="flex justify-between items-start gap-4 py-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* 🏆 Image */}
            {ach.image && (
              <motion.div
                className="relative w-1/4 h-28 my-1 overflow-hidden rounded-sm shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={ach.image}
                  alt={ach.title}
                  fill
                  className="object-cover object-top rounded-sm transition-all duration-[6s] ease-in-out hover:object-bottom"
                />
              </motion.div>
            )}

            {/* 📝 Details */}
            <div className="w-3/4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[20px] font-semibold text-hovertext">
                  {ach.title}
                </h2>

                {/* Type */}
                <p className="text-hovertext text-sm font-medium capitalize bg-secondary/10 px-2 py-1 rounded-full">
                  {ach.type}
                </p>
              </div>

              {/* Date (optional) */}
              {ach.date && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                  <CalendarDays size={14} />
                  <span>{new Date(ach.date).toLocaleDateString()}</span>
                </div>
              )}

              {/* Details text */}
              {ach.details && ( <p className="text-justify text-sm text-muted-foreground mb-3 line-clamp-3"> {ach.details} </p> )}
              {/* {ach.details && (
                <motion.p
                  className="text-justify text-sm text-muted-foreground mb-3 line-clamp-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {ach.details}
                </motion.p>
              )} */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        onClick={() => router.push("/achievements")}
        className="flex justify-center md:justify-end mt-6"
        whileHover={{ scale: 1.05 }}
      >
        <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer text-sm hover:text-text bg-secondary/10 transition-all duration-300 text-hovertext">
          View all achievements <ArrowUpRight size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Achievement;
