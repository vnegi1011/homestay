import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble, Bath, CookingPot } from "lucide-react";
import { IRoomCardProps } from "@/types/RoomCard";

export default function RoomCard({ data }: { data: IRoomCardProps }) {
  const {
    title,
    image,
    capacity,
    bed,
    bathroom,
    readMoreLink,
    bookNowLink,
    kitchen,
  } = data;
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <Users size={16} /> {capacity}
          </div>
          <div className="flex items-center gap-1">
            <BedDouble size={16} /> {bed}
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} /> {bathroom}
          </div>
          {kitchen && (
            <div className="flex items-center gap-1">
              <CookingPot size={16} /> {kitchen}
            </div>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href={readMoreLink}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm"
          >
            READ MORE
          </Link>
          <Link
            href={bookNowLink}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
