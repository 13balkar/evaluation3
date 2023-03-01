import * as React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Image, CardDescription, Reactions } from '../';
const Card  = ({event}) => {
  // console.log(event);
  return (
    <div className='card'>
      <div className='card-up'>
        <Image src={event.imgUrl} />

      </div>
      <div className='card-down'>
        <CardDescription name={ event.name} desc = {event.description } venue= { event.venue } datetime={ event.datetime } timezone={ event.timezone } />
        <Reactions id={event.id} areSeatsAvailable={ event.areSeatsAvailable } isRegistered={ event.isRegistered } isBookmarked={ event.isBookmarked }  />
      </div>
    </div>
  );
};
Card.propTypes = {
  event: PropTypes.object.isRequired
};

export default Card;
