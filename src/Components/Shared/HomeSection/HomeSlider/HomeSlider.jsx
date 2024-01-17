import './HomeSlider.css'
import photo1 from "../../../../../public/images/oxford1.jpg";
import photo2 from "../../../../../public/images/oxford2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeSlider = () => {
  Aos.init();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div 
    data-aos="fade-down"
    data-aos-duration="2000" 
     className="my-20 lg:mx-[100px] md:mx-[50px] sm: mx-[50px]">
      <Slider {...settings}>
          <div className="flex items-center justify-center border border-gray-300 mx-3 ">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo1} alt="" /></div>
          </div>
          
          <div className="flex items-center justify-center border border-gray-300">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo2} alt="" /></div>
          </div>
          
          <div className="flex items-center justify-center border border-gray-300 mx-3">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo1} alt="" /></div>
          </div>
          
          <div className="flex items-center justify-center border border-gray-300 ">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo2} alt="" /></div>
          </div>
          
          <div className="flex items-center justify-center border border-gray-300 mx-3">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo1} alt="" /></div>
          </div>
          
          <div className="flex items-center justify-center border border-gray-300 ">
            <div className="flex justify-center"><img className=" w-[200px] h-[200px] p-5" src={photo2} alt="" /></div>
          </div>
          
      </Slider>
    </div>
  );
};

export default HomeSlider;
