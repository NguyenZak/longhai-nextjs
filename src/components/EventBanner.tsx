// components/EventBanner.tsx
import Image from "next/image";
import Link from "next/link";

interface EventBannerProps {
  image: string;
  title: string;
  status?: "Đang mở bán" | "Sắp diễn ra" | "Đã kết thúc"; // Có thể mở rộng sau
  buyLink?: string;
  logo?: string; // Logo nhà tổ chức
}

export default function EventBanner({
  image,
  title,
  status = "Đang mở bán",
  buyLink = "#",
  logo = "/logo.png",
}: EventBannerProps) {
  return (
    <div className="relative w-full h-60 md:h-[420px] overflow-hidden rounded-xl mb-6">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 text-white">
        {/* Top section */}
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="Logo nhà tổ chức"
            width={120}
            height={40}
            className="object-contain"
          />
          {/* Status badge */}
          <span className="inline-block bg-white text-[#005366] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow">
            {status}
          </span>
        </div>

        {/* Bottom content */}
        <div className="mt-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
          <Link
            href={buyLink}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full transition"
          >
            Mua vé ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
