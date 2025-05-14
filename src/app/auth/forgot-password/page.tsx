import Link from "next/link";

export default function ForgotPasswordPage() {
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

          <form className="space-y-6">
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
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 py-2 rounded-md font-medium"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-purple-600 hover:underline font-medium"
              >
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
