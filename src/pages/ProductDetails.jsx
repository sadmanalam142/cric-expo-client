import { useLoaderData } from "react-router-dom";
import './../components/home/products.css';

const ProductDetails = () => {
  const products = useLoaderData();

  const { brand, description, image_url, price, title } = products;

  return (
    <div className="flex align-middle justify-center my-11">
      <div className="w-[500px] product_details">
        <h1 className="text-5xl text-center font-bold">{title}</h1>

        <img className="h-[500px] my-3" src={image_url} alt="product image" />

        <h3 className="text-2xl font-semibold">{price} $</h3>
        <h3 className="text-xl font-semibold my-2">{brand}</h3>
        <p className="text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
