"use client";

type SeatSelectorProps = {
  seats: string[];
  onChange: (seats: string[]) => void;
};

const allSeats = [
  "A1", "A2", "A3", "A4", "A5",
  "B1", "B2", "B3", "B4", "B5",
  "C1", "C2", "C3", "C4", "C5",
];

export default function SeatSelector({ seats, onChange }: SeatSelectorProps) {
  const toggleSeat = (seatId: string) => {
    if (seats.includes(seatId)) {
      onChange(seats.filter((id) => id !== seatId));
    } else {
      onChange([...seats, seatId]);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {allSeats.map((seatId) => {
        const isSelected = seats.includes(seatId);

        return (
          <button
            key={seatId}
            onClick={() => toggleSeat(seatId)}
            className={`w-12 h-12 rounded text-sm font-semibold ${
              isSelected
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );
}
