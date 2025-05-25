import GalleryCard from "@/components/GalleryCard";
import { galleryImgs } from "@/utils/config";

const GalleryList = () => {
  return (
    <section className="pb-8 px-4">
      <div className="max-w-7xl m-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImgs.map((galleryImg, idx) => {
            return <GalleryCard key={idx} galleryImg={galleryImg} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryList;
