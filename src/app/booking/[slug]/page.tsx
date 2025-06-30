// app/booking/[slug]/page.tsx
"use client";

import SeatSelector from "@/components/SeatSelector";
import { events } from "@/data/events";

export default function BookingPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return <div>Sự kiện không tồn tại</div>;

  return (
    <main className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">{event.title}</h1>
      <SeatSelector eventSlug={event.slug} />
    </main>
    
  );
}
