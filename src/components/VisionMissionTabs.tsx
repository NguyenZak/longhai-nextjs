"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = ["Tầm nhìn", "Sứ mệnh", "Giá trị cốt lõi"];

const tabContent: Record<string, { title: string; content: string; image: string }> = {
  "Tầm nhìn": {
    title: "Tầm nhìn",
    content:
      "Trở thành nền tảng bán vé trực tuyến số 1 tại Việt Nam về doanh thu, số lượng vé bán ra, số lượng khách hàng, số lượng đối tác và trải nghiệm dịch vụ sau 3 năm ra mắt và hoạt động.",
    image: "/images/vision.png",
  },
  "Sứ mệnh": {
    title: "Sứ mệnh",
    content:
      "Mang đến trải nghiệm mua vé dễ dàng, nhanh chóng, minh bạch và bảo mật cho mọi khách hàng, đồng thời hỗ trợ nhà tổ chức tối ưu hiệu quả vận hành.",
    image: "/images/mission.png",
  },
  "Giá trị cốt lõi": {
    title: "Giá trị cốt lõi",
    content:
      "Công nghệ là nền tảng cốt lõi, tạo nên thế mạnh của CTicket. Bên cạnh đó, Kinh nghiệm, Trải nghiệm, Đam mê và Sự thấu hiểu thị trường giúp CTicket tạo nên những trải nghiệm tuyệt vời nhất cho khách hàng và đối tác.",
    image: "/images/core-values.png",
  },
};

export default function VisionMissionCore() {
  const [activeTab, setActiveTab] = useState("Tầm nhìn");

  const { title, content, image } = tabContent[activeTab];

  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full md:text-xl text-sm font-semibold shadow-md transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white"
                : "bg-white text-purple-700 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Nội dung + ảnh */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Văn bản */}
        <div className="md:w-1/2 border border-[#d4dafe] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
          <h2 className="text-5xl md:text-6xl py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">
            {title}
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">{content}</p>
        </div>

        {/* Ảnh */}
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}