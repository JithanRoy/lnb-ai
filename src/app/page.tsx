// src/app/page.tsx
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/auth/register');
  };

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  return (
    <div>
      <h1>Welcome to Local New Business</h1>
      <p>Do you want to grow your business? Join us now!</p>
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default HomePage;
