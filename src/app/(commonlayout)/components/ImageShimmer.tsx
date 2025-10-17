"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/shimmer";
import { useTheme } from "next-themes";

interface ImageShimmerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageShimmer = ({ src, alt, width, height, className }: ImageShimmerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine actual theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const cardColor = currentTheme === "dark" ? "#0f1e30" : "#f1f8ff"; 

  if (!mounted) {
    // avoid rendering wrong shimmer before theme loads
    return (
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {isLoading && (
        <div
          key={currentTheme} 
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,${toBase64(
              shimmer(width, height, cardColor)
            )}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageShimmer;
