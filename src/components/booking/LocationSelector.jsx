"use client";

import { useState } from "react";

const divisions = [
  {
    name: "Dhaka",
    districts: [
      "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj",
      "Madaripur", "Manikganj", "Munshiganj", "Narayanganj",
      "Narsingdi", "Rajbari", "Shariatpur", "Tangail",
    ],
  },
  {
    name: "Chattogram",
    districts: [
      "Chattogram", "Bandarban", "Brahmanbaria", "Chandpur",
      "Cumilla", "Cox's Bazar", "Feni", "Khagrachhari",
      "Lakshmipur", "Noakhali", "Rangamati",
    ],
  },
  {
    name: "Rajshahi",
    districts: [
      "Bogra", "Chapai Nawabganj", "Joypurhat", "Naogaon",
      "Natore", "Pabna", "Rajshahi", "Sirajganj",
    ],
  },
  {
    name: "Khulna",
    districts: [
      "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah",
      "Khulna", "Kushtia", "Magura", "Meherpur",
      "Narail", "Satkhira",
    ],
  },
  {
    name: "Barishal",
    districts: [
      "Barishal", "Barguna", "Bhola",
      "Jhalokathi", "Patuakhali", "Pirojpur",
    ],
  },
  {
    name: "Rangpur",
    districts: [
      "Dinajpur", "Gaibandha", "Kurigram",
      "Lalmonirhat", "Nilphamari", "Panchagarh",
      "Rangpur", "Thakurgaon",
    ],
  },
  {
    name: "Sylhet",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
  },
  {
    name: "Mymensingh",
    districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
  },
];

export default function LocationSelector({ onChange }) {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const notifyParent = (updated) => {
    onChange({
      division,
      district,
      city,
      area,
      ...updated,
    });
  };

  return (
    <div className="mt-4 space-y-4">
      {/* Division */}
      <div>
        <label className="font-semibold block mb-1">Division</label>
        <select
          value={division}
          onChange={(e) => {
            setDivision(e.target.value);
            setDistrict("");
            setCity("");
            setArea("");
            notifyParent({ division: e.target.value });
          }}
          className="input input-bordered w-full"
        >
          <option value="">Select Division</option>
          {divisions.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      {/* District */}
      {division && (
        <div>
          <label className="font-semibold block mb-1">District</label>
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setCity("");
              setArea("");
              notifyParent({ district: e.target.value });
            }}
            className="input input-bordered w-full"
          >
            <option value="">Select District</option>
            {divisions
              .find((d) => d.name === division)
              ?.districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* City */}
      {district && (
        <div>
          <label className="font-semibold block mb-1">City / Thana</label>
          <input
            type="text"
            placeholder="Enter City or Thana"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              notifyParent({ city: e.target.value });
            }}
            className="input input-bordered w-full"
          />
        </div>
      )}

      {/* Area */}
      {city && (
        <div>
          <label className="font-semibold block mb-1">
            Area / Full Address
          </label>
          <input
            type="text"
            placeholder="Road, House no, Area"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              notifyParent({ area: e.target.value });
            }}
            className="input input-bordered w-full"
          />
        </div>
      )}
    </div>
  );
}
