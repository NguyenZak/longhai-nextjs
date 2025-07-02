"use client";

import { useState } from "react";
import clsx from "clsx";

type Seat = {
  seatId: string;
  row: string;
  col: number;
  zone: string;
  price: number;
  status: "available" | "hold" | "sold";
};

type Props = {
  seats: Seat[];
  onChange?: (selectedSeats: Seat[]) => void;
};

export default function SeatSelector({ seats, onChange }: Props) {
  const [selected, setSelected] = useState<Seat[]>([]);

  const handleSelect = (seat: Seat) => {
    if (seat.status !== "available") return;

    const exists = selected.find((s) => s.seatId === seat.seatId);
    let updated: Seat[];

    if (exists) {
      updated = selected.filter((s) => s.seatId !== seat.seatId);
    } else {
      updated = [...selected, seat];
    }

    setSelected(updated);
    onChange?.(updated);
  };

  const rows = [...new Set(seats.map((s) => s.row))];
  const cols = Math.max(...seats.map((s) => s.col));

  return (
    <div className="overflow-x-auto">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(30px, 1fr))` }}>
        {rows.map((row) =>
          seats
            .filter((s) => s.row === row)
            .sort((a, b) => a.col - b.col)
            .map((seat) => (
              <button
                key={seat.seatId}
                onClick={() => handleSelect(seat)}
                className={clsx(
                  "w-8 h-8 rounded text-xs",
                  seat.status === "sold" && "bg-gray-400 cursor-not-allowed",
                  seat.status === "hold" && "bg-yellow-300",
                  seat.status === "available" && "bg-green-200 hover:bg-green-300",
                  selected.find((s) => s.seatId === seat.seatId) && "bg-pink-500 text-white"
                )}
              >
                {seat.row + seat.col}
              </button>
            ))
        )}
      </div>

      <div className="mt-4 text-sm">
        <p>Ghế đã chọn: {selected.map((s) => s.seatId).join(", ")}</p>
        <p>Tổng tiền: {selected.reduce((sum, s) => sum + s.price, 0).toLocaleString()}₫</p>
      </div>
    </div>
  );
}
