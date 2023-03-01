import * as React from 'react';
import './footer.css';
import { makeRequest } from  '../../utils';
import { GET_THEMES } from '../../constants/apiEndPoints';
const Footer = () => {
  const [ themes ,setThemes]=React.useState();
  React.useEffect(() => {
    makeRequest(GET_THEMES, {})
      .then(response => {
        setThemes(response.themes);
      });
  }, []);
  return(
    <div className='footer outer-padding'>
      <h1>THEMES</h1>
      <div className='theme-list'>
        {themes && themes.map(theme=>(
          <div key={theme.id} style={ { backgroundColor : theme.colorHexCode } } className='theme'></div>
        ))}
      </div>
    </div>
  );
};

export default Footer;