import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  description:
    "Feel free to contact us at +91 96391 96330 for inquiries and bookings.",
  keywords: [
    "luxury homestays",
    "Rudraprayag homestays",
    "kedar darshan",
    "kedar darshan & umesh homestay",
    "kedar darshan and umesh homestay",
    "umesh homestay",
    "cottage rentals",
    "Garhwal vacations",
    "Umesh Homestay Kedarnath Contact Number",
    "Umesh Homestay Contact Number",
    "Umesh Homestay Contact",
    "Umesh Homestay Phata Contact Number",
  ],
  openGraph: {
    title: "Contact Us | Umesh Homestay",
    description:
      "Contact us - +91 96391 96330",
    url: "https://kedardarshan.vercel.app/contact-us/",
    siteName: "Umesh Homestay",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <p className="text-lg text-gray-600 mb-4">
          We’d love to hear from you! Reach out to us using the details below.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600">
              <a href="mailto:info@kedardarshan.com" className="text-blue-500 hover:underline">
                info@homestayzeta.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-600">
              <a href="tel:+919639196330" className="text-blue-500 hover:underline">
                +91 96391 96330
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">
              Near Thumby Aviation Helipad Jammu Kedarnath Road, Phata, Rudraprayag
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
