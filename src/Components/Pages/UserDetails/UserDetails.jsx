import Loading from "../../Loading/Loading";
import UserDetailsImg from "./UserDetailsImg";
import UserDetailsInfo from "./UserDetailsInfo";


const UserDetails = () => {


  return (
    <div className="lg:pt-[150px] md:pt-[150px] sm: pt-[150px]">
      
        {/* image upload  div*/}
 <UserDetailsImg/>
        {/* Educational informaiton*/}
<UserDetailsInfo/>
    </div>
  );
};

export default UserDetails;
