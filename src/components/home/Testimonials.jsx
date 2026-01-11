const stats = [
  { value: "5K+", label: "Happy Families" },
  { value: "2K+", label: "Verified Caregivers" },
  { value: "99%", label: "Satisfaction Rate" },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Families Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-pink-200 rounded-lg p-8 shadow"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-10 mb-4">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
