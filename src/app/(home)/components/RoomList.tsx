import {roomCards} from "@/utils/config";
import RoomCard from "@/components/RoomCard";

const RoomList = () => {
    return (
        <section className="pb-8 px-4">
            <div className="max-w-7xl m-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-12">
                    Home Stay at Dehradun
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {roomCards.map((room) => {
                        return <RoomCard data={room} key={room.id}/>;
                    })}
                </div>
            </div>
        </section>
    );
};

export default RoomList;
