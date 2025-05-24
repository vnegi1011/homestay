import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden rounded-lg transition-transform transform hover:scale-[1.05]">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-48 sm:h-64 object-cover"
        placeholder="blur"
        blurDataURL="https://placehold.co/20x20"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryItem;