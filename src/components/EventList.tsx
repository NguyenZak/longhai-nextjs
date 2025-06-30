"use client";

import { useState, useRef, useEffect } from "react";
import EventCard from "./EventCard";
import { events } from "@/data/events";
import { motion } from "framer-motion";

export default function EventList() {
  const [visibleCount, setVisibleCount] = useState(3); // Bắt đầu với 3 sự kiện
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const hasMore = visibleCount < events.length;
  const visibleEvents = events.slice(0, visibleCount);

  // Scroll mượt đến cuối danh sách khi thêm sự kiện mới
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleCount]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleEvents.map((event) => (
          <motion.div
            key={event.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </div>

      {/* Mốc để scroll đến */}
      <div ref={bottomRef} />

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="w-full sm:w-[400px] px-3 py-2 bg-gray-100 text-[#0f172a] text-lg font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
}
