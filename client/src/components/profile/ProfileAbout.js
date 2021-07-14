import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const renderAmountNeeded = (props) => {
  let amountNeeded = props;

  switch (amountNeeded) {
    case 1:
      return <h2>₹0 - ₹20,00,000</h2>;
      break;
    case 2:
      return <h2>₹20,00,000 - ₹1 Crore</h2>;
      break;
    case 3:
      return <h2>₹1 Crore - ₹5 Crore</h2>;
      break;
    case 4:
      return <h2>₹5 Crore and Above</h2>;
      break;
    default:
      return null;
  }
};

const ProfileAbout = ({
  profile: {
    bio,
    status,
    amountneeded,
    user: { email },
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>
          {status === 0 ? 'Startup' : 'Investor'}'s Summary
        </h2>
        <p>{bio}</p>
        <div className='line'></div>
        <a href={'mailto:' + email} className='btn btn-primary'>
          <h3>Email us</h3>
        </a>
        <div className='line'></div>
        <h2 className='text-primary'>Amount of Funding Needed</h2>
        {renderAmountNeeded(amountneeded)}
      </Fragment>
    )}
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
