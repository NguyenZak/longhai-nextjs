"use client";

import { Dialog } from "@headlessui/react";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    mapImage: string;
  };
};

export default function SeatingMapModal({ isOpen, onClose, event }: Props) {
  const [zoom, setZoom] = useState(1);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-0">
        <Dialog.Panel className="bg-white w-full h-full md:rounded-xl md:max-w-3xl md:h-auto shadow-xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <Dialog.Title className="text-lg font-bold">{event.title}</Dialog.Title>
              <p className="text-sm text-gray-500">{event.date} - {event.time}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
            <button onClick={onClose}>
              <X className="w-5 h-5 text-gray-500 hover:text-black" />
            </button>
          </div>

          <div className="relative p-4 text-center">
            <div className="mb-3 flex justify-center gap-4">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto flex-1">
              <div
                style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
                className="inline-block transition-transform duration-300"
              >
                <Image
                  src={event.mapImage}
                  alt="Sơ đồ chỗ ngồi"
                  width={800}
                  height={600}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
