import type { Metadata } from "next";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ramante Homes | Luxury Homestays in Dehradun",
    template: "%s | Ramante Homes",
  },
  description:
    "Experience luxury homestays in Dehradun at Ramante Homes. Book cozy cottages with stunning views, modern amenities, and a serene environment.",
  keywords: [
    "luxury homestays",
    "Dehradun homestays",
    "Ramante Homes",
    "cottage rentals",
    "Mussoorie vacations",
  ],
  openGraph: {
    title: "Ramante Homes | Luxury Home-stays in Dehradun",
    description:
      "Discover luxury and serenity at Ramante Homes in Dehradun. Book your stay today!",
    url: "https://homestay-zeta.vercel.app/",
    siteName: "Ramante-Homes",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ramante Homes Luxury Homestays",
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
