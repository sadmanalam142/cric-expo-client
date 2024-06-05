import { useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import useProducts from "../hooks/useProducts";
import "./../components/home/products.css";

const AllProducts = () => {
  const { products, setProducts } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input w-full p-2 mb-8 text-lg"
        />
      </div>
      <div className="my-16 flex flex-wrap gap-4">
        {filteredProducts.map((product) => (
          <SingleProductCardDashboard
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
