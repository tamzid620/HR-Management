import UserDetailsImg from "./UserDetailsImg";
import UserDetailsInfo from "./UserDetailsInfo";


const UserDetails = () => {


  return (
    <div>
      <h1 className="lg:pt-[100px] md:pt-[100px] sm: pt-[150px] text-3xl text-center ">
        Welcome <span></span>
      </h1>
        {/* image upload  div*/}
 <UserDetailsImg/>
        {/* Educational informaiton*/}
<UserDetailsInfo/>
    </div>
  );
};

export default UserDetails;
