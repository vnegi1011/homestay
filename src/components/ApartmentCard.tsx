import Link from 'next/link';
import Image from 'next/image';

interface Apartment {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
      <Image
        src={apartment.image}
        alt={apartment.name}
        width={600}
        height={400}
        className="w-full h-48 sm:h-64 object-cover"
        placeholder="blur"
        blurDataURL="/pine-woods.jpg"
      />
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{apartment.name}</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3">
          {apartment.description}
        </p>
        <Link
          href="/contact"
          className="bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-80 text-sm sm:text-base transition-colors"
          aria-label={`Book ${apartment.name}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ApartmentCard;