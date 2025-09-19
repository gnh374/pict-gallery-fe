import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="font-semibold text-lg text-black">Picture Gallery</div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-black transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">
            Pictures
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-32">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold text-black mb-6 text-balance">Welcome to Picture Gallery</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover and explore beautiful images from around the world. Browse our curated collection of stunning
            photographs.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base rounded-md transition-colors font-medium">
              View Gallery
            </button>
            <button className="px-8 py-3 text-base border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded-md transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
