"use client";

import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { isLoggedIn, logout, isLoading, user } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (isLoggedIn) {
    window.location.href = '/profile';
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 bg-gray-200">
      <h1 className="text-3xl font-bold text-black">Please Login to Access Dashboard</h1>
      <button
        onClick={() => window.location.href = '/login'}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go to Login
      </button>
    </div>
  );
}
