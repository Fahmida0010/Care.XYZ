"use client";

import Image from "next/image";
import caregiver1 from "../../../public/patiant.jpg";
import caregiver2 from "../../../public/elderly.jpg";

export default function About() {
  return (
    <section className="py-20 bg-pink-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="flex-shrink-0 relative w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={caregiver1}
              alt="Caregiver 1"
              className="w-full h-full object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
  
        {/* Right Text + Second Image */}
        <div className="relative w-full md:w-1/2 text-center
         md:text-left">
          <h2 className="text-3xl md:text-4xl
          font-bold text-purple-800 mb-6">
            About Care.xyz
          </h2>
          <p className="text-yellow-600 font-medium max-w-lg mb-6">
            Care.xyz একটি নির্ভরযোগ্য কেয়ারগিভিং প্ল্যাটফর্ম, যা পরিবারগুলোর সঙ্গে পেশাদার কেয়ারগিভারদের সংযুক্ত করার জন্য তৈরি করা হয়েছে। 
            আমাদের লক্ষ্য হলো সবার জন্য কেয়ারগিভিংকে সহজ, নিরাপদ ও সহজলভ্য করে তোলা—হোক তা শিশুদের যত্ন, 
            বয়স্ক পরিবারের সদস্যদের দেখাশোনা, কিংবা বিশেষ যত্নের প্রয়োজন রয়েছে এমন কারও জন্য।
          </p>

          {/* Second Image overlapping */}
          <div className="absolute right-0 w-32
           h-32 md:w-40 md:h-40 rounded-t-full overflow-hidden 
           border-4 border-green-500 shadow-lg">
            <Image
              src={caregiver2}
              alt="Caregiver 2"
              className="w-full h-full object-cover"
              width={160}
              height={160}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
