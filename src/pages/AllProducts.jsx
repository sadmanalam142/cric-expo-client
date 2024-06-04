import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import useProducts from "../hooks/useProducts";

const AllProducts = () => {
    const {products} = useProducts();
  

  const handleDeleteProduct = (id) => {
    products.filter((product) => product._id !== id);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((product) => (
          <SingleProductCardDashboard
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;