import ApartmentCard from '../../components/ApartmentCard';

interface Apartment {
  id: number;
  name: string;
  description: string;
  image: string;
}

const apartments: Apartment[] = [
  {
    id: 1,
    name: 'Pine Valley Cottage',
    description: 'A cozy single-room cottage with a valley-facing window, wooden flooring, and modern amenities.',
    image: '/pine-valley.jpg',
  },
  {
    id: 2,
    name: 'Pine Woods Cottage',
    description: 'A spacious cottage perfect for couples or small families, featuring a private terrace and jungle views.',
    image: '/pine-woods.jpg',
  },
];

const Apartments: React.FC = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Our Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Apartments;