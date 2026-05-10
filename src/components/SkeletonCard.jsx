import React from 'react';
import { cn } from '../utils/cn';

export default function SkeletonCard() {
  return (
    <div className={cn(
      "flex flex-col bg-dark-surface rounded-2xl overflow-hidden border border-dark-border",
      "animate-pulse"
    )}>
      {/* Header section */}
      <div className="relative h-24 bg-dark-border/50">
        <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full border-4 border-dark-surface bg-dark-border/80" />
        <div className="absolute top-4 right-4 w-12 h-6 rounded-full bg-dark-border/80" />
      </div>

      {/* Content section */}
      <div className="pt-14 pb-6 px-6 flex-1 flex flex-col">
        <div className="h-6 bg-dark-border/50 rounded-md w-3/4 mb-5" />
        
        <div className="flex flex-col gap-4 mt-1">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-dark-border/50 shrink-0" />
            <div className="h-4 bg-dark-border/50 rounded w-full" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-dark-border/50 shrink-0" />
            <div className="h-4 bg-dark-border/50 rounded w-5/6" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-dark-border/50 shrink-0" />
            <div className="h-4 bg-dark-border/50 rounded w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
