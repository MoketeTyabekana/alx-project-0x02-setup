import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    router.pathname === path
      ? "text-gray-950 font-semibold"
      : "text-gray-500 hover:text-gray-950";

  return (
    <header className="w-full bg-gray-50 shadow-md">
      <nav className=" px-10 py-6 flex items-center justify-between">
        <div className="space-x-6">
          <Link href="/home" className={isActive("/home")}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/posts" className={isActive("/posts")}>
            Posts
          </Link>

          <Link href="/users" className={isActive("/users")}>
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
