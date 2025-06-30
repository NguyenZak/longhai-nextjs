"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function BookingForm({
  event,
  selectedSeats,
  totalPrice,
}: {
  event: any;
  selectedSeats: string[];
  totalPrice: number;
}) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
      toast.error("Bạn chưa chọn ghế.");
      return;
    }

    toast.success(`Đặt vé thành công cho ${form.name}, ghế: ${selectedSeats.join(", ")}`);
    // TODO: call API or redirect to checkout
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border shadow max-w-xl">
      <h2 className="text-xl font-bold mb-4">Thông tin người nhận vé</h2>

      <div className="mb-4">
        <p className="text-sm text-gray-700"><strong>Sự kiện:</strong> {event?.title}</p>
        <p className="text-sm text-gray-700"><strong>Ghế đã chọn:</strong> {selectedSeats.join(", ")}</p>
        <p className="text-sm text-gray-700"><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm">Họ tên</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-pink-600 text-white px-6 py-3 rounded font-semibold w-full"
      >
        Xác nhận đặt vé
      </button>
    </form>
  );
}
