import Banner from "../../Shared/HomeSection/Banner/Banner";
import HomeSlider from "../../Shared/HomeSection/HomeSlider/HomeSlider";


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
<Banner/>
<HomeSlider/>

    </div>
  );
};

export default Home;
