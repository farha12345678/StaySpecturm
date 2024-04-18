import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateProfile = () => {

    const { updateUserProfile, signInUser , user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'  



    // const currentUser = () => {
    //     const user = auth.currentUser;
    //     if (user !== null) {
    //         const displayName = user.displayName;
    //         const photoURL = user.photoURL;
    //         console.log(displayName, photoURL);
    //     }
    // }




    const handleProfile = e => {
        
        const form = new FormData(e.currentTarget)
        const displayName = form.get('name')
        const photoURL = form.get('photo')
        // signInUser()
        console.log(displayName , photoURL);
        updateUserProfile(displayName , photoURL)
        .then(()=> {
            
            signInUser((prevUser)=> {
                navigate(from)
                
                return {...prevUser , displayName : displayName , photoURL:photoURL }
                
                
            })
        })
        .catch(error=> {
            toast.error(error);
        })
    }
    

    




    return (

        <div>
            <Helmet>
                <title>
                    StaySpecturm || Profile
                </title>
            </Helmet>
            <div className="text-center mb-5">
                <h1 className="text-5xl font-bold animate__animated  animate__heartBeat">Update Your Profile!</h1>

            </div>
            <div className=" container card shrink-0 mb-5 mx-auto lg:w-[450px] shadow-2xl bg-base-200 font-semibold">
                <form onSubmit={handleProfile} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder={user.displayName} className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder={user.photoURL} className="input input-bordered"  />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' disabled name="email" placeholder={user.email} className="input input-bordered" />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default UpdateProfile;