import { CarDetails } from "../types";
import CarCard from "./CarCard";

interface carListProps {
  carDetails: CarDetails[];
}

const CarList: React.FC<carListProps> = ({ carDetails }) => {
  const handleSearch = () => {};
  return (
    <div className="pb-64">
      <section
        aria-label="Car models"
        className="reel gap-x-gutter py-16 mx-24"
        data-bleed="until-lg"
      >
        {carDetails.length > 0 &&
          carDetails.map((car) => (
            <div key={car.id}>
              <CarCard {...car} />
            </div>
          ))}
      </section>
      <div className="container">
        <button className="button-text font-medium mr-24" data-color="accent">
          Prev
        </button>
        <button className="button-text font-medium" data-color="accent">
          Next
        </button>
      </div>
    </div>
  );
};

export default CarList;
