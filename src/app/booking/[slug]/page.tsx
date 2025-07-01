// src/app/booking/[slug]/page.tsx

import { events } from "@/data/events";
import { notFound } from "next/navigation";

// Định nghĩa một kiểu (type) tường minh cho props của trang.
// Cách làm này giúp mã nguồn rõ ràng hơn và tránh các lỗi suy luận kiểu của TypeScript.
type PageProps = {
  params: {
    slug: string;
  };
};

// Hàm này sẽ được chạy lúc build time để tạo các trang tĩnh
// Next.js sẽ biết cần tạo ra các trang cho slug 'su-kien-am-nhac-1', 'hoi-thao-cong-nghe-2', v.v.
export async function generateStaticParams() {
  // Giả sử `events` là một mảng các đối tượng sự kiện
  return events.map((event) => ({
    slug: event.slug,
  }));
}

// Sử dụng PageProps đã định nghĩa và vẫn giữ "async"
export default async function BookingPage({ params }: PageProps) {
  // Tìm sự kiện tương ứng với slug từ URL
  const event = events.find((e) => e.slug === params.slug);

  // Nếu không tìm thấy sự kiện, hiển thị trang 404 Not Found
  if (!event) {
    notFound();
  }

  // Render nội dung trang
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 transform transition-all hover:scale-105">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{event.title}</h1>
            <p className="text-lg text-gray-500">Chi tiết sự kiện</p>
        </div>
        <div className="border-t border-gray-200 my-4"></div>
        <div className="space-y-4 text-left">
            <p className="flex items-center text-lg text-gray-700">
                <span className="text-2xl mr-4">📅</span>
                <strong>Ngày diễn ra:</strong>&nbsp;{event.date}
            </p>
            <p className="flex items-center text-lg text-gray-700">
                <span className="text-2xl mr-4">📍</span>
                <strong>Địa điểm:</strong>&nbsp;{event.location}
            </p>
            <p className="flex items-center text-lg text-gray-700">
                <span className="text-2xl mr-4">💰</span>
                <strong>Giá vé:</strong>&nbsp;<span className="font-semibold text-green-600">{event.price}</span>
            </p>
        </div>
        <div className="pt-6 text-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Đặt vé ngay
            </button>
        </div>
      </div>
    </main>
  );
}
