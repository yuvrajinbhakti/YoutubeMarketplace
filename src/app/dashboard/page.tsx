import Link from "next/link";

// Mock products data for the dashboard
const mockCreatorProducts = [
  {
    id: "1",
    title: "Ultimate YouTube Growth Guide",
    price: 29.99,
    type: "pdf",
    sales: 152,
    revenue: 4557.48,
    status: "active",
  },
  {
    id: "2",
    title: "Video Editing Masterclass",
    price: 49.99,
    type: "video",
    sales: 87,
    revenue: 4349.13,
    status: "active",
  },
  {
    id: "3",
    title: "Content Creator Equipment Guide",
    price: 19.99,
    type: "pdf",
    sales: 63,
    revenue: 1259.37,
    status: "draft",
  },
];

export default function DashboardPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Creator Dashboard</h1>
          <Link
            href="/dashboard/product/new"
            className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md"
          >
            Add New Product
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border rounded-lg p-6">
            <p className="text-gray-500 mb-1">Total Revenue</p>
            <h2 className="text-3xl font-bold">$10,165.98</h2>
            <p className="text-green-600 text-sm mt-2">
              <span className="font-medium">↑ 12%</span> vs last month
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <p className="text-gray-500 mb-1">Products Sold</p>
            <h2 className="text-3xl font-bold">302</h2>
            <p className="text-green-600 text-sm mt-2">
              <span className="font-medium">↑ 8%</span> vs last month
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <p className="text-gray-500 mb-1">Active Products</p>
            <h2 className="text-3xl font-bold">2</h2>
            <p className="text-gray-500 text-sm mt-2">
              <span className="font-medium">1</span> draft
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white border rounded-lg overflow-hidden">
          <h2 className="text-lg font-medium p-6 border-b">Your Products</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-500 text-sm">
                  <th className="whitespace-nowrap px-6 py-3">Product</th>
                  <th className="whitespace-nowrap px-6 py-3">Price</th>
                  <th className="whitespace-nowrap px-6 py-3">Type</th>
                  <th className="whitespace-nowrap px-6 py-3">Sales</th>
                  <th className="whitespace-nowrap px-6 py-3">Revenue</th>
                  <th className="whitespace-nowrap px-6 py-3">Status</th>
                  <th className="whitespace-nowrap px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockCreatorProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {product.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 capitalize">
                      {product.type}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.sales}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      ${product.revenue.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          product.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {product.status.charAt(0).toUpperCase() +
                          product.status.slice(1)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex space-x-2">
                        <Link
                          href={`/dashboard/product/${product.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </Link>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
