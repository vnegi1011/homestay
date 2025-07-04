import Hero from "../../components/Hero";
import GalleryList from "./components/GalleryList";
import RoomList from "./components/RoomList";
import WhatsappButton from "../../components/WhatsappButton"; // Adjust path if needed

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="container mx-auto py-8 sm:py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Discover Serenity
        </h2>
        <p className="text-sm sm:text-lg text-center max-w-xl mx-auto">
          Nestled in the foothills of Himalayas, Kedar Darshan & Umesh Homestay offers a perfect
          blend of luxury, calmness, and nature. Enjoy breathtaking views, local
          cuisine, and premium amenities.
        </p>
      </section>
      <RoomList />
      <GalleryList />
      
      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </div>
  );
};

export default Home;
