import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Pagination({ pagination, onPageChange }) {
  const { page, totalPages, previousPage, nextPage } = pagination;

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={() => previousPage && onPageChange(page - 1)}
        disabled={!previousPage}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full border border-dark-border bg-dark-surface text-white transition-all",
          previousPage 
            ? "hover:bg-brand hover:border-brand hover:text-white hover:-translate-x-0.5 cursor-pointer shadow-lg hover:shadow-brand/20" 
            : "opacity-50 cursor-not-allowed text-dark-text-muted"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-dark-text-muted">Page</span>
        <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-3 rounded-md bg-dark-border/50 text-white font-semibold text-sm">
          {page}
        </span>
        <span className="text-sm font-medium text-dark-text-muted">of {totalPages}</span>
      </div>

      <button
        onClick={() => nextPage && onPageChange(page + 1)}
        disabled={!nextPage}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full border border-dark-border bg-dark-surface text-white transition-all",
          nextPage 
            ? "hover:bg-brand hover:border-brand hover:text-white hover:translate-x-0.5 cursor-pointer shadow-lg hover:shadow-brand/20" 
            : "opacity-50 cursor-not-allowed text-dark-text-muted"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
