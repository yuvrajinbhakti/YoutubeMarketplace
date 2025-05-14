import Link from "next/link";

// Mock products data (will be replaced with real data from API later)
const mockProducts = [
  {
    id: "1",
    title: "Ultimate YouTube Growth Guide",
    description:
      "A comprehensive PDF guide to grow your YouTube channel from 0 to 100K subscribers.",
    price: 29.99,
    type: "pdf",
  },
  {
    id: "2",
    title: "Video Editing Masterclass",
    description:
      "Learn professional video editing techniques with this 4-hour video course.",
    price: 49.99,
    type: "video",
  },
  {
    id: "3",
    title: "Content Creator Lightroom Presets",
    description:
      "Collection of 20 premium Lightroom presets for stunning YouTube thumbnails.",
    price: 19.99,
    type: "image",
  },
  {
    id: "4",
    title: "YouTube SEO Toolkit",
    description:
      "Boost your YouTube search rankings with this detailed SEO guide and worksheet.",
    price: 24.99,
    type: "pdf",
  },
  {
    id: "5",
    title: "Cinematic B-Roll Course",
    description:
      "Master the art of filming cinematic B-roll for your YouTube videos.",
    price: 39.99,
    type: "video",
  },
  {
    id: "6",
    title: "YouTube Analytics Dashboard Templates",
    description:
      "Track your YouTube channel growth with these Excel and Google Sheets templates.",
    price: 14.99,
    type: "pdf",
  },
];

export default function ProductsPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Browse Products</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover and purchase digital products created by YouTubers to
            enhance your skills, grow your channel, or improve your content.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="border rounded-lg p-6 sticky top-6">
              <h2 className="font-semibold mb-4">Filter Products</h2>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Product Type</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>PDF Guides</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Video Courses</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Image Assets</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="border rounded px-2 py-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="border rounded px-2 py-1 text-sm"
                  />
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 mt-3 rounded text-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Product Listings */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="h-40 bg-gray-200 relative">
                      <span className="absolute top-2 right-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded capitalize">
                        {product.type}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="font-bold">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
