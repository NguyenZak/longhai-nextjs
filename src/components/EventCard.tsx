"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

export interface EventCardProps {
  slug: string;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: string;
  // Các trường tuỳ chọn để tránh lỗi khi không đầy đủ dữ liệu
  weekday?: string;
  price?: string;
  locationDetail?: string;
  mapImage?: string;
  artists?: { name: string; image: string }[];
  description?: string;
}

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

export default function EventCard({
  slug,
  image,
  title,
  date,
  time,
  location,
  status,
  locationDetail,
  description,
  price,
}: EventCardProps) {
  return (
    <Link
      href={`/events/${slug}`}
      className="group block rounded-xl shadow hover:shadow-lg transition overflow-hidden relative bg-white"
    >
      {/* Background banner image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card content overlay */}
      <div className="relative z-10 p-4">
        <span
          className={`inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
            status
          )}`}
        >
          {status}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 gap-2 mb-1">
          <CalendarDays className="w-4 h-4 text-pink-600" />
          <span>{date}</span>
          <span className="text-gray-400">•</span>
          <span>{time}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 gap-2 mb-2">
          <MapPin className="w-4 h-4 text-pink-600" />
          <span className="truncate">{location}</span>
        </div>

        {/* Mô tả nếu có */}
        {description && (
          <p className="text-sm text-gray-500 mb-1 line-clamp-2">{description}</p>
        )}

        {/* Giá vé nếu có */}
        {price && (
          <p className="text-sm font-semibold text-pink-600">Giá vé: {price}</p>
        )}
      </div>
    </Link>
  );
}
