"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingProgressBar({ initialTime = 600 }: { initialTime?: number }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const renderDigit = (char: string, idx: number) => (
    <div
      key={idx}
      className="flex overflow-hidden flex-col p-2 w-8 rounded border border-gray-200 shadow-sm items-center justify-center"
      style={{ background: "linear-gradient(to top, white 50%, rgb(242, 244, 247) 50%)" }}
    >
      {char}
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="sticky top-0 z-50 hidden md:flex justify-between gap-8 px-8 py-2 bg-white border-b shadow-md border-gray-200">
        {/* Steps */}
        <div className="flex items-center gap-8">
          {/* <button
            className="p-2 rounded-full border border-gray-200 bg-opacity-90 backdrop-blur-sm"
            aria-label="Quay lại"
            onClick={() => router.back()}
          >
            ←
          </button> */}
          <button
  data-id="buy-button-back"
  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
onClick={() => router.back()}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
</button>


        {/* Steps - đẩy hết sang trái */}
<div className="mr-auto flex items-center gap-2 flex-wrap">
  <div className="flex gap-2 items-center text-gray-900 font-semibold">
    <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">1</div>
    <span>Chọn vé</span>
    <span className="text-gray-400">›</span>
  </div>
  <div className="flex gap-2 items-center text-gray-500">
    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">2</div>
    <span>Thanh toán</span>
  </div>
</div>

        </div>

        {/* Countdown */}
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <span>Thời gian đặt vé còn lại</span>
          <div className="flex items-center gap-1 text-4xl font-extrabold text-gray-900">
            {renderDigit(minutes[0], 0)}
            {renderDigit(minutes[1], 1)}
            <div className="text-xl text-gray-400 px-1">:</div>
            {renderDigit(seconds[0], 2)}
            {renderDigit(seconds[1], 3)}
          </div>
        </div>
      </div>

{/* Mobile */}
<div className="sticky top-0 z-50 md:hidden px-4 py-2 bg-white border-b shadow-sm flex items-center justify-between">
  {/* Nút quay lại + text */}
  <button
    onClick={() => router.back()}
    className="flex items-center gap-2 text-base font-semibold text-gray-900"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    Chọn vé
  </button>

  {/* Countdown */}
  <div className="flex items-center gap-0.5 text-3xl font-extrabold text-gray-900 min-w-[92px] justify-end flex-shrink-0">
    {renderDigit(minutes[0], 0)}
    {renderDigit(minutes[1], 1)}
    <div className="text-gray-400 px-0.5">:</div>
    {renderDigit(seconds[0], 2)}
    {renderDigit(seconds[1], 3)}
  </div>
</div>


    </>
  );
}
