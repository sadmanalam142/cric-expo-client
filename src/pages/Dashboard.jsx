import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-4xl">Profile Information</h1>
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