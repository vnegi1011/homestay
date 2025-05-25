import { roomCards } from "@/utils/config";
import RoomCard from "@/components/RoomCard";

const RoomList = () => {
  return (
    <section className="pb-8 px-4">
      <div className="max-w-7xl m-auto">
        <h2 className="uppercase text-center mb-8 text-3xl">
          FIND YOUR PERFECT <br /> Homestay in{" "}
          <strong className="text-yellow-400 px-2 ">Dehradun</strong>
          <h4 className="font-bold mt-4 text-4xl">
            Starting <span className="text-primary">@ ₹ 5999/*</span>
          </h4>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {roomCards.map((room) => {
            return <RoomCard data={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomList;
