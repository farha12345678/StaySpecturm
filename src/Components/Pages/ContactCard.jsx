import PropTypes from 'prop-types';

const ContactCard = ({data}) => {
    const { image ,name,phone,position, email} = data;
    return (
        <div>
           
            <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image}className="lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="lg:py-6">{phone}</p>
      <div className=''>
        <p className='font-semibold text-black'>Position:<span className='text-blue-500'>{position}</span></p>
        <p>{email}</p>
      </div>
       </div>
  </div>
</div>
            </div>
      </div> 
    );
};
ContactCard.propTypes = {
    data: PropTypes.object
}

export default ContactCard;