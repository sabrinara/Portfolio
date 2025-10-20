"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, MailCheck } from "lucide-react"; // ✅ Lucide icons

const iconMap: Record<string, React.ElementType> = {
  Github: Github,
  Linkedin: Linkedin,
  MailCheck: MailCheck, // ✅ Fixed key
  Twitter: Twitter,
  Website: Globe,
};

const Social = () => {
     const [introData, setIntroData] = useState<IIntro | null>(null);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);
    
      useEffect(() => {
        const fetchIntro = async () => {
          try {
            setLoading(true);
            const data = await getIntro();
            if (data && data.length > 0) {
              setIntroData(data[0]);
            }
          } catch (err) {
            setError("Failed to load intro data.");
            console.error(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchIntro();
      }, []);
    
      if (loading) return <p className="text-muted-foreground mt-4">Loading intro...</p>;
      if (error) return <p className="text-red-500 mt-4">{error}</p>;
      if (!introData) return null;
    return (
        <div>
              {/* ✅ Social Links with Lucide Icons */}
        {introData.socialLinks && introData.socialLinks.length > 0 && (
          <div className="flex gap-4 mt-4">
            {introData.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon]; // match the icon string
              return (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hovertext transition-colors text-muted-foreground flex items-center gap-2"
                >
                  {IconComponent && <IconComponent size={20} />}
                  {/* <span>{link.title}</span> */}
                </a>
              );
            })}
          </div>
        )}


        </div>
    );
};

export default Social;