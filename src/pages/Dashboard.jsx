import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import "./../components/home/products.css";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://cric-expo-server1.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div className="dashboard_section">
      <div className="flex justify-between mb-7 dashboard_header_section">
        <h1 className="text-4xl dashboard_header">Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn bg-lime-500 btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>Name: {userInfo?.name}</h1>
        <h1>Email: {userInfo?.email}</h1>
        {
            userInfo?.age &&
                <h1>Age: {userInfo?.age}</h1>
        }
        {
            userInfo?.mobileNumber &&
                <h1>Number: {userInfo?.mobileNumber}</h1>
        }
      </div>
    </div>
  );
};

export default Dashboard;