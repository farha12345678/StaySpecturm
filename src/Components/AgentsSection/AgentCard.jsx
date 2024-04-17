import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const AgentCard = ({data}) => {
    const {image ,name,phone,email,position} = data;
    console.log(data);
    useEffect(() => {
        AOS.init({
          // Global settings:
          offset: 200, // offset (in px) from the original trigger point
          duration: 1000, // duration (in ms) of the animation
          easing: 'ease', // default easing for AOS animations
          once: true // whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
    
        <div>
            <div  data-aos="flip-right" className="card w-80 bg-base-100 shadow-xl">
                <figure className='rounded-full' >
                    <img className="rounded-full w-48 h-48" src={image} />
                </figure>
                <div className='card-body' >
                    <h2 className="text-2xl text-center font-bold">{name}</h2>
                    <h3 className='text-lg font-semibold'>{email}</h3>
                    <p className='text-lg font-semibold'><span>Contact:</span> +{phone}</p>
                    <p className='text-base font-semibold'><span>Position:</span> {position}</p>
                    
                </div>
            </div>
        </div>
    );
};
AgentCard.propTypes = {
    data: PropTypes.object
}


export default AgentCard;