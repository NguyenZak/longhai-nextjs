import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// ✅ Thêm dòng này:
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Long Hải Promotion",
    template: "%s | Long Hải Promotion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* ✅ Thêm Toaster tại đây */}
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
