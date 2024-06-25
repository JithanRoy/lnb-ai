import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-[#e4eaee] py-4 px-20 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png" // Path to your logo in the public folder
          alt="Your Company Logo"
          width={100} // Adjust width and height as needed
          height={40}
          priority // Optimize for faster loading
        />
      </Link>

      <nav className="space-x-8">
        <Link href="/search" className="text-gray-800 hover:text-orange-500">
          Start Search
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-orange-500">
          About
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-orange-500">
          Contact
        </Link>
        <Link
          href="/login"
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};
