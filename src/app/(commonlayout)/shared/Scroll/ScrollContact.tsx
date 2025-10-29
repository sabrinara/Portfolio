"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const ScrollContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate to contact page
  const goToContact = () => {
    router.push("/contact-me");
  };

  return (
    <>
      {isVisible && (
        <button
          title="Feel free to reach out!"
          onClick={goToContact}
          className="
            fixed bottom-20 right-6 z-50
            bg-text text-primary-foreground
            p-3 rounded-full shadow-lg
            hover:bg-primary/80 transition-all duration-300
            animate-fadeIn
          "
          aria-label="Go to contact page"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollContact;
