// components/BookingTimer.tsx
"use client";

import { useEffect, useState } from "react";

export default function BookingTimer({
  initialTime = 300,
  onTimeout,
}: {
  initialTime?: number;
  onTimeout?: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-yellow-100 border border-yellow-400 rounded-lg px-4 py-2 text-yellow-800 font-semibold w-fit mb-4">
      Thời gian giữ chỗ: {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
