import Link from "next/link";

// Mock products data (will be replaced with real data from API later)
const mockProducts = [
  {
    id: "1",
    title: "Ultimate YouTube Growth Guide",
    description:
      "A comprehensive PDF guide to grow your YouTube channel from 0 to 100K subscribers. Learn the secrets of successful content creation, audience engagement, and channel monetization strategies that actually work.",
    price: 29.99,
    type: "pdf",
    creator: "Alex Studio",
    creatorImage: "",
    features: [
      "170+ pages of actionable advice",
      "Step-by-step growth strategies",
      "Monetization blueprint",
      "SEO optimization techniques",
      "Content planning templates",
    ],
  },
  {
    id: "2",
    title: "Video Editing Masterclass",
    description:
      "Learn professional video editing techniques with this 4-hour video course. Perfect for YouTubers looking to elevate their production quality without expensive equipment.",
    price: 49.99,
    type: "video",
    creator: "EditPro",
    creatorImage: "",
    features: [
      "4+ hours of HD video tutorials",
      "Access on any device",
      "Project files included",
      "Lifetime updates",
      "Private community access",
    ],
  },
  // More mock products would be added here
];

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  // Find the product by ID (in a real app, this would be an API call)
  const product = mockProducts.find((p) => p.id === params.productId);

  if (!product) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link
          href="/products"
          className="text-purple-600 hover:underline mt-4 inline-block"
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <Link
          href="/products"
          className="flex items-center text-purple-600 hover:underline mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Product Image */}
          <div>
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              {/* This would be replaced with an actual image */}
              <div className="text-6xl text-gray-400">
                {product.type === "pdf"
                  ? "📄"
                  : product.type === "video"
                  ? "🎥"
                  : "🖼️"}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded capitalize mb-3">
              {product.type}
            </span>

            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="ml-2 text-gray-700">By {product.creator}</span>
            </div>

            <div className="text-2xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-700 mb-8">{product.description}</p>

            <h3 className="text-lg font-semibold mb-3">What's included:</h3>
            <ul className="mb-8">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-purple-600 text-white hover:bg-purple-700 py-3 rounded-md font-semibold mb-3">
              Buy Now
            </button>

            {/* Secure purchase note */}
            <div className="text-center text-sm text-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Secure purchase
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
