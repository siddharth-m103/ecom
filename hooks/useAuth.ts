"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  password?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoggedIn(loggedIn);
    setIsLoading(false);
  }, []);

  const login = (loginUser: User) => {
    localStorage.setItem('user', JSON.stringify(loginUser));
    localStorage.setItem('isLoggedIn', 'true');
    setUser(loginUser);
    setIsLoggedIn(true);
    router.push('/profile');
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsLoggedIn(false);
    router.push('/');
  };

  return { user, isLoggedIn, login, logout, isLoading };
}
