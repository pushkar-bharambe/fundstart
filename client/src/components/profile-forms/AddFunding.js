import React, { Fragment, useState } from 'react';

import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFunding } from '../../actions/profile';
import FileUpload from '../file-upload/FileUpload';

const AddFunding = ({ addFunding, history }) => {
  const [formData, setFormData] = useState({
    round: '',
    date: '',
    company: '',
    location: '',
  });

  const { round, company, location, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add funding details</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any funding details and their
        respective documents
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addFunding(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Company Name'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <select
            name='round'
            value={round}
            onChange={(e) => onChange(e)}
            required
          >
            <option value='0'>* Enter the funding round</option>
            <option value='Seed Funding'>Seed Funding</option>
            <option value='Series A'>Series A</option>
            <option value='Series B'>Series B</option>
            <option value='Series C'>Series C</option>
          </select>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h4>Date of funding</h4>
          <input
            type='date'
            name='date'
            value={date}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>Upload official documents of the deal in PDF format.</div>
        <FileUpload />
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddFunding.propTypes = {
  addFunding: PropTypes.func.isRequired,
};

export default connect(null, { addFunding })(withRouter(AddFunding));
