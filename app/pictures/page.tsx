interface Image {
  id: number
  name: string
  url: string
}

async function getImages(): Promise<Image[]> {
  try {
    const response = await fetch("http://localhost:3000/images", {
      cache: "no-store", // Ensure fresh data on each request
    })

    if (!response.ok) {
      throw new Error("Failed to fetch images")
    }

    const data = await response.json()
    return data.images
  } catch (error) {
    console.error("Error fetching images:", error)
    return []
  }
}

export default async function Pictures() {
  const images = await getImages()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="font-semibold text-lg text-black">Picture Gallery</div>
        <div className="flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-black transition-colors">
            Home
          </a>
          <a href="/pictures" className="text-gray-700 hover:text-black transition-colors">
            Pictures
          </a>
        </div>
      </nav>

      {/* Gallery Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-black mb-4">Picture Gallery</h1>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-square relative group">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
                    <p className="text-white text-sm font-medium">{image.name}</p>
                    <p className="text-white/80 text-xs truncate max-w-[80%]">{image.url}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
