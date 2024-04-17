import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('logged out', result);
            })
            .catch(error => console.log(error))

    }
    const links = <>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 underline text-xl lg:px-4 font-semibold': 'text-blue-500 text-xl font-semibold lg:px-1'} to="/">Home</NavLink>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 underline text-xl lg:px-4 font-semibold': 'text-blue-500 text-xl font-semibold lg:px-1'} to="/login">Log In</NavLink>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 underline text-xl lg:px-4  font-semibold': 'text-blue-500 text-xl font-semibold lg:px-1'} to="register">Register</NavLink>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 underline text-xl lg:px-4 font-semibold': 'text-blue-500 text-xl font-semibold lg:px-1'} to="contact">Contact Us</NavLink>
    

        



    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold gap-0">Stay<span className="text-blue-500">Spectrum</span></a>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {
                        user ?
                            <>
                            <div className="dropdown ">
                        {/* <div tabIndex={0} role="button" className="btn md:hidden btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div> */}
                        {/* <ul tabIndex={0} className="menu menu-xs dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box  lg:w-52"> */}
                            {/* <div className="">
                                            <div className="menu menu-horizontal   lg:px-1">
                                                <Link className="text-blue-500 text-xl lg:font-semibold" to='/update'>Update Profile</Link>
                                            </div>
                                            <div className="menu menu-horizontal  lg:px-1">
                                                <Link className="text-blue-500 text-xl lg:ml-2 lg:font-semibold" onClick={handleLogOut}>Log Out</Link>
                                            </div>

                                            <div className="w-8 rounded-full" >
                                                <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>

                                                  <Link to='/user'>  <img className="tooltip tooltip-open tooltip-bottom " data-tip={user?user.displayName : 'user not found'} alt="Tailwind CSS Navbar component" src={user ? user .photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} /></Link>
                                                </div>
                                                <div>

                                                </div>
                                            </div>

                                        </div>
                                     */}
                        {/* </ul> */}
                    </div>
                               

{/*  */}
                                        <div className="grid md:flex lg:flex">
                                            <div className="menu menu-horizontal   lg:px-1">
                                                <Link className="text-blue-500 lg:text-xl text-sm font-semibold" to='/update'>Update Profile</Link>
                                            </div>
                                            <div className="menu menu-horizontal  lg:px-1">
                                                <Link className="text-blue-500 lg:text-xl text-sm lg:ml-2 font-semibold" onClick={handleLogOut}>Log Out</Link>
                                            </div>

                                            <div className="lg:w-10 md:w-10 w-10 rounded-full" >
                                                <div className="tooltip  tooltip-bottom " data-tip={user.displayName}>

                                                  <Link to='/user'>  <img className="tooltip rounded-full  tooltip-open tooltip-bottom " data-tip={user.displayName} alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} /></Link>
                                                </div>
                                                <div>

                                                </div>
                                            </div>

                                        </div>
                                    
                               

                                
                                </>
                                :
                                <Link className="btn" to='/login'>Log In</Link>
                    }

                            </div>
                </div >
            </div >
            );
};

            export default Navbar;