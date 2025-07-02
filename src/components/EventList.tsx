"use client";

import { useState, useRef, useEffect } from "react";
import EventCard from "./EventCard";
import { events as rawEvents } from "@/data/events";
import { motion, AnimatePresence } from "framer-motion";
import type { EventCardProps } from "./EventCard"; // 👈 import type

// Hàm chuẩn hoá dữ liệu để tránh lỗi thiếu field
function normalizeEvents(events: any[]): EventCardProps[] {
  return events.map((event) => ({
    price: "Đang cập nhật",
    locationDetail: "Địa điểm sẽ được thông báo",
    mapImage: "/images/default-map.svg",
    artists: [],
    ...event, // dữ liệu thực ghi đè
  }));
}

export default function EventList() {
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const normalizedEvents = normalizeEvents(rawEvents);
  const hasMore = visibleCount < normalizedEvents.length;
  const visibleEvents = normalizedEvents.slice(0, visibleCount);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  return (
    <div className="space-y-6" ref={containerRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleEvents.map((event) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="text-center">
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="w-full sm:w-[400px] px-3 py-2 bg-gray-100 text-[#0f172a] text-lg font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Xem thêm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
