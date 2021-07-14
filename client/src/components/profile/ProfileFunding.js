import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileFunding = ({ funding: { company, location, date, round } }) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{date}</Moment>
    </p>
    <p>
      <strong>Funding Round: </strong> {round}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
  </div>
);

ProfileFunding.propTypes = {
  funding: PropTypes.object.isRequired,
};

export default ProfileFunding;
