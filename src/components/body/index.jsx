import * as React from 'react';
import './body.css';
import { makeRequest } from  '../../utils';
import { GET_EVENTS } from '../../constants/apiEndPoints';
import Card from '../card';
import Filter from '../filter';
const Body = () => {
  const [events,setEvents]=React.useState();
  const [show, setShow] = React.useState();
  const [error, setError] = React.useState();
  const [dropdown, setDropdown] = React.useState(false);
  const [all, setAll] = React.useState(true); 
  const [registered, setRegistered] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);
  const [seats, setSeats] = React.useState(false);

  React.useEffect(() => {
    makeRequest(GET_EVENTS, {})
      .then(response => {
        response.sort((a, b) => a.datetime < b.datetime ? -1 : 1);
        setEvents(response);
        setShow(response);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  if (error) { return <h1>Error</h1>; }

  return events
    ? (
      <div className='body'>
        <Filter setAll={setAll} setRegistered={setRegistered} setBookmarked={setBookmarked} setSeats={setSeats} setShow={setShow} events={events} dropdown={dropdown} setDropdown={setDropdown} all={all} registered={registered} bookmarked={bookmarked} seats={seats}  />
        <div className='card-list outer-padding' >
          {show.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </div>
    )
    : <h1>Loading</h1>;
};

export default Body;