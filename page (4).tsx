import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { AosInit } from "@/components/AosInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VET & PET - Trung Tâm Thú Y Uy Tín",
  description: "Trung tâm thú y VET & PET tại Bình Tân cung cấp dịch vụ khám chữa bệnh, siêu âm, xét nghiệm và spa chăm sóc thú cưng uy tín, chuyên nghiệp. Đặt lịch: 0946884344",
  keywords: "thú y bình tân, phòng khám thú y, chữa bệnh chó mèo, spa thú cưng, vet and pet, dr tiger",
  openGraph: {
    title: "VET & PET - Trung Tâm Thú Y Uy Tín",
    description: "Tất cả vì thú cưng nhà bạn - Mối sinh mệnh, mỗi phước lành. Dịch vụ siêu âm, xét nghiệm, lưu trú chuyên nghiệp.",
    url: "https://vetpet.vn",
    siteName: "VET & PET",
    images: [
      {
        url: "/banner2.jpg",
        width: 1200,
        height: 630,
        alt: "VET & PET Clinic",
      },
    ],
    locale: "vi_VN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AosInit />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
