import SingleProduct from "../SingleProduct";
import useProducts from "../../hooks/useProducts";
import "./products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useProducts();
  return (
    <div>
      <h1 className="my-8 text-3xl font-bold text-center">Our Products</h1>
      <div className="flex justify-end">
      <Link to="/dashboard/all-products"><button className="text-lime-500 text-xl">see all products</button></Link>
      </div>

      <div className="flex gap-2 px-6 justify-center items-center home_products">
        {
          // eslint-disable-next-line react/prop-types
          products.slice(0, 3).map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
