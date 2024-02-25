import HomeBanner from "../../Shared/HomeSection/HomeBanner/HomeBanner";
import HomeCounter from "../../Shared/HomeSection/HomeCounter/HomeCounter";
import HomeSlider from "../../Shared/HomeSection/HomeSlider/HomeSlider";
import HomeSupport from "../../Shared/HomeSection/HomeSupport/HomeSupport";
import HomeVIsitOffice from "../../Shared/HomeSection/HomeVIsitOffice/HomeVIsitOffice";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeSlider />
      <HomeSupport />
      <HomeCounter/>
      <HomeVIsitOffice/>
    </div>
  );
};

export default Home;
