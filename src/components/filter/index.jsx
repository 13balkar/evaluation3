import * as React from 'react';
import './filter.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons';
const Filter = ({ setAll, setRegistered, setBookmarked, setSeats, setShow, events , dropdown, setDropdown, all ,registered, bookmarked, seats}) => {
  
  const handleClick = (id) => () => {
    if(id===1){
      setAll(true);
      setRegistered(false);
      setBookmarked(false);
      setSeats(false);
      setShow(events);
    }
    else if(id===2){
      setAll(false);
      setRegistered(true);
      setBookmarked(false);
      setSeats(false);
      setShow(events.filter(event => event.isRegistered));
    }
    else if(id===3){
      setAll(false);
      setRegistered(false);
      setBookmarked(true);
      setSeats(false);
      setShow(events.filter(event => event.isBookmarked));
    }
    else if(id===4){
      setAll(false);
      setRegistered(false);
      setBookmarked(false);
      setSeats(true);
      setShow(events.filter(event => event.areSeatsAvailable));
    } 
  };
  const [value, setValue] = React.useState('EVENT NAME');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSearch = () => {
    setShow(events.filter(event => event.name.toLowerCase().includes(value.toLowerCase())));
  };
  return (
    <div >
      <div className='search-filter outer-padding'>
        <div className='filter'>
          <FontAwesomeIcon icon={faFilter}/>
          <p>FILTER</p>
          <FontAwesomeIcon icon={faChevronDown} onClick={()=> setDropdown(!dropdown)} />
        </div>
        <div className='search'>
          <input type="text" value={value} onClick={() => setValue('') } onChange={handleChange} />
          <div className='icon'>
            <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
          </div>
        </div>
      </div>
  
      {dropdown && <div className='dropdown-content outer-padding' >
        <div className='line'>
          <div className='option'>
            <FontAwesomeIcon icon={ all ? faCircleDot : faCircle } onClick={handleClick(1)}/>
            <p>ALL</p>
          </div>
          <div className='option2'>
            <p>REGISTERED</p>
            <FontAwesomeIcon icon={registered ? faCircleDot : faCircle} onClick={handleClick(2)}/>
          </div>
        </div>
        <div className='line'>
          <div className='option'>
            <FontAwesomeIcon icon={bookmarked ? faCircleDot : faCircle} onClick={handleClick(3)}/>
            <p>BOOKMARKED</p>
          </div>
          <div className='option2'>
            <p>SEATS AVAILABLE</p>
            <FontAwesomeIcon icon={seats ? faCircleDot : faCircle} onClick={handleClick(4)}/>
          </div>
        </div>
      </div>}
    </div>
  );
};

Filter.propTypes = {
  setAll: PropTypes.func.isRequired,
  setRegistered: PropTypes.func.isRequired,
  setBookmarked: PropTypes.func.isRequired,
  setSeats: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  dropdown: PropTypes.bool.isRequired,
  setDropdown: PropTypes.func.isRequired,
  all: PropTypes.bool.isRequired,
  registered: PropTypes.bool.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  seats: PropTypes.bool.isRequired,
  
    
};
export default Filter;