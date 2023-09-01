import catLogo from '../../cat/CatwikiLogo2.svg';
import { ReactSVG } from 'react-svg';

const Form = () => {
   const formStyle: React.CSSProperties = {
     borderTopLeftRadius: '30px',
     borderTopRightRadius: '30px',
   };
  return (
    <div className='form' style={formStyle}>
      <figure>
        {/* <CatLogo /> */}
        <ReactSVG src={catLogo} />
      </figure>
      <p className='flow-2'>Get to know more about your cat breed</p>
      <div className='rel-cont pos-rel'>
        <input type='text' />
        <span className='material-symbols-outlined pos-abs'>search</span>
      </div>
    </div>
  );
};

export default Form;
