import { ReactSVG } from 'react-svg';
import catLogo from '../../cat/CatwikiLogo2.svg';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    width: '100%',
    padding: '1rem',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    color: 'white',
  };
  return (
    <div className='footer flex align-center space-btw' style={footerStyle}>
      <div>
        <ReactSVG src={catLogo} />
      </div>
      <p> created by username . devChalleges.io</p>
    </div>
  );
};

export default Footer;
