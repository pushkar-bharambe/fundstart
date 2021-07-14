import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const renderAmountNeeded = (props) => {
  let amountNeeded = props;

  switch (amountNeeded) {
    case 1:
      return <h4>₹0 - ₹20,00,000</h4>;
      break;
    case 2:
      return <h4>₹20,00,000 - ₹1 Crore</h4>;
      break;
    case 3:
      return <h4>₹1 Crore - ₹5 Crore</h4>;
      break;
    case 4:
      return <h4>₹5 Crore and Above</h4>;
      break;
    default:
      return null;
  }
};

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    bio,
    location,
    amountneeded,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
        {renderAmountNeeded(amountneeded)}
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
