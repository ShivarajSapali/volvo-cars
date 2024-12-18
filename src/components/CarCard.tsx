import { CarDetails } from "../types";

const CarCard: React.FC<CarDetails> = ({
  id,
  modelName,
  modelType,
  imageUrl,
  bodyType,
}) => {
  return (
    <div
      className="flex-col flex-shrink-0 flex-grow-0 h-full snap-start 
      transition-transform hover:scale-zoomed"
      style={{
        width: "min(65vw, 24rem)",
      }}
    >
      <div className="flex-col gap-8 mb-16">
        <p className="uppercase text-secondary font-20 font-medium">
          {bodyType}
        </p>
        <div className="flex gap-16">
          <h2 className="heading-2 font-24">{modelName}</h2>
          <p className="text-secondary font-24">{modelType}</p>
        </div>
      </div>
      <img
        alt={modelType}
        className="img aspect-3/2 "
        src={imageUrl}
        style={{ width: "100%" }}
      />
      {/* <div className="flex justify-center">
        <button className="button-text font-medium mr-24" data-color="accent">
          LEARN
        </button>
        <button className="button-text font-medium" data-color="accent">
          SHOP
        </button>
      </div> */}
      <div>
        <div className="flex justify-center align-center gap-32">
          <a
            aria-labelledby="card-heading-ex30 card-action-ex30-learn"
            className="button-text"
            data-color="accent"
            id="card-learn"
            // onClick={() => redirectToLearn(carItems.id)}
          >
            Learn
          </a>

          <a
            aria-labelledby="card-heading-ex30 card-action-ex30-shop"
            className="button-text"
            id="card-shop"
            data-color="accent"
            //onClick={() => redirectToShop(carItems.id)}
          >
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
