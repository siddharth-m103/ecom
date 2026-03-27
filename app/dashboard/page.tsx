"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login"); // better than push
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold">Dashboard 🚀</h1>

      <button
        onClick={handleLogout}
        className="logout"
      >
        Logout
      </button>
    </div>
  );
}