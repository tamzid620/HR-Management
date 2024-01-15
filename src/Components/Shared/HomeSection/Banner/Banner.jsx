
import homeBanner1 from "../../../../../public/images/pxfuel.jpg";

const Banner = () => {

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
        <div className="w-full max-w-md relative">
          {/* content section -------------- */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
