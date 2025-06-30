"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwrdwLZ6VQyw8VI6sRPTqbnh_9GM7klvL5zW-CCoJXX-fY0TWSUJYBd9k6aZHiVqwpw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setShowPopup(true);
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Tự động ẩn popup sau 3s
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      alert("Không thể gửi dữ liệu. Vui lòng thử lại.");
      console.error(err);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12 relative">
      {/* <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
        Liên hệ với chúng tôi
      </h2> */}

      {/* ✅ Popup đẹp, không có overlay */}
 {showPopup && (
  <div
    className="z-50 absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-full max-w-md text-center animate-popup"
    key="popup"
  >
    <h3 className="text-lg font-semibold mb-2 text-green-600">🎉 Gửi thành công!</h3>
    <p className="text-gray-700 text-sm">Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.</p>
    <button
      onClick={() => setShowPopup(false)}
      className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition duration-150"
    >
      Đóng
    </button>
  </div>
)}

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Họ và tên"
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Ghi chú (tuỳ chọn)"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          Gửi thông tin
        </button>
      </form>
    </section>
  );
}
