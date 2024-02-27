import UserDetailsImg from "./UserDetailsImg";
import UserDetailsInfo from "./UserDetailsInfo";


const UserDetails = () => {


  return (
    <div>
      <h1 className="pt-[100px] text-3xl text-center ">
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
