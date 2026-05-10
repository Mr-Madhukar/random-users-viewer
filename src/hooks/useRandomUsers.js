import { useState, useEffect, useCallback } from 'react';

export function useRandomUsers(page = 1, limit = 10) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async (currentPage, currentLimit) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${currentPage}&limit=${currentLimit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch users');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(page, limit);
  }, [page, limit, fetchUsers]);

  return {
    users: data?.data || [],
    pagination: {
      page: data?.page || 1,
      limit: data?.limit || 10,
      totalPages: data?.totalPages || 0,
      totalItems: data?.totalItems || 0,
      previousPage: data?.previousPage || false,
      nextPage: data?.nextPage || false,
    },
    loading,
    error,
    refetch: () => fetchUsers(page, limit)
  };
}
