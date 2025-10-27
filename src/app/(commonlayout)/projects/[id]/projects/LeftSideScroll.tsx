"use client";

import React, { useEffect, useState } from "react";

interface LeftSideScrollProps {
  sections: { id: string; label: string }[];
}

const LeftSideScroll: React.FC<LeftSideScrollProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";
      const sectionElements = document.querySelectorAll<HTMLElement>("section[id]");

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "overview";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:block w-56 sticky top-68 h-fit bg-secondary/10 rounded-xl p-4">
      <h3 className="font-semibold mb-4 text-lg text-text">Quick Links</h3>
      <nav className="flex flex-col gap-2 text-sm">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-colors ${
              activeSection === item.id
                ? "text-hovertext font-semibold"
                : "text-muted-foreground hover:text-hovertext"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default LeftSideScroll;
