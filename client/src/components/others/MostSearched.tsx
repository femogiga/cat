import { useContext } from 'react';
import { CatContext } from '../../context/CatContext';
import Card from '../Card';
import MostSearchedCard from '../MostSearchedCard';
import Logo from '../header/Logo';
import Subheading from '../main/Subheading';
import { CatContextType } from '../../typescontainer/types';
import { Link } from 'react-router-dom';

const MostSearched = () => {
  const { data, setData } = useContext(CatContext) as CatContextType;

  return (
    <div className='mostsearched '>
      <Logo />
      <div className=''>
        <Subheading subheading={'Top 10 most searched breed'} />
        {/* <article className='flex gap-2'>

            <Card width='11rem' height='11rem'/>


          <div style={{padding:'.75rem 0'}}>
            <p>
              {1}.
              <span style={{marginLeft:'.50rem'}}>{'Bengal'}</span>
            </p>
            <p style={{ marginTop:'.7rem'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              distinctio sapiente ullam impedit quasi vel consequuntur excepturi
              autem possimus fugiat alias, maiores et dicta quisquam porro
              beatae aut facere necessitatibus!
            </p>
          </div>
        </article> */}
        {/* <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} />
        <MostSearchedCard description={''} src={''} breed={''} /> */}
        {data.map((item) => (
          <Link to={`/${item.id}`} >
            <MostSearchedCard
              key={item.id}
              description={item.description}
              src={item?.image?.url}
              breed={item.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostSearched;
