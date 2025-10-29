"use client";

import React from "react";
import { CalendarClock, Cpu, MonitorCog, RotateCcwKey } from "lucide-react";

interface TechFeaDateProps {
  date?: string;
  totalTechnologyCount: number;
  totalKeyFeaturesCount: number;
}

const TechFeaDate: React.FC<TechFeaDateProps> = ({
  date,
  totalTechnologyCount,
  totalKeyFeaturesCount,
}) => {
  // Safely format the date only if it's provided
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No Date";

  return (
    <div className="flex justify-between md:justify-start items-center gap-2  md:gap-6 my-4 md:mb-6 ">
      <div className="flex items-center gap-1 md:gap-2">
        <CalendarClock size={20} className="" />
        <h1 className="text-sm  ">{formattedDate}</h1>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <Cpu size={20} className="" />
       
        <h1 className="text-sm  ">
          {totalTechnologyCount} Technologies
        </h1>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <MonitorCog size={20} className="" />
        <h1 className="text-sm  ">
          {totalKeyFeaturesCount} Features
        </h1>
      </div>
    </div>
  );
};

export default TechFeaDate;
