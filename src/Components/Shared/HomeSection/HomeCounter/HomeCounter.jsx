import CountUp from "react-countup";
import homeBanner1 from "../../../../../public/images/university.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaUniversity ,FaBookReader ,FaUserGraduate} from "react-icons/fa";

const HomeCounter = () => {
  const backgroundStyles = {
    backgroundImage: `url(${homeBanner1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen my-20"
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="w-full max-w-full relative flex justify-center">
        {/* content section -------------- */}
        <div className="lg:py-0 md:py-0 sm: py-10 text-white grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* Countries div ----------- */}
          <div className=" px-10 py-5">
            <span className="flex justify-center mb-5">
              <FaLocationDot size={60} />
            </span>
            <p className="font-bold  text-4xl mb-5 flex justify-center">
              <CountUp start={0} end={10} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
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
              <CountUp start={0} end={100} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
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
              <CountUp start={0} end={250} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
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
              <CountUp start={0} end={25000} duration={2} delay={0.5}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} /> +
                  </div>
                )}
              </CountUp>
            </p>
            <h1 className="uppercase flex justify-center  text-xl">
              STUDENTS
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;
