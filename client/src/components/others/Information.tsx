import { useContext } from 'react';
import Card from '../Card';
import Logo from '../header/Logo';
import Subheading from '../main/Subheading';
import Stat from './Stat';
import { CatContext } from '../../context/CatContext';
import {useParams} from 'react-router-dom'

type InformationProp = {
  breed: string
  temperament: string
  life_span:number
}

const Information = ({ breed, temperament, life_span }: InformationProp) => {

  const params = useParams()
  const id = params.id
  const { data } = useContext(CatContext)
  const currentCat = data.filter(cat => cat.id === id)

  const displayedCat = currentCat[0]
  console.log('displayed', displayedCat);
  

  return (
    <div>
      <Logo />
      <div className='flex'>
        <Card />
        <article>
          <Subheading subheading={displayedCat?.name} />
          <p className='flow-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            repellendus reiciendis iste maxime aliquid dolor fuga, libero facere
            aut perferendis sint expedita fugiat, minima sunt doloremqu e
            laboriosam cupiditate nobis consequatur.
          </p>
          <p>
            <span>Temperament: </span> {displayedCat?.temperament}
          </p>
          <p>
            <span>Life Span: </span> {displayedCat?.life_span}-
          </p>
          <Stat statTitle='Adaptability' stat='' />
          <Stat statTitle='Affection level' stat='' />
          <Stat statTitle='Child Friendly' stat='' />
          <Stat statTitle='Grooming' stat='' />
          <Stat statTitle='Intelligence' stat='' />
          <Stat statTitle='Health issues' stat='' />
          <Stat statTitle='Social needs' stat='' />
          <Stat statTitle='Stranger friendly' stat='' />
        </article>
      </div>
    </div>
  );
};

export default Information;
function useParam() {
  throw new Error('Function not implemented.');
}
