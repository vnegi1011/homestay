import Image from "next/image";

interface IGalleryImgProps {
  galleryImg: string;
}

const GalleryCard = ({ galleryImg }: IGalleryImgProps) => {
  return (
    <div className="relative h-52 w-full overflow-hidden">
      <Image
        src={galleryImg}
        alt="gallery"
        fill
        className="object-cover w-full hover:scale-[1.1] transition-all ease-in-out cursor-pointer"
      />
    </div>
  );
};

export default GalleryCard;
