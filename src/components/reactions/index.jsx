import * as React from 'react';
import PropTypes from 'prop-types';
import { makeRequest } from  '../../utils';
import './reactions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { UPDATE_EVENT_BY_ID } from '../../constants/apiEndPoints';
import { faBookmark as  fs } from '@fortawesome/free-solid-svg-icons';
const Reactions = ({ areSeatsAvailable, isRegistered, isBookmarked , id }) => {
  const [bookmark, setBookmark] = React.useState(isBookmarked);
  const fullSeats=(
    <div className='register'>
      <FontAwesomeIcon icon={faCircleXmark}/>
      <p>No seats available</p>
    </div>
  );
  const registered=(
    <div className='registered'>
      <FontAwesomeIcon icon={faCircleCheck}/>
      <p>Registered</p>
    </div>
  );
  const unregistered=(
    <div className='registered'>
    </div>
  );
  const handleBookmark = async() => {
    setBookmark(!bookmark);
    await makeRequest(UPDATE_EVENT_BY_ID(id), { data: { isBookmarked: !bookmark }});
  };
  return (
    <div className="card-reaction">
      
      {areSeatsAvailable ? isRegistered ? registered : unregistered : fullSeats }

      <div className='bookmark'>
        { bookmark ?  <FontAwesomeIcon onClick={handleBookmark} icon={ fs }/> : <FontAwesomeIcon onClick={handleBookmark} icon={faBookmark}/>}
        

      </div>
    </div>
  );
};

Reactions.propTypes = {
  areSeatsAvailable: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Reactions;
