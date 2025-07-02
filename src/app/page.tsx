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
       <ContactForm />
      </div>
      <Footer />
    </main>
  );
} 
