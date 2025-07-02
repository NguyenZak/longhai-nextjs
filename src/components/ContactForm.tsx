"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên.";
    }

    // ⚠️ Bắt lỗi số điện thoại Việt Nam (0x, +84x) có 10-11 số
    const phone = formData.phone.trim();
    const phoneRegex = /^(?:\+84|0)(?:\d){9}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ. Ví dụ: 0912345678 hoặc +84912345678";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

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

      setTimeout(() => setShowPopup(false), 3000);
    } catch (err: unknown) {
      alert("Không thể gửi dữ liệu. Vui lòng thử lại.");
      console.error(err);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12 relative">
      {showPopup && (
        <div className="z-50 absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-full max-w-md text-center animate-popup">
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
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Họ và tên"
            required
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            required
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Ghi chú (tuỳ chọn)"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

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
