import homeBanner1 from "../../../../../public/images/pxfuel.jpg";

const HomeBanner = () => {
  const backgroundStyles = {
    backgroundImage: `url(${homeBanner1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="pt-[100px]">
      <div
        style={backgroundStyles}
        className="relative flex items-center justify-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="w-full max-w-md relative flex justify-center">
          {/* content section -------------- */}
          <div className="text-white  text-center">
            <div className="lg:w-[700px] md:max-w-full sm: max-w-full">
              <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-semibold text-4xl">
                A leading Student Visa Consultancy Firm In Bangladesh!
              </h1>
              <button className="mt-10 bg-[#25476a] text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded font-bold">Free Assessment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
