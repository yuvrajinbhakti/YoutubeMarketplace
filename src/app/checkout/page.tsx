import Link from "next/link";

// Mock product in cart (this would come from query params or state in a real app)
const mockCartProduct = {
  id: "1",
  title: "Ultimate YouTube Growth Guide",
  price: 29.99,
  type: "pdf",
};

export default function CheckoutPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <Link
            href={`/products/${mockCartProduct.id}`}
            className="flex items-center text-purple-600 hover:underline"
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
            Back to product
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="border-b pb-4 mb-4">
                <div className="flex items-start">
                  <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center text-gray-400 text-xl">
                    {mockCartProduct.type === "pdf"
                      ? "📄"
                      : mockCartProduct.type === "video"
                      ? "🎥"
                      : "🖼️"}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{mockCartProduct.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {mockCartProduct.type.toUpperCase()}
                    </p>
                    <div className="mt-1 font-semibold">
                      ${mockCartProduct.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${mockCartProduct.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(mockCartProduct.price * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium text-base pt-2 border-t">
                  <span>Total</span>
                  <span>${(mockCartProduct.price * 1.05).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Payment Details */}
          <div className="md:col-span-1">
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="card-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expiry"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Expiration
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="123"
                    />
                  </div>
                </div>

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
                    placeholder="your@email.com"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Receipt will be sent to this email
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700 py-2 rounded-md font-semibold"
                >
                  Complete Purchase
                </button>
              </form>

              <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
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
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Secure payment processing
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
