import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
    };

    fetch(
      `https://cric-expo-server1.onrender.com/user/${data?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-8">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="py-2 px-1 bg-slate-50 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">User Age</label>
          <input type="text" name="age" className="py-2 px-1 bg-slate-50 border border-black rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            className="py-2 px-1 bg-slate-50 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="btn py-2 px-1 bg-lime-500 text-black "
          />
        </div>
      </form>
    </div>
  );
}