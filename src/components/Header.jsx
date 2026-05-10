import React from 'react';
import { Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4 px-6 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand/20 rounded-xl">
            <Users className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Random Users</h1>
            <p className="text-sm text-dark-text-muted">Explore public profiles seamlessly.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
