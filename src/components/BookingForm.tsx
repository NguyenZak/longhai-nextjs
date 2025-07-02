"use client";

import { useState } from "react";
interface BookingFormProps {
  selectedSeats: string[];
  total: number;
}

export default function BookingForm({ selectedSeats, total }: BookingFormProps) {
  const [discountCode, setDiscountCode] = useState("");

  return (
    
    <form className="space-y-5">
      <div>
        <label className="font-semibold block mb-1">Họ và tên *</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg bg-gray-100"
          placeholder="Nhập họ và tên của bạn"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">Số điện thoại *</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg bg-gray-100"
          placeholder="Nhập số điện thoại của bạn"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">Email *</label>
        <input
          type="email"
          className="w-full p-3 border rounded-lg bg-gray-100"
          placeholder="Nhập email của bạn"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">Địa chỉ *</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg bg-gray-100"
          placeholder="Nhập địa chỉ nhận vé cứng của bạn"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">
          Các ghế đã đặt ({selectedSeats.length})
        </label>
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100 h-28"
          value={selectedSeats.join(", ")}
          readOnly
        ></textarea>
      </div>

      <div>
        <label className="font-semibold block mb-1">Mã giảm giá (Nếu có)</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100"
            placeholder="Nhập mã"
          />
          <button
            type="button"
            className="bg-[#1e2e6e] hover:bg-[#182459] text-white font-semibold px-4 py-2 rounded-lg"
          >
            Áp dụng
          </button>
        </div>
      </div>

      <div className="font-semibold mt-4">
        Tổng tiền: {total.toLocaleString()} VND
      </div>

      <div className="text-sm text-gray-500">
        Lưu ý: Quý khách vui lòng thao tác đặt chỗ và thanh toán trong thời gian
        quy định, quá thời gian này hệ thống sẽ tự động huỷ thông tin ghế.
      </div>

      <div className="text-sm">
        <a href="#" className="underline text-blue-700 font-semibold">
          Điều khoản và chính sách của chúng tôi
        </a>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" checked className="accent-blue-600" />
        <label>Tôi đã đọc và đồng ý</label>
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-4"
      >
        ĐẶT CHỖ
      </button>
    </form>
  );
}
