"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  CalendarDays,
  MapPlus,
  MapPin,
  DollarSign,
} from "lucide-react";
import ArtistCarousel from "@/components/ArtistCarousel";
import SeatingMapModal from "@/components/SeatingMapModal";
import ShareActions from "@/components/SocialShareGroup";
import Header from "@/components/Header";

export default function EventDetailClient({ event }: { event: any }) {
  const [showMap, setShowMap] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowFloatingButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const artists = event.artists || [
    { name: "Mỹ Tâm", image: "/artists/mytam.jpg" },
    { name: "Sơn Tùng M-TP", image: "/artists/sontung.jpg" },
    { name: "Đen Vâu", image: "/artists/denvau.jpg" },
    { name: "Hà Anh Tuấn", image: "/artists/haanh.jpg" },
    { name: "Noo Phước Thịnh", image: "/artists/noo.jpg" },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Sắp hết vé":
        return "bg-yellow-100 text-yellow-800";
      case "Đã hết vé":
        return "bg-red-100 text-red-700";
      case "Đang mở bán":
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <main className="bg-white text-gray-900 pt-20">
      <Header />

      {/* Banner + Info */}
      <div className="relative w-full overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src={event.image}
            alt="Background"
            fill
            className="object-cover w-full h-full blur-md scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Left Column: Banner */}
            <div className="md:w-1/2 w-full">
              <div className="aspect-[3/2] relative w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="pt-5 hidden lg:block">
                <div className="relative group w-full">
                  <Link href={event.status === "Đã hết vé" ? "#" : `/booking/${event.slug}`}>
                    <button
                      disabled={event.status === "Đã hết vé"}
                      className={clsx(
                        "w-full text-lg h-[60px] font-semibold rounded-lg transition duration-300",
                        event.status === "Đã hết vé"
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-pink-600 hover:bg-pink-700 text-white"
                      )}
                    >
                      {event.status === "Đã hết vé" ? "Hết vé" : "Mua vé ngay"}
                    </button>
                  </Link>
                  {event.status === "Đã hết vé" && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      Sự kiện đã hết vé
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="md:w-1/2 w-full flex flex-col gap-4 p-4 text-white">
              <span
                className={`inline-block w-auto font-semibold text-sm px-4 py-1 rounded-full ${getStatusStyle(event.status)}`}
              >
                {event.status}
              </span>

              <h1 className="text-2xl md:text-4xl font-bold uppercase text-shadow-md">{event.title}</h1>

              <div className="flex items-start gap-3 text-lg">
                <CalendarDays className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">{event.date}</span>
                  <div className="text-base font-light">Từ {event.time}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-lg">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-start gap-3 text-lg">
                <MapPlus className="w-6 h-6 mt-1 flex-shrink-0" />
                <span>{event.locationDetail}</span>
              </div>

              <div className="flex items-start gap-3 text-lg">
                <DollarSign className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-xl">Giá vé</span>
                  <span className="block font-light text-base">{event.price}</span>
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <ShareActions />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <div className="flex gap-4 border-b border-gray-200 pb-2 text-sm font-medium mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {["Lịch sự kiện", "Thông tin sự kiện", "Nghệ sĩ / Khách mời", "Nhà tổ chức"].map((tab, index) => (
            <button
              key={index}
              className={`px-3 py-1 border-b-2 ${
                activeTab === index
                  ? "text-pink-600 border-pink-600"
                  : "text-gray-600 border-transparent hover:text-pink-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab nội dung */}
        {activeTab === 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Lịch sự kiện và sơ đồ chỗ ngồi</h2>
            <p className="text-sm text-gray-500">Vui lòng chọn một khung giờ để bắt đầu đặt vé</p>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded overflow-hidden">
                  <Image
                    src={event.mapImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base leading-snug">{event.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{event.locationDetail}</p>
                  <button
                    onClick={() => setShowMap(true)}
                    className="text-blue-600 hover:underline mt-1 text-sm"
                  >
                    Xem sơ đồ
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-t mt-4 pt-4">
                <div>
                  <p className="text-sm text-gray-500">{event.time}</p>
                  <p className="text-xl font-semibold">{event.date}</p>
                </div>
                <div className="bg-blue-100 text-blue-800 font-semibold rounded-xl px-4 py-2">
                  {event.time}
                </div>
              </div>
            </div>
            <SeatingMapModal
              isOpen={showMap}
              onClose={() => setShowMap(false)}
              event={event}
            />
          </div>
        )}

        {activeTab === 2 && (
          <div className="text-sm text-gray-700">
            <h2 className="text-lg font-bold mb-3">Nghệ sĩ / Khách mời</h2>
            {artists.length > 0 ? (
              <ArtistCarousel artists={artists} />
            ) : (
              <p>Thông tin nghệ sĩ sẽ được cập nhật.</p>
            )}
          </div>
        )}

        {activeTab === 3 && (
          <div className="text-sm text-gray-700">
            <p>Thông tin về đơn vị tổ chức sự kiện.</p>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">Thông tin sự kiện</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Đây là sự kiện đặc biệt với sự tham gia của nhiều nghệ sĩ nổi tiếng. Hãy đến và trải nghiệm không khí sôi động cùng hàng ngàn khán giả. Thông tin chi tiết sẽ được cập nhật liên tục.
          </p>
        </div>
      </div>

      <div
        className={`fixed bottom-4 left-0 right-0 z-50 px-4 transition-transform duration-500 ease-in-out lg:hidden ${
          showFloatingButton ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Link href={`/booking/${event.slug}`}>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg w-full text-lg shadow-lg">
            Mua vé ngay
          </button>
        </Link>
      </div>
    </main>
  );
}
