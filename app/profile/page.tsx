"use client";

import { useAuth } from '../../../hooks/useAuth';

export default function ProfilePage() {
  const { user, isLoggedIn, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isLoggedIn || !user) {
    // Hook redirects, but extra protection
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 gap-6 p-4">
      <h1 className="text-4xl font-bold text-black">Student Profile</h1>

      {/* Profile Card */}
      <div className="flex flex-col gap-6 w-80 bg-white p-8 rounded-2xl shadow-xl border">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-2">{user.name}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <p className="text-sm text-gray-500">Welcome back, {user.name}!</p>
    </div>
  );
}
