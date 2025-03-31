import Image from "next/image";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import ola from "../../../public/assets/ola.jpg";


const UpcomingEVsbike = () => {
  const vehicles = [
    {
      id: 1,
      name: "ola s1 pro",
      image: ola,
      release: "2025",
      price: "99,999",
      description: "Next-gen electric bike.",
    },
   
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2">
          Upcoming EVs Bike's
          <BoltIcon className="h-8 w-8 text-blue-600" />
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 flex items-center gap-2">
                  <BoltIcon className="h-5 w-5 text-green-500" />
                  {vehicle.name}
                </h3>

                <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDaysIcon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">
                      Release: {vehicle.release}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>{vehicle.price}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEVsbike;
