"use client";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    
    // Auto login
    login(user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 gap-6">

      {/* FORM */}
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 w-80 bg-white p-6 rounded-2xl shadow-lg border"
      >
        <h2 className="text-3xl font-bold text-center text-black">
          Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="p-3 border-2 border-gray-400 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 border-2 border-gray-400 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 border-2 border-gray-400 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white p-3 rounded-lg">
          Register
        </button>
      </form>

      <button
        onClick={() => { window.location.href = '/login'; }}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Have Account? Login
      </button>

    </div>
  );
}
