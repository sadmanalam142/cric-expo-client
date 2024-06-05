import { Link, Outlet } from "react-router-dom";
import "./../components/home/products.css";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-gray-300 min-h-screen p-12 font-semibold d_layout_section">
        <ul>
          <li className="p-4 text w-full d_layout_text">
            <Link to={"home"}>Dashboard</Link>
            <li className="border"></li>
          </li>
          <li className="p-4 text w-full d_layout_text">
            <Link to={"all-products"}>All Products</Link>
            <li className="border"></li>
          </li>
          <li className="p-4 text w-full d_layout_text">
            <Link to={"add-products"}>Add Product</Link>
            <li className="border"></li>
          </li>
          <li className="p-4 text w-full d_layout_text">
            <Link to={"/"}>Home</Link>
            <li className="border"></li>
          </li>
        </ul>
      </div>
      <div className="col-span-9 p-20 d_layout_outline">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;