"use client";

import React from "react";
import { ExternalLink, Github, ScreenShare } from "lucide-react";

interface UrlItem {
  website?: string | null;
  frontend?: string | null;
  backend?: string | null;
}

interface UrlsProps {
  urls?: UrlItem | UrlItem[] | null;
}

const ProjectUrls: React.FC<UrlsProps> = ({ urls }) => {
  if (!urls) return null;

  // ✅ Handle both array or single object
  const urlData = Array.isArray(urls) ? urls[0] : urls;

  if (!urlData) return null;

  return (
    <section className="hidden md:block w-56 sticky top-8 h-fit bg-secondary/10 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-2">Project Links</h2>
      <p className="text-xs text-muted-foreground">Access the project and its source code</p>
      <div className="flex flex-col gap-3 mt-2">
        {urlData?.website || urlData?.frontend || urlData?.backend ? (
          <>
            {urlData?.website && (
              <a
                href={urlData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1 text-background bg-text hover:bg-hovertext hover:text-primary text-xs transition  py-2 rounded-sm"
              >
                <ScreenShare size={16} /> Live Website
              </a>
            )}
         <div className="flex items-center gap-1">
               {urlData?.frontend && (
              <a
                href={urlData.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1 w-full text-background bg-text hover:bg-hovertext hover:text-primary text-xs transition  py-2 rounded-sm"
              >
                <Github size={16} />Frontend 
              </a>
            )}
            {urlData?.backend && (
              <a
                href={urlData.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1 w-full text-background bg-text hover:bg-hovertext hover:text-primary text-xs transition  py-2 rounded-sm"
              >
                <Github size={16} /> Backend 
              </a>
            )}
         </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            No project links available.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectUrls;
