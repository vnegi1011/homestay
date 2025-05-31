import type { Metadata } from "next";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Kedar Darshan & Umesh Homestay",
    template: "%s | Umesh Homestay",
  },
  icons: {
    icon: "https://kedardarshan.vercel.app/favicon.ico",
  },
  description:
    "Experience luxury homestays in Rudraprayag at Umesh Homestay. Book cozy cottages with stunning views, modern amenities, and a serene environment.",
  keywords: [
    "luxury homestays",
    "Rudraprayag homestays",
    "kedar darshan",
    "homestay in rudraprayag",
    "homestay in kedarnath",
    "homestay in phata",
    "kedar darshan & umesh homestay",
    "kedar darshan and umesh homestay",
    "umesh homestay",
    "cottage rentals",
    "Garhwal vacations",
  ],
  openGraph: {
    title: "Umesh Homestay | Luxury Home-stays in Rudraprayag",
    description:
      "Discover luxury and serenity at Umesh Homestay in Rudraprayag. Book your stay today!",
    url: "https://kedardarshan.vercel.app/",
    siteName: "Kedar Darshan & Umesh Homestay",
    images: [
      {
        url: "https://kedardarshan.vercel.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Umesh Homestay",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
