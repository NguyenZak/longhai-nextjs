import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#285185] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Contact Info */}
        <div className="space-y-4">
          <Image src="/logo-white.svg" alt="Long Hải Promotion" width={180} height={50} />
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-5 h-5 mt-0.5" />
            <span>Bảo Tàng Hà Nội - Phạm Hùng - Hà Nội</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5" />
            <span>070 311 5858</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-5 h-5" />
            <a href="mailto:longhaipromotion@gmail.com" className="hover:underline">
              longhaipromotion@gmail.com
            </a>
          </div>
        </div>

        {/* Về chúng tôi */}
        <div>
          <h3 className="font-bold text-lg mb-3">VỀ CHÚNG TÔI</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link href="#">Giới thiệu</Link></li>
            <li><Link href="#">Các dịch vụ</Link></li>
            <li><Link href="#">Điều khoản & chính sách</Link></li>
            <li><Link href="#">Tuyển dụng</Link></li>
          </ul>
        </div>

        {/* Danh mục */}
        <div>
          <h3 className="font-bold text-lg mb-3">DANH MỤC</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link href="#">Trang chủ</Link></li>
            <li><Link href="#">Đêm nhạc</Link></li>
            <li><Link href="#">Tổ chức sự kiện</Link></li>
            <li><Link href="#">Tin tức</Link></li>
            <li><Link href="#">Hướng dẫn đặt vé</Link></li>
          </ul>
        </div>

        {/* Kết nối */}
        <div>
          <h3 className="font-bold text-lg mb-4">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className="flex items-center gap-4">
            <Link href="#"><Image src="/ic_facebook.svg" alt="Facebook" width={40} height={40} /></Link>
            <Link href="#"><Image src="/zalo.svg" alt="Zalo" width={40} height={40} /></Link>
            <Link href="#"><Image src="/ic_youtube.svg" alt="YouTube" width={40} height={40} /></Link>
            <Link href="#"><Image src="/ic_tiktok.svg" alt="TikTok" width={40} height={40} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
