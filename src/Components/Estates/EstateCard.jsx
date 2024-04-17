import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const EstateCard = ({data}) => {
    const {id ,estate_title , image , segmant_name , description , location , status , price , area} = data;
    
    return (
        <div>
            <div className="card  h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className="rounded-3xl" src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <h3>{segmant_name}</h3>
                    <p>{description.split(' ').slice(0, 10).join(' ')}...</p>
                    <div className="flex justify-end ">
                   <p  className="text-xl font-semibold mr-14">{location.split(' ').slice(0, 2).join(' ')}...</p>
                   <p className="border-2 rounded-md border-blue-400 bg-blue-100">{area}</p>
                    </div>
                    <div className="flex gap-x-40">
                        <p className='border-2 rounded-md bg-blue-100 border-blue-400' >{status}</p>
                        <p className="border-2 rounded-md bg-blue-100 border-blue-400">{price}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/details/${id}`}><button className="btn bg-blue-500 text-white font-bold text-xl">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
EstateCard.propTypes = {
    data: PropTypes.object
}

export default EstateCard;