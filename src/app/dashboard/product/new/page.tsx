import Link from "next/link";

export default function NewProductPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <Link
            href="/dashboard"
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
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white border rounded-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-8">Create New Product</h1>

          <form>
            <div className="space-y-8">
              {/* Basic Info Section */}
              <div>
                <h2 className="text-lg font-medium mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Product Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter a descriptive title for your product"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Describe your product in detail"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Price
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="text"
                          id="price"
                          className="w-full pl-7 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Product Type
                      </label>
                      <select
                        id="type"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select product type...</option>
                        <option value="pdf">PDF Document</option>
                        <option value="video">Video Course</option>
                        <option value="image">Image/Graphics</option>
                        <option value="audio">Audio Content</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Media Section */}
              <div>
                <h2 className="text-lg font-medium mb-4">Product Media</h2>

                <div className="space-y-6">
                  {/* Product Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Thumbnail
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
                          >
                            <span>Upload an image</span>
                            <input
                              id="image-upload"
                              name="image-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Product File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Digital Product File
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
                          >
                            <span>Upload your file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, ZIP, MP4, MP3, or other file types up to 500MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end space-x-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                >
                  Create Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
