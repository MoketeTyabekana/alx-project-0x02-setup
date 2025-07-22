import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    router.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500';

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-10 py-6 flex items-center justify-between">
        <div className="space-x-6">
          <Link href="/" className={isActive('/')}>
            Home
          </Link>
          <Link href="/about" className={isActive('/about')}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
