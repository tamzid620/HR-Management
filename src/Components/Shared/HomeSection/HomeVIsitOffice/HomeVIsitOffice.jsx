import officePhoto from "../../../../../public/images/officePhoto.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeVIsitOffice = () => {
  Aos.init();

  return (
    <div className="">
    <div className="my-20  mx-auto lg:max-w-5xl md:max-w-3xl sm: max-w-sm">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5"
      >
        {/* information section  */}
        <div className="flex justify-center items-center">
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-semibold text-xl"
            >
              Visit Our Campus
            </h1>
            <p
              style={{ fontFamily: "Roboto, sans-serif" }}
              className="font-light my-5"
            >
              Take the first step in achieving your career goals by visiting the
              AIMS campus. During your school visit you'll get to meet
              one-on-one with an admissions specialist. They'll help you choose
              the right career path and answer any questions you have. You'll
              also get the chance to tour the AIMS campus, including all of our
              classrooms, medical labs, and student facilities.
            </p>
            <div className=" flex justify-center mt-10 mb-10">
              <button className=" bg-[#25476a] text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded font-bold">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
        {/* office picture section  */}
        <div className="flex justify-center items-center">
          <img className="w-[450px]" src={officePhoto} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeVIsitOffice;
