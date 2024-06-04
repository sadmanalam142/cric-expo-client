import "./AvailableBrands.css";

const AvailableBrands = () => {
  return (
    <div>
        <h1 className="my-8 text-3xl font-bold text-center">Available Brands</h1>
      <div className="grid grid-cols-3 gap-6 ml-28 available_brands">
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">Addidas</h1>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">Nike</h1>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">Puma</h1>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">SS</h1>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">Reebok</h1>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl card_items">
        <div className="card-body">
          <h1 className="text-2xl">SG</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AvailableBrands;
