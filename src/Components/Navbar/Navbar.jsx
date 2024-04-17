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

        <NavLink to='/'><li className=" text-blue-500 mr-4 text-xl font-semibold">Home</li></NavLink>
        <NavLink to='/login'><li className="  text-blue-500 mr-4 text-xl font-semibold">Log In</li></NavLink>
        <NavLink to='/register'><li className="  text-blue-500   mr-4 text-xl font-semibold">Register</li></NavLink>
        <NavLink to='/contact'><li className=" text-blue-500 mr-4 text-xl font-semibold">Contact Us</li></NavLink>



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
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {
                        user ?
                            <>
                               


                                        <div className="grid lg:flex">
                                            <div className="menu menu-horizontal pl-32  lg:px-1">
                                                <Link className="text-blue-500 text-xl font-semibold" to='/update'>Update Profile</Link>
                                            </div>
                                            <div className="menu menu-horizontal pl-32 lg:px-1">
                                                <Link className="text-blue-500 text-xl lg:ml-2 font-semibold" onClick={handleLogOut}>Log Out</Link>
                                            </div>

                                            <div className="w-10 rounded-full" >
                                                <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>

                                                  <Link to='/user'>  <img className="tooltip tooltip-open tooltip-bottom " data-tip={user.displayName} alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} /></Link>
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