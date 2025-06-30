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
    const updated = exists
      ? selected.filter((s) => s.seatId !== seat.seatId)
      : [...selected, seat];

    setSelected(updated);
    onChange?.(updated);
  };

  const rows = [...new Set(seats.map((s) => s.row))];
  const cols = Math.max(...seats.map((s) => s.col));

  if (seats.length === 0) {
    return <p className="text-sm text-gray-500">Không có dữ liệu ghế.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Sơ đồ ghế */}
      <div className="overflow-x-auto">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(30px, 1fr))` }}
        >
          {rows.map((row) =>
            seats
              .filter((s) => s.row === row)
              .sort((a, b) => a.col - b.col)
              .map((seat) => (
                <button
                  key={seat.seatId}
                  onClick={() => handleSelect(seat)}
                  className={clsx(
                    "w-8 h-8 rounded text-xs flex items-center justify-center font-medium transition",
                    seat.status === "sold" && "bg-gray-400 text-white cursor-not-allowed",
                    seat.status === "hold" && "bg-yellow-300 text-black",
                    seat.status === "available" && "bg-green-200 hover:bg-green-300 text-black",
                    selected.find((s) => s.seatId === seat.seatId) && "bg-pink-500 text-white"
                  )}
                >
                  {seat.row + seat.col}
                </button>
              ))
          )}
        </div>
      </div>

      {/* Ghi chú trạng thái */}
      <div className="flex flex-wrap gap-4 text-sm">
        <Legend color="bg-green-200" label="Còn trống" />
        <Legend color="bg-yellow-300" label="Đang giữ" />
        <Legend color="bg-gray-400" label="Đã bán" />
        <Legend color="bg-pink-500" label="Đã chọn" />
      </div>

      {/* Thông tin ghế đã chọn */}
      <div className="text-sm mt-2">
        <p>Ghế đã chọn: <strong>{selected.map((s) => s.seatId).join(", ") || "Chưa chọn"}</strong></p>
        <p>
          Tổng tiền:{" "}
          <strong>{selected.reduce((sum, s) => sum + s.price, 0).toLocaleString()}₫</strong>
        </p>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded ${color} border`} />
      <span>{label}</span>
    </div>
  );
}
