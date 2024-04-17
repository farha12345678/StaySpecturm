import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';
import '../../index.css'

const EstateDetails = () => {
    const estates = useLoaderData()
    const { id } = useParams();
    const estate = estates.find(data => data.id == id);
    console.log(estate);
    return (
        <div>
            <div className="hero w-96 h-96 container md:mx-auto lg:mx-auto md:w-[600px] lg:w-[1100px] lg:h-72 md:h-[250px] rounded-3xl mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/tzKD0pv/pexels-pixabay-261169.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold animate__animated  animate__backInDown">Estate Details</h1>

                    </div>
                </div>
            </div>

            {/* details sec */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={estate.image} className="lg:max-w-md md:w-96 w-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="animate__animated  animate__flip text-5xl font-bold">{estate.estate_title}</h1>
                        <h2 className="text-2xl text-black mt-2  font-bold">Location: <span className="text-2xl text-blue-500 mt-2  font-bold">{estate.location}</span></h2>
                        <p className="py-2 text-xl font-medium">{estate.description}</p>
                        
                        <p className="font-bold pb-2"> Facilities: 
                            {
                                estate.facilities.map((facility , index) => (
                                    <li className="text-blue-500" key={index}>{facility}</li>
                                ))
                            }
                        </p>
                        <div className="flex gap-x-10 font-semibold text-xl">
                            <p className="border-2 rounded-md border-blue-400">{estate.segment_name}</p>
                            <p className="border-2 rounded-md border-blue-400">{estate.price}</p>
                            <p>For: <span className="border-2 rounded-md border-blue-400">{estate.status}</span></p>
                            
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;