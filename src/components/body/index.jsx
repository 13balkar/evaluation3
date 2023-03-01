import * as React from 'react';
import './body.css';
import { makeRequest } from  '../../utils';
import { GET_EVENTS } from '../../constants/apiEndPoints';
import Card from '../card';
const Body = () => {
  const [events,setEvents]=React.useState();
  const [error, setError] = React.useState();
  React.useEffect(() => {
    makeRequest(GET_EVENTS, {})
      .then(response => {
        response.sort((a, b) => a.datetime < b.datetime ? -1 : 1);
        setEvents(response);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  if (error) { return <h1>Error</h1>; }
  return events
    ? (
      <div className='card-list outer-padding' >
        {events.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    )
    : <h1>Loading</h1>;
};

export default Body;