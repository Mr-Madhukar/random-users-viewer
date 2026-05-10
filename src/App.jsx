import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { useRandomUsers } from './hooks/useRandomUsers';
import Header from './components/Header';
import UserCard from './components/UserCard';
import SkeletonCard from './components/SkeletonCard';
import Pagination from './components/Pagination';

function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { users, pagination, loading, error, refetch } = useRandomUsers(page, 12);

  // Filter users based on search query (name, email, or country)
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    
    const query = searchQuery.toLowerCase();
    return users.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const email = user.email.toLowerCase();
      const country = user.location.country.toLowerCase();
      
      return fullName.includes(query) || email.includes(query) || country.includes(query);
    });
  }, [users, searchQuery]);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-dark-text-muted group-focus-within:text-brand transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or country..."
              className="block w-full pl-11 pr-10 py-3 bg-dark-surface border border-dark-border rounded-xl text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-dark-text-muted hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center flex flex-col items-center justify-center py-12">
            <p className="text-lg font-semibold mb-2">Oops! Something went wrong.</p>
            <p className="text-sm opacity-80 mb-6">{error}</p>
            <button 
              onClick={refetch}
              className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors font-medium"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Main Content Grid */}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
              // Loading Skeletons
              Array.from({ length: 12 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            ) : filteredUsers.length > 0 ? (
              // User Cards
              filteredUsers.map((user) => (
                <UserCard key={user.login.uuid} user={user} />
              ))
            ) : (
              // No Results State
              <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-dark-surface rounded-full flex items-center justify-center mb-4 border border-dark-border">
                  <Search className="w-8 h-8 text-dark-text-muted" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No users found</h3>
                <p className="text-dark-text-muted">
                  We couldn't find any users matching "{searchQuery}".
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-brand hover:text-brand-hover hover:underline transition-colors font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {!error && !loading && users.length > 0 && (
          <div className="mt-auto pt-8">
            <Pagination 
              pagination={pagination} 
              onPageChange={setPage} 
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
