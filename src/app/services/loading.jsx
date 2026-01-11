export default function Loading() {
  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Skeleton: All Care Services */}
        <div className="h-10 w-64 mx-auto bg-gray-400 
        rounded-md mb-12 animate-pulse" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Generating 6 skeleton cards */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-400 border border-gray-300 rounded-xl p-6 animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="w-full h-56 bg-gray-400/40 rounded-lg mb-6" />

              {/* Title Skeleton */}
              <div className="h-7 bg-gray-400 rounded w-3/4
               mb-4" />

              {/* Description Skeleton (3 lines) */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-400/30 rounded w-full" />
                <div className="h-4 bg-gray-400/30 rounded w-full" />
                <div className="h-4 bg-gray-400/30 rounded w-2/3" />
              </div>

              {/* Price, Location and Rating Skeleton */}
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-3">
                  {/* Price */}
                  <div className="h-6 bg-gray-400/40 rounded w-24" />
                  {/* Location */}
                  <div className="h-4 bg-gray-400/30 rounded w-32" />
                </div>
                {/* Rating Star */}
                <div className="h-8 w-14 bg-gray-400/40 rounded" />
              </div>

              {/* Button Skeleton */}
              <div className="h-12 bg-gray-400/50 rounded-lg w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}