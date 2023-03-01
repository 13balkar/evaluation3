import * as React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Image, CardDescription, Reactions } from '../';
const Card  = ({event, handleClick, big}) => {
  const className= big===0 ? 'card' : 'card-big';
  return (
    <div className={className} onClick={()=> handleClick(event.id)}>
      <div className='card-up'>
        <Image src={event.imgUrl} />

      </div>
      <div className='card-down'>
        <CardDescription name={ event.name} desc = {event.description } venue= { event.venue } datetime={ event.datetime } timezone={ event.timezone } />
        <Reactions big={big} id={event.id} areSeatsAvailable={ event.areSeatsAvailable } isRegistered={ event.isRegistered } isBookmarked={ event.isBookmarked }  />
      </div>
    </div>
  );
};
Card.propTypes = {
  event: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  big: PropTypes.number.isRequired,
};

export default Card;
