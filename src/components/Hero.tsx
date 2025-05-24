import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink, imageSrc = '/outer-view.jpg' }) => {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
      <Image
        src={imageSrc}
        alt="Ramante Homes Hero"
        fill
        className="object-cover brightness-50"
        placeholder="blur"
        blurDataURL="/hero.jpg"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-4 md:mb-6 max-w-md drop-shadow-md">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="bg-accent text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-opacity-80 text-sm sm:text-base transition-transform transform hover:scale-105"
          aria-label={ctaText}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;