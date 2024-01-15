import HomeBanner from "../../Shared/HomeSection/HomeBanner/HomeBanner";
import HomeCounter from "../../Shared/HomeSection/HomeCounter/HomeCounter";
import HomeSlider from "../../Shared/HomeSection/HomeSlider/HomeSlider";
import HomeSupport from "../../Shared/HomeSection/HomeSupport/HomeSupport";
import HomeVIsitOffice from "../../Shared/HomeSection/HomeVIsitOffice/HomeVIsitOffice";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1>
      <div className="flex justify-center gap-10">
        <Link to="/dp">
          <button className="btn bg-[#25476a] text-white">AdminPanel</button>
        </Link>
        <Link to="/userLogin">
          <button className="btn bg-gray-800 text-white">UserLogin</button>
        </Link>
        <Link to="/adminLogin">
          <button className="btn bg-purple-500 text-white">AdminLogin</button>
        </Link>
      </div> */}
      <HomeBanner />
      <HomeSlider />
      <HomeSupport />
      <HomeCounter/>
      <HomeVIsitOffice/>
    </div>
  );
};

export default Home;
