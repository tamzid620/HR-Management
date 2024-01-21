import footerimg from "../../../../public/images/footer_logo.png";
import faceBookLogo from "../../../../public/icons/Facebook_Logo.png";
import LinkdinLogo from "../../../../public/icons/Linkdin_logo.png";
import YoutubeLogo from "../../../../public/icons/Youtube_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="bg-[#25476a] text-white grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10 mx-auto p-8"
      >
        {/* footer div 1  */}
        <div>
          <img className="w-[100px]" src={footerimg} alt="" />
          <p className="">
            EDUMIG is a professional International education and immigration
            consultant based in Dhaka & Chittagong, Bangladesh. We are the first
            ICEF certified agent in Chittagong and one of the best education
            service provider in town.
          </p>
          <p className="flex mt-5 gap-5">
            <span>
              <img
                className="w-[30px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={faceBookLogo}
                alt=""
              />
            </span>
            <span>
              <img
                className="w-[30px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={LinkdinLogo}
                alt=""
              />
            </span>
            <span>
              <img
                className="w-[30px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={YoutubeLogo}
                alt=""
              />
            </span>
          </p>
        </div>
        {/* footer div 2  */}
        <div>
          <h1 className="font-bold text-xl mb-5">Useful Links</h1>
          <p>ABOUT US</p>
          <p>EVENT</p>
          <p>OUR TEAM</p>
          <p>STUDENT VISA</p>
        </div>
        {/* footer div 3  */}
        <div>
          <h1 className="font-bold text-xl mb-5">Location</h1>
          <p>
            House# 77, Flat # 9a, Road # 4, Block # C Banani, Dhaka
            loremipsum.edu.com
          </p>
        </div>
        {/* footer div 4  */}
        <div>
          <h1 className="font-bold text-xl mb-5">Hotline</h1>
          <p>+8801569569523</p>
        </div>
      </div>
      <p className="flex justify-center py-2 uppercase text-xs">© 2024 LoremIpsum. All rights reserved by
      <span className="ms-1 hover:text-[#539ce6]"><Link to="https://marketien.online/" target="_blank"> Marketien</Link></span></p>
    </div>
  );
};

export default Footer;
