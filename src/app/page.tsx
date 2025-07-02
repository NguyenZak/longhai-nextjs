// app/page.tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import EventList from "@/components/EventList";
import { events } from "@/data/events";
import Footer from "@/components/Footer";
import { Contact } from "lucide-react";
import ContactForm from "@/components/ContactForm";



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Sự kiện</h2>
        <EventList />
       {/* Form đăng ký tư vấn */}
           <section className="py-10 px-4 md:px-20">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Text Column */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-6">
        Bạn muốn tổ chức sự kiện?
      </h2>
      <p className="text-2xl mb-4">
        Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn ngay cho bạn.
      </p>
    </div>

    {/* Contact Form Column */}
    <div className="md:w-1/2 w-full">
      <ContactForm />
    </div>
  </div>
</section>

      </div>
      <Footer />
    </main>
  );
} 
