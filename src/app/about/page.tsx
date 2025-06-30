//About Page Component

"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import EventCarousel from "@/components/EventCarousel";
import { events } from "@/data/events";
import VisionMissionTabs from "@/components/VisionMissionTabs";
import Footer from "@/components/Footer";



const partners = [
  { name: "Vietcombank", image: "/images/partners/vietcombank.svg" },
  { name: "Vinamilk", image: "/images/partners/vinamilk.svg" },
  { name: "FPT", image: "/images/partners/fpt.svg" },
  { name: "Vingroup", image: "/images/partners/vingroup.svg" },
];


export default function AboutPage() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${form.name}, chúng tôi sẽ liên hệ sớm nhất!`);
  };

  return (
    <main className="bg-white px-4 max-w-6xl mx-auto text-gray-800">

      <Header />
      <HeroSlider />

      {/* Tiêu đề */}
      
      {/* Giới thiệu */}
      <section className="mb-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  {/* Tiêu đề gradient */}
  <div>
    <h1 className="text-5xl font-extrabold leading-tight">
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
        Chào mừng đến với
      </span>
      <br />
      <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
        Long Hải Promotion
      </span>
    </h1>
  </div>

  {/* Mô tả bên phải */}
  <div className="border border-blue-100 rounded-2xl p-6 text-gray-800 leading-relaxed shadow-sm">
    Long Hải Promotion là nền tảng bán vé trực tuyến hàng đầu Việt Nam. Với sức mạnh công nghệ, kinh nghiệm và sự thấu hiểu thị trường cùng một hệ sinh thái người dùng rộng lớn, CTicket là lựa chọn hoàn hảo cho khách hàng và bất kì nhà tổ chức sự kiện nào.
  </div>
</div>

      </section>

      {/* Tầm nhìn - Sứ mệnh */}
      <VisionMissionTabs />
      {/* Dịch vụ của chúng tôi */}
<section className="mb-10">
  <h2 className="text-5xl md:text-6xl text-center py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">Dịch vụ của chúng tôi</h2>
  <div className="">
    <Image
      src="/images/categories.png"
      alt="Dịch vụ của chúng tôi"
      width={1200}
      height={600}
      className="w-full h-auto rounded-xl shadow-lg object-cover">
    </Image>
  </div>
</section>


      {/* Đối tác */}
<section className="mb-10">
  <h2 className="text-5xl md:text-6xl text-center py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">Đối tác của chúng tôi</h2>
 
 
  <div className="flex gap-20 overflow-x-auto scrollbar-hide pb-2">
    {partners.map((partner, idx) => (
      <div
        key={idx}
        className="min-w-[120px] text-center transition-transform duration-300 hover:scale-101"
      >
        <div className="relative w-50 h-50 mx-auto rounded-full overflow-hidden border border-gray-200 shadow-md">
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-sm font-medium text-gray-800">{partner.name}</p>
      </div>
    ))}
  </div>
</section>




      {/* Sự kiện đã tổ chức */}
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-10">
  <h1 className="text-5xl md:text-6xl text-center py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">Sự kiện đã tổ chức</h1>
  <EventCarousel events={events} />
</section>
      {/* Form đăng ký tư vấn */}
      <section className="mb-20 text-center">
        <h2 className="text-5xl md:text-6xl text-center py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">Bạn muốn tổ chức sự kiện?</h2>
        <p className="text-2xl mb-4">Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn ngay cho bạn.</p>
        <ContactForm />
      </section>
     
    </main>
    
  );
   
}

