import GalleryItem from '../../components/GalleryItem';

const galleryImages = [
  { src: '/gallery/interior1.jpg', alt: 'Interior 1' },
  { src: '/gallery/interior2.jpg', alt: 'Interior 2' },
  { src: '/gallery/exterior1.jpg', alt: 'Exterior 1' },
  { src: '/gallery/exterior2.jpg', alt: 'Exterior 2' },
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;