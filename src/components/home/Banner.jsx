const Banner = () => {
  return (
    <div
      className="hero bg-neutral h-[400px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Cric Expo</h1>
          <p className="mb-5">
            Here you will find all the necessary equipment for a reasonable price.
          </p>
          <button className="btn bg-lime-500 border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
