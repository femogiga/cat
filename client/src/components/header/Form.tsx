import catLogo from '../../cat/CatwikiLogo2.svg';
import { ReactSVG } from 'react-svg';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { allBreeds } from '../../../utility/allCat.ts';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
  const {selectedOption,setSelectedOption} = props
  const formStyle: React.CSSProperties = {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
  };

const navigate = useNavigate()
  useEffect(() => {
    const searchword = selectedOption?.label
    const name = selectedOption?.label
      const data ={name,searchword}
    axios.post(`http://localhost:9000/cats/`, data)
      .then(res => res.data)
      .then(res => {

        navigate(`/${selectedOption.id}`)
        navigate(0);

      })
    .catch(err=>console.error(err))
  },[selectedOption,navigate])
  return (
    <div className='form' style={formStyle}>
      <figure>
        {/* <CatLogo /> */}
        <ReactSVG src={catLogo} />
      </figure>
      <p className='flow-2'>Get to know more about your cat breed</p>
      <div className='rel-cont pos-rel'>
        {/* <input type='text' autoComplete='' /> */}
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={allBreeds}
          sx={{ width: 300, backgroundColor: 'white',borderRadius:'10px' }}
          renderInput={(params) => <TextField {...params} />}
          // onChange={onChange}
          onChange={(event, newValue) => {
            setSelectedOption(newValue);
            console.log(newValue)
          }}
          value={selectedOption}
        />
        <span className='material-symbols-outlined pos-abs'>search</span>
      </div>
    </div>
  );
};

export default Form;
