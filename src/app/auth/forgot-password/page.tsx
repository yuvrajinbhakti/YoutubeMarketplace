"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    try {
      setIsLoading(true);
      setError(null);

      // Here we would implement the actual password reset logic
      // For now, just simulate a success after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
    } catch (err) {
      setError("An error occurred while trying to send the reset link");
      console.error("Password reset error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="py-12">
      <div className="container mx-auto max-w-md px-4">
        <div className="bg-white border rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-gray-600">
              Enter your email and we&apos;ll send you a link to reset your
              password
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-800 p-3 rounded-md mb-6 text-sm">
              {error}
            </div>
          )}

          {success ? (
            <div className="text-center">
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                <p className="font-medium">Reset link sent!</p>
                <p className="mt-1 text-sm">
                  Check your email for instructions to reset your password.
                </p>
              </div>
              <Link
                href="/auth/login"
                className="text-purple-600 hover:underline font-medium"
              >
                Return to login
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white hover:bg-purple-700 py-2 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>

              <div className="text-center">
                <Link
                  href="/auth/login"
                  className="text-purple-600 hover:underline text-sm"
                >
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
