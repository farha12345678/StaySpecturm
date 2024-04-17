import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={user.photoURL}className="max-w-sm rounded-full shadow-2xl" />
    <div className="border border-blue-500">
      <h1 className="text-5xl font-bold">{user.displayName}</h1>
      <p className="py-6">{user.email}</p>
      
       </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default UserProfile;