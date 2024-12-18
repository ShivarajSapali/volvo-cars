import { useEffect, useState } from "react";
import CarList from "./CarList";
import { CarDetails } from "../types";

const Home: React.FC = () => {
  const [carList, setCarList] = useState<CarDetails[]>([]);
  const [query, setQuery] = useState<string>("");

  const fetchCarDetails = async () => {
    const response = await fetch("api/cars.json");
    try {
      const result = await response.json();
      setCarList(result);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchCarDetails();
  }, []);

  const filteredCars = carList.filter((car) =>
    car.bodyType.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="">
      <div className="bg-always-black p-24 h-5">
        <img
          alt="Volvo"
          height="20%"
          src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg#dark"
          width="10%"
        />
        <input
          type="search"
          className="absolute end-16"
          value={query}
          placeholder=" Car type"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <hr />
      <CarList carDetails={filteredCars} />
    </div>
  );
};

export default Home;
