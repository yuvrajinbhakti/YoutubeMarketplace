import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Creator Marketplace",
  description: "Buy and sell digital products from your favorite YouTubers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
                {/* This will be replaced with actual auth state later */}
                <Link
                  href="/api/auth/signin"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Creator Marketplace</h2>
                <p className="text-gray-400">
                  Buy and sell digital products from your favorite YouTubers
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Platform</h3>
                  <ul className="text-gray-400">
                    <li className="mb-1">
                      <Link href="/products" className="hover:text-white">
                        Browse Products
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/dashboard" className="hover:text-white">
                        Creator Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Company</h3>
                  <ul className="text-gray-400">
                    <li className="mb-1">
                      <Link href="/about" className="hover:text-white">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/contact" className="hover:text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Creator Marketplace. All rights
              reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
