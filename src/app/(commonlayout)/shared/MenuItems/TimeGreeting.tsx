"use client";

import { JSX, useEffect, useState } from "react";
import { Sun, CloudSun, Sunset, Moon, SunMoon, SunMedium, MoonStar } from "lucide-react";

type GreetingData = {
  text: string;
  icon: JSX.Element;
};

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState<GreetingData>({
    text: "",
    icon: <Sun className="w-5 h-5" />,
  });

  useEffect(() => {
    const hour = new Date().getHours();

    let greetingData: GreetingData;

   if (hour >= 5 && hour < 8) {
  greetingData = { 
    text: "Early Morning, A fresh start to a new day!", 
    icon: <Sun className="w-5 h-5" /> 
  };
} else if (hour >= 8 && hour < 12) {
  greetingData = { 
    text: "Good Morning,Have a great day!", 
    icon: <SunMedium className="w-5 h-5" /> 
  };
} else if (hour >= 12 && hour < 15) {
  greetingData = { 
    text: "Good Afternoon,Keep the energy going!", 
    icon: <Sun className="w-5 h-5" /> 
  };
} else if (hour >= 15 && hour < 18) {
  greetingData = { 
    text: "Late Afternoon, You're doing great!", 
    icon: <CloudSun className="w-5 h-5" /> 
  };
} else if (hour >= 18 && hour < 21) {
  greetingData = { 
    text: "Good Evening, Relax, you deserve it!", 
    icon: <Moon className="w-5 h-5" /> 
  };
} else {
  greetingData = { 
    text: "It's Late Night,Dream on!", 
    icon: <MoonStar className="w-5 h-5" /> 
  };
}


    setGreeting(greetingData);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-lg  text-text mr-6">
      {greeting.icon}
      <span>{greeting.text}</span>
       
    </div>
  );
}
