import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    amountneeded: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayAmountNeeded, toggleAmountNeeded] = useState(false);
  const {
    company,
    website,
    location,
    status,
    amountneeded,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  const showAmountNeeded = (e) => {
    if (e.target.value === '0') {
      toggleAmountNeeded(true);
    }
    if (e.target.value === '1') {
      toggleAmountNeeded(false);
    }
    console.log(displayAmountNeeded);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select
            name='status'
            value={status}
            onChange={(e) => {
              onChange(e);
              console.log(e.target.value);
              showAmountNeeded(e);
            }}
          >
            <option value='null'>* Are you a startup or investor?</option>
            <option value='0'>Start-up</option>
            <option value='1'>Investor</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Registered Company Name'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Legally registered name of your company
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Your company's official website</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='* A short summary of your company'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>
            Tell us about the fields you work in..
          </small>
        </div>

        {displayAmountNeeded && (
          <Fragment>
            <div className='form-group'>
              <select
                name='amountneeded'
                value={amountneeded}
                onChange={(e) => onChange(e)}
              >
                <option value='0'>* Enter the funding amount needed</option>
                <option value='1'>₹0 - ₹20,00,000</option>
                <option value='2'>₹20,00,000 - ₹1 Crore</option>
                <option value='3'>₹1 Crore - ₹5 Crore</option>
                <option value='4'>₹5 Crore and Above</option>
              </select>
            </div>
          </Fragment>
        )}

        <div className='my-2'>
          <button
            type='button'
            className='btn btn-light'
            onClick={() => {
              toggleSocialInputs(!displaySocialInputs);
            }}
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
