"use client";

import Image from "next/image";
import doctor from "../../../public/doctor.jpg";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-yellow-200 to-green-200 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24
       flex flex-col-reverse md:flex-row items-center
        justify-center gap-16">

        {/* Right side: Title + Description */}
        <div className="text-center text-pink-700 max-w-xl p-6 font-sans">
          <h1 className="text-2xl sm:text-3xl
           md:text-3xl font-extrabold mb-6 leading-snug">
            আপনার প্রিয়জনদের জন্য পেশাদারী যত্নের বিশ্বস্ত মাধ্যম
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-700 leading-relaxed">
            Care.xyz নিশ্চিত করে যে আপনার প্রিয়জনেরা পাবেন মনোযোগী, অভিজ্ঞ 
            এবং বিশ্বস্ত কেয়ার। শিশু যত্ন থেকে শুরু করে বয়স্ক এবং বিশেষ যত্ন, 
            সব ধরনের সেবা এক প্ল্যাটফর্মে, যাতে আপনি সময় বাঁচান এবং নিশ্চিন্ত থাকেন।
          </p>
        </div>

        {/* Left side: Circular Image */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl mx-auto">
            <Image
              src={doctor}
              alt="Doctor"
              className="w-full h-full object-cover"
              width={288}
              height={288}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
