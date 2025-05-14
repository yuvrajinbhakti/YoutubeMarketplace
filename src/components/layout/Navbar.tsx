"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-purple-700">
            Creator Marketplace
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/products" className="hover:text-purple-700">
              Products
            </Link>
            <Link href="/dashboard" className="hover:text-purple-700">
              Dashboard
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="hidden md:inline">
                    {user?.name || "User"}
                  </span>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsMenuOpen(false);
                          logout();
                        }}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="text-purple-700 hover:text-purple-800"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
