// components/SeatBookingSection.tsx
"use client";


import SeatSelector from "./SeatSelector";
import BookingForm from "./BookingForm";
import { useState } from "react";

export default function SeatBookingSection() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12" id="booking">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#005366]">Sơ đồ chọn chỗ</h2>
        
        <div className="w-full h-[400px] bg-gray-100 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
          <SeatSelector seats={selectedSeats} onChange={setSelectedSeats} />
        </div>
      </div>
      <BookingForm selectedSeats={selectedSeats} total={0} />
    </div>
  );
}
