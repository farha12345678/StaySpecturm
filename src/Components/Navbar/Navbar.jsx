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
        <li  ><NavLink className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold text-xl' : 'font-bold text-xl'} to='/'>Home</NavLink></li>
        <li  ><NavLink className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold text-xl' : 'font-bold text-xl'} to='/register'>Register</NavLink></li>
        <li  ><NavLink className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold text-xl' : 'font-bold text-xl'} to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold gap-0">Stay<span className="text-blue-500">Spectrum</span></a>
                </div>


                <div className="navbar-center
                    hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* user profile */}
                <div className="navbar-end ">
                    {
                        user ?
                            <>

                                <div className="dropdown navbar-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                                        <div
                                            className="tooltip  tooltip-bottom rounded-full" data-tip={user.displayName}
                                            data-tooltip-place="left"

                                        >
                                            <img className=" w-10  rounded-full h-10" src={user.photoURL} alt="Tailwind CSS Navbar component" />

                                        </div>
                                    </div>

                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-20">
                                        <div
                                            className=" w-10 rounded-full" >
                                            <img className="w-10 tooltip  tooltip-bottom rounded-full"
                                                data-tip={user.displayName}
                                                src={user.photoURL} alt="Tailwind CSS Navbar component" />

                                        </div>
                                        <a href="/update" className="justify-between   lg:font-bold sm:font-thin">Update Profile</a>

                                        <div>
                                            <Link className="lg:font-bold sm:font-thin" to='/user'>Profile</Link>

                                            <div>
                                                <Link onClick={handleLogOut} className="btn" to='/logIn'>Log Out</Link>
                                            </div>
                                        </div>
                                    </ul>

                                </div>

 <div className="hidden mb-4 lg:flex md:hidden">
                                    <ul className="menu  menu-horizontal px-2">
                                        <div >
                                            <div
                                                className="tooltip  tooltip-bottom   rounded-full mr-2 " data-tip={user.displayName}>
                                                <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="Tailwind CSS Navbar component" />


                                            </div>
                                            <a className="mr-4 border text-xl font-bold text-blue-500" href="/update" >Update Profile</a>


                                            <Link className="mr-4 border text-xl font-bold text-blue-500" to='/user'>Profile</Link>

                                            <Link className="text-xl font-bold text-blue-500"  onClick={handleLogOut} to='/logIn'>Log Out</Link>


                                        </div>
                                    </ul>
                                </div>


                                {/* <div>
                                    <div
                                        className="tooltip  tooltip-bottom w-10 rounded-full" data-tip={user.displayName}
                                        data-tooltip-place="left"

                                    >
                                        <img className="w-10 rounded-full" src={user.photoURL} alt="Tailwind CSS Navbar component" />

                                    </div>
                                    <a href="/update" className="justify-between   lg:font-bold sm:font-thin">Update Profile</a>

                                    <div>
                                        <Link className="lg:font-bold sm:font-thin" to='/user'>Profile</Link>

                                        <div>
                                            <Link onClick={handleLogOut} className="btn" to='/logIn'>Log Out</Link>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                            :
                            <div>
                                <Link to='/login' className="mr-4 font-bold border-none" >Log In
                                </Link>
                            </div>
                    } </div>
            </div>
        </div>
    )
}
export default Navbar;