// app/events/page.tsx
"use client";

import { useEffect } from "react";
import Head from "next/head";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>  
      <Header />
  
      <Head>
        
        <title>Sự kiện | Long Hải Promotion</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-10">
        <h1 className="text-3xl font-bold text-[#005366] mb-6">Sự kiện nổi bật</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
        
      </main>
      <Footer />
    </>
  );
}
