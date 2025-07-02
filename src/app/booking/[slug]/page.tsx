import { notFound } from "next/navigation";
import { events } from "@/data/events";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import SeatSelector from "@/components/SeatSelector";
import BookingForm from "@/components/BookingForm";



// Hàm này sẽ được chạy lúc build time để tạo các trang tĩnh
export function generateStaticParams() {
  // Giả sử `events` là một mảng các đối tượng, mỗi đối tượng có thuộc tính `slug`
  return events.map((event) => ({
    slug: event.slug,
  }));
}
export type paramsType = Promise<{ slug: string }>;

export default async function BookingPage(props: { params: paramsType }) {
  const params = await props.params;
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }
  const ticketPrices = [
    ["HÀ NỘI PHỐ", "6.000.000 VNĐ"],
    ["KHÚC MÙA THU", "5.000.000 VNĐ"],
    ["ĐIỀU GIẢN DỊ", "4.500.000 VNĐ"],
    ["ROMANCE 1", "4.000.000 VNĐ"],
    ["ROMANCE 2", "3.500.000 VNĐ"],
    ["CHIỀU KHÔNG EM", "3.000.000 VNĐ"],
    ["NỖI NHỚ", "2.000.000 VNĐ"],
    ["MÂY XƯA", "1.000.000 VNĐ"],
  ];

  // Render nội dung trang
  return (
    
    <main className="bg-white pt-24 pb-10 text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left - Banner */}
          <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden shadow">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Right - Event Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#1f2937] leading-snug uppercase">
              TP HỒ CHÍ MINH | {event.title}
            </h1>

            <div className="flex items-start gap-3 mb-2 text-sm text-gray-600">
              <MapPin className="w-5 h-5 text-pink-600 mt-0.5" />
              <span>140 Cộng Hòa, Phường 4, Quận Tân Bình, TP. HCM.</span>
            </div>

            <div className="flex items-start gap-3 mb-2 text-sm text-gray-600">
              <div className="w-5 h-5 text-pink-600 mt-0.5" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-start gap-3 mb-4 text-sm text-gray-600">
              <CalendarDays className="w-5 h-5 text-pink-600 mt-0.5" />
              <span>{event.date}</span>
            </div>

             {/* Ticket Price Table */}
        {event.ticketPrice && (
          <div className="overflow-x-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Thông tin</h2>
            <table className="min-w-full border border-gray-300 text-sm">
              <tbody>
                {event.ticketPrice.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 font-bold">
                    <td className="px-4 py-2 font-medium border-r border-gray-200">{row.name}</td>
                    <td className="px-4 py-2 text-right">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
 
      </div>
      
      </div>

      {/* Seat Selection Section */}
<div id="booking" className="mt-12">
  <h2 className="text-2xl font-bold mb-4 text-[#005366]">Sơ đồ chọn chỗ</h2>
  

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Seat Selector (Bên trái) */}
    <div className="w-full h-[400px] bg-gray-100 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">
        <SeatSelector seats={[]} />
      </span>
    </div>

    {/* Booking Form (Bên phải) */}
    <BookingForm selectedSeats={[]} total={0} />
  </div>
</div>

      </div>

      
    </main>
  );
}
