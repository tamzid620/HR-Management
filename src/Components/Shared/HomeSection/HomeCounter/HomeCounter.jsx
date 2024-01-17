import CountUp from "react-countup";
import homeBanner1 from "../../../../../public/images/university.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaUniversity ,FaBookReader ,FaUserGraduate} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";

const HomeCounter = () => {

  const [countersVisible, setCountersVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      if (isElementInViewport(counterRef.current)) {
        setCountersVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };

  const backgroundStyles = {
    backgroundImage: `url(${homeBanner1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Element name="counters">
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen my-20"
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div 
       ref={counterRef}
            data-aos="fade-down"
            data-aos-duration="2000" 
             className="w-full max-w-full relative flex justify-center">
        {/* content section -------------- */}
        <div className="lg:py-0 md:py-0 sm: py-10 text-white grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* Countries div ----------- */}
          <div className=" px-10 py-5">
            <span className="flex justify-center mb-5">
              <FaLocationDot size={60} />
            </span>
            <p className="font-bold  text-4xl mb-5 flex justify-center">
            {countersVisible && (
              <CountUp start={0} end={10} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
              )}
            </p>
            <h1 className="uppercase flex justify-center  text-xl">
              Countries
            </h1>
          </div>
          {/* University div ------------- */}
          <div className=" px-10 py-5">
            <span className="flex justify-center mb-5">
              <FaUniversity size={60} />
            </span>
            <p className="font-bold  text-4xl mb-5 flex justify-center">
            {countersVisible && (
              <CountUp start={0} end={100} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
              )}
            </p>
            <h1 className="uppercase flex justify-center  text-xl">
              Universities
            </h1>
          </div>
          {/* Courses div ----------- */}
          <div className=" px-10 py-5">
            <span className="flex justify-center mb-5">
              <FaBookReader size={60} />
            </span>
            <p className="font-bold  text-4xl mb-5 flex justify-center">
            {countersVisible && (
              <CountUp start={0} end={250} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
              )}
            </p>
            <h1 className="uppercase flex justify-center  text-xl">
              Courses
            </h1>
          </div>
          {/* STUDENTS div  */}
          <div className=" px-10 py-5">
            <span className="flex justify-center mb-5">
              <FaUserGraduate size={60} />
            </span>
            <p className="font-bold  text-4xl mb-5 flex justify-center">
            {countersVisible && (
              <CountUp start={0} end={25000} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
              )}
            </p>
            <h1 className="uppercase flex justify-center  text-xl">
              STUDENTS
            </h1>
          </div>
          
        </div>
      </div>
    </div>
    </Element>
  );
};

export default HomeCounter;
