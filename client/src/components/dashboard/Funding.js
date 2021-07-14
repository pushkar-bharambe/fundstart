import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteFunding } from '../../actions/profile';

const Funding = ({ funding, deleteFunding }) => {
  const fundings = funding.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.round}</td>
      <td>{exp.location}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.date}</Moment>
      </td>
      <td>
        <button
          onClick={() => deleteFunding(exp._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Funding Details</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th className='hide-sm'>Round</th>
            <th className='hide-sm'>Location</th>
            <th className='hide-sm'>Date</th>
          </tr>
        </thead>
        <tbody>{fundings}</tbody>
      </table>
    </Fragment>
  );
};

Funding.propTypes = {
  funding: PropTypes.array.isRequired,
  deleteFunding: PropTypes.func.isRequired,
};

export default connect(null, { deleteFunding })(Funding);
