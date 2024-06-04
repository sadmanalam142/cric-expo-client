import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const { _id, title, brand, price, image_url } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-medium">{brand}</h3>
        <h3 className="text-xl font-medium">{price} $</h3>
        <div className="card-actions justify-end">
          <button className="btn bg-lime-500">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;