// import clientPromise from "@/lib/dbConnect";
// import Link from "next/link";

// export const dynamic = "force-dynamic";

// async function getAllServices() {
//   const client = await clientPromise;
//   const db = client.db("care_xyz");
//   const services = await db.collection("services").find({}).toArray();
//   return services;
// }

// export default async function ServicesPage() {
//   const services = await getAllServices();

//   return (
//     <section className="py-16 bg-purple-200 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           All Care Services
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service._id.toString()}
//               className="bg-pink-300 border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
//             >
//               {service.image && (
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-56 object-cover rounded-lg mb-6"
//                 />
//               )}

//               <h3 className="text-2xl font-semibold mb-3
//                text-purple-800">
//                 {service.title}
//               </h3>
//               <p className="text-gray-800 mb-5 line-clamp-3">
//                 {service.description}
//               </p>

//           <div className="flex justify-between">
//                 <div className="space-y-2 mb-6">
//                 <p className="text-xl font-bold text-green-600">
//                   ৳{service.pricePerDay} / day
//                 </p>
//                 <p className="text-gray-900">📍 {service.location}</p>
               
//               </div>
//                <p className="text-yellow-700 font-bold
//                  text-3xl text-right ">⭐ {service.rating}</p>
//             </div>

//               <Link
//  href={`/services/${service._id}`}
//          className="block text-center bg-red-900
//           hover:bg-red-700 text-white font-medium py-3 rounded-lg transition"
//               >
//                 View Details →
//               </Link>
          
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import clientPromise from "@/lib/dbConnect";
import Link from "next/link";

export const dynamic = "force-dynamic";

/* 🔹 Fetch all services from care_xyz.services */
async function getAllServices() {
  const client = await clientPromise;
  const db = client.db("care_xyz");

  const services = await db
    .collection("services")
    .find({})
    .toArray();

  return services;
}

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <section className="py-16 bg-purple-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          All Care Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id.toString()}   // ✅ safe key
              className="bg-pink-300 border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-lg mb-6"
                />
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-purple-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 mb-5 line-clamp-3">
                {service.description}
              </p>

              {/* Info */}
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-2">
                  <p className="text-xl font-bold text-green-600">
                    ৳{service.pricePerDay} / day
                  </p>
                  <p className="text-gray-900">
                    📍 {service.location}
                  </p>
                </div>

                <p className="text-yellow-700 font-bold text-3xl">
                  ⭐ {service.rating}
                </p>
              </div>

              {/* 🔹 Correct service_id route */}
         <Link
 href={`/services/${service._id.toString()}`}
className="block text-center bg-red-900 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
