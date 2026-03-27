"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [  password, setPassword] = useState("");
  const router = useRouter();

  //  Already login check
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/dashboard");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "siddharth" && password === "merijaan") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard"); // redirect
    } else {
      alert("Invalid Credentials ");
    }
  };

  return (
    <div className="login">
      <form
        onSubmit={handleLogin}
        className="login"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="text"
          placeholder="Enter Email"
          className="w-full p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white p-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}