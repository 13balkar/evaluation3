import * as React from 'react';
import PropTypes from 'prop-types';
import './description.css';
import { getFormattedDate } from '../../utils';
const CardDescription = ({ name,desc, venue,datetime,timezone }) => {
  return (
    <div className="card-desc">
      <div className='heading'>
        <h1 className='name'>{name}</h1>
        <p className='desc'>{desc}</p>
        <p className='venue'>VENUE: {venue}</p>
      </div>
      <div className='time'>
        <p className='datetime'>{getFormattedDate(datetime,timezone)}</p>
      </div>
    </div>
  );
};

CardDescription.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired
};

export default CardDescription;
