// src/app/(commonlayout)/loading.tsx
"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-secondary" size={40} />
        <p className="text-text text-sm">Loading...</p>
      </div>
    </div>
  );
}
