import { FaGraduationCap ,FaBookReader,FaBusinessTime,FaUserCheck ,FaTicketAlt ,FaUserTie} from "react-icons/fa";

const HomeSupport = () => {
    return (
        <div className="my-20">
                <h1 className="flex justify-center ">WE OFFER SUPPORT</h1>
                <p className="flex justify-center font-bold text-3xl">How We Can Help You?</p>
                {/* support parent div  */}
            <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5 lg:mx-20">
                {/* STUDENT VISA div  ------------------- */}
            <div className="flex justify-center">
                <div className="rounded-tl-3xl w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaGraduationCap size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">STUDENT VISA</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Free Student Assessment</button>
                        </div>
                </div>
            </div>
                {/* English Learning Platform div  ------------------- */}
            <div className="flex justify-center items-center">
                <div className=" w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaBookReader size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">English Learning Platform</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Know More</button>
                        </div>
                </div>
            </div>

                {/* BUSINESS INVESTOR VISA div  ------------------- */}
            <div className="flex justify-center items-center">
                <div className="rounded-tr-3xl w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaBusinessTime size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">BUSINESS INVESTOR VISA</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Know More</button>
                        </div>
                </div>
            </div>

                {/* SKILLED MIGRATION div  ------------------- */}
            <div className="flex justify-center items-center">
                <div className="rounded-bl-3xl w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaUserCheck size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">SKILLED MIGRATION</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Know More</button>
                        </div>
                </div>
            </div>

                {/* E-TICKETING div  ------------------- */}
            <div className="flex justify-center items-center">
                <div className=" w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaTicketAlt size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">E-TICKETING</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Know More</button>
                        </div>
                </div>
            </div>
            
                {/* VISIT VISA div  ------------------- */}
                <div className="flex justify-center items-center">
                <div className="rounded-br-3xl w-[350px] h-[350px] bg-[#25476a] text-white px-3 leading-7 hover:shadow-lg hover:shadow-gray-500">
                    <span className="flex justify-center py-3"><FaUserTie size={60}/></span>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="flex justify-center font-bold text-xl">VISIT VISA</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }} className="font-light my-5">With us you will get expert guidelines regarding all your Study abroad needs. We have been fulfilling the study abroad dreams of students in 30 countries for over 10 years.</p>
                    <div className=" flex justify-center mt-10 mb-10">
                        <button className="bg-gray-300 text-black px-3 py-2 rounded-md font-semibold text-xs">Know More</button>
                        </div>
                </div>
            </div>

            </div>
        </div>
    );
};

export default HomeSupport;