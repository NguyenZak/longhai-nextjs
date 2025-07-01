// components/ShareActions.tsx
"use client";

import { useState } from "react";
import { Facebook, Link as LinkIcon } from "lucide-react";
import toast from "react-hot-toast";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function ShareActions() {
  const [copied, setCopied] = useState(false);

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  // const handleCopyLink = () => {
  //   navigator.clipboard.writeText(window.location.href).then(() => {
  //     setCopied(true);
  //     toast.success("Liên kết đã được sao chép!");
  //     setTimeout(() => setCopied(false), 2000);
  //   });
  // };
const handleCopyLink = () => {
  if (typeof window !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        toast.success("Liên kết đã được sao chép!");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast.error("Không thể sao chép liên kết.");
      });
  } else {
    toast.error("Trình duyệt không hỗ trợ sao chép liên kết.");
  }
};


  // Reset copied state when the component mounts
  return (
    <div className="flex items-center gap-3">
      {/* Facebook Share */}
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={handleFacebookShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow"
            >
              Chia sẻ lên Facebook
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      {/* Copy Link */}
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100 transition"
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">
                {copied ? "Đã sao chép" : "Sao chép"}
              </span>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow"
            >
              Sao chép liên kết
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
