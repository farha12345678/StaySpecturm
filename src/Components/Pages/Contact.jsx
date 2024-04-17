import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactCard from "./ContactCard";


const Contact = () => {
    const [contact , setContact] = useState([]);

    useEffect(()=> {
        fetch('agents.json')
        .then(res => res.json())
        .then(data => setContact(data))
        console.log(contact);
    },[])
    return (
        <div>
            <div>
                <Helmet>
                    <title>
                        StaySpecturm || Contact
                    </title>
                </Helmet>
            </div>
            <div>
            <div className="hero w-96 h-96 container mx-auto md:w-full lg:w-[1100px] lg:h-72 md:h-[250px] rounded-3xl mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/tzKD0pv/pexels-pixabay-261169.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold animate__animated  animate__heartBeat">Contact With Us</h1>

                    </div>
                </div>
            </div>
           </div> 
           <div className="lg:w-96">
            {
                contact.map((data)=> <ContactCard key={contact.id} data={data}></ContactCard>)
            }
           </div>
        </div>
    );
};

export default Contact;