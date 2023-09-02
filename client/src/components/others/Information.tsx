import { useContext, useEffect, useState } from 'react';
import Card from '../Card';
import Logo from '../header/Logo';
import Subheading from '../main/Subheading';
import Stat from './Stat';
import { CatContext } from '../../context/CatContext';
import { useParams } from 'react-router-dom';
import Footer from '../main/Footer';
import { fetchData } from '../../../utility/apiService.ts';

type InformationProp = {
  breed: string;
  temperament: string;
  life_span: number;
  description: string;
};

const Information = ({
  breed,
  temperament,
  life_span,
  description,
}: InformationProp) => {
  //
  const [photos, setPhotos] = useState([]);
  //  const { photos,setPhotoId,photoId} = useContext(PhotoContext) as PhotoContextType;
  const params = useParams();
  const id = params.id;
  const { data } = useContext(CatContext);
  const currentCat = data.filter((cat) => cat.id === id);

  const displayedCat = currentCat[0];
  console.log('displayed', displayedCat);
  //const mappedPhotos = photos.slice(0, 8);

  //  useEffect(() => {
  //    setPhotoId(id);
  //  }, [photoId]);
  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}&api_key=`;
    const mappedPhotos = fetchData(url, setPhotos);
  }, []);

  ////
  return (
    <div className='information flex flex-col'>
      <Logo />
      <div className='flex gap-4'>
        <Card src={displayedCat?.image?.url} />
        <article className='flow-3' style={{ width: '60%' }}>
          <Subheading subheading={displayedCat?.name} />
          <p className='flow-2'>{displayedCat?.description}</p>
          <p className='flow-1'>
            <span>Temperament: </span> {displayedCat?.temperament}
          </p>
          <p className='flow-1'>
            <span>Origin: </span> {displayedCat?.origin}
          </p>
          <p className='flow-1'>
            <span>Life Span: </span>
            {displayedCat?.life_span}
            <span> years</span>
          </p>
          <div className='flex flex-col gap-2'>
            <Stat statTitle='Adaptability' stat={displayedCat?.adaptability} />
            <Stat
              statTitle='Affection level'
              stat={displayedCat?.affection_level}
            />
            <Stat
              statTitle='Child Friendly'
              stat={displayedCat?.child_friendly}
            />
            <Stat statTitle='Grooming' stat={displayedCat?.grooming} />
            <Stat statTitle='Intelligence' stat={displayedCat?.intelligence} />
            <Stat
              statTitle='Health issues'
              stat={displayedCat?.health_issues}
            />
            <Stat statTitle='Social needs' stat={displayedCat?.social_needs} />
            <Stat
              statTitle='Stranger friendly'
              stat={displayedCat?.stranger_friendly}
            />
          </div>
        </article>
      </div>
      <div className='flow-6'>
        <Subheading subheading='Other photo' />
        <div className='flex gap-2 flex-wrap space-btw align-center'>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}

          {photos.map((picture, index) => (
            <Card key={index} src={picture?.url} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Information;
