import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Creator Marketplace
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-10">
              Discover and purchase exclusive digital products from your
              favorite YouTubers. From PDF guides to premium videos - all in one
              place.
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="bg-white text-purple-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Browse Products
              </Link>
              <Link
                href="/dashboard"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium"
              >
                Creator Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This will be populated with actual data later */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-52 bg-gray-200"></div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    Example Product {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Description of this amazing digital product by a YouTuber.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${(i * 10).toFixed(2)}</span>
                    <Link
                      href={`/products/${i}`}
                      className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-md font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Products</h3>
              <p className="text-gray-600">
                Explore digital products from your favorite YouTube creators.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Make a Purchase</h3>
              <p className="text-gray-600">
                Securely buy using our simple checkout process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Content</h3>
              <p className="text-gray-600">
                Instantly get access to your purchased digital products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
