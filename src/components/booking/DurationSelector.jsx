"use client";

export default function DurationSelector({ value = 1, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">
        Select Duration (Days)
      </label>

      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="input input-bordered w-full"
      >
        {[...Array(30)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} Day{i + 1 > 1 ? "s" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
