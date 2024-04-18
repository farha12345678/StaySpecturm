import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
const {user , logOut} = useContext(AuthContext)




    const links = <>
    <li><NavLink className={({isActive}) => isActive? 'underline text-xl text-blue-600 font-bold': 'font-bold text-xl text-blue-500'} to='/'>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive? 'underline text-xl text-blue-600 font-bold': 'font-bold text-xl text-blue-500'} to='/register'>Register</NavLink></li>
    <li><NavLink className={({isActive}) => isActive? 'underline text-xl text-blue-600 font-bold': 'font-bold text-xl text-blue-500'} to='/contact'>Contact Us</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-blue-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold gap-0">Stay<span className="text-blue-500">Specturm</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal ">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user? <>
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <div className="tooltip" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <div className="tooltip" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
        <Link to='/update'>Update Profile</Link>
     <Link to='/user'>Profile</Link>
     <button>Log Out</button>
      </ul>
    </div>
    <div className="navbar  hidden md:hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     <Link className=" font-bold text-xl text-blue-500" to='/update'>Update Profile</Link>
     <Link className="ml-4 font-bold text-xl text-blue-500 " to='/user'>Profile</Link>
     <Link><button onClick={logOut} className="font-bold text-xl ml-4 text-blue-500">Log Out</button></Link>
     <div className="tooltip  rounded-full" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 ml-2 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
    </ul>
  </div>
    
  
    
 </>
    :
    <Link to='/login'><button onClick={logOut} className="font-bold text-xl ml-4 text-blue-500">Log In</button></Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;