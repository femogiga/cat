import Card from './components/Card';
import Form from './components/header/Form';
import Header from './components/header/Header';
import Logo from './components/header/Logo';
import BottomColumn from './components/main/BottomColumn';
import CardColumn from './components/main/CardColumn';
import Footer from './components/main/Footer';
import Main from './components/main/Main';
import MainHeading from './components/main/MainHeading';
import Subheading from './components/main/Subheading';
import firstImage from './cat/image 1.png';
import secondImage from './cat/image 2.png';
import thirdImage from './cat/image 3.png';
import CatProvider, { CatContext } from './context/CatContext';
import { useContext } from 'react';
import { CatContextType } from './typescontainer/types';
import { Link } from 'react-router-dom';
import Information from './components/others/Information';

function App() {
  const { data, setData } = useContext(CatContext) as CatContextType;
  const mapped = data.slice(0, 4);
  console.log('all data', mapped);
  return (
    <div>
      {/* <CatProvider> */}
      <Header>
        <Logo />
        <Form />
      </Header>
      <Main>
        <Subheading subheading={'Most Search Breeds'} />
        <MainHeading heading={' 66+ Breeds For you to discover'} />
        <CardColumn>
          {/* <Card />
            <Card />
            <Card /> */}
          {mapped.map((cat) => (
            <Link to={`/${cat.id}`}>
              <Card key={cat.id} src={cat.image.url} breed={cat.name}  />
            </Link>
          ))}
        </CardColumn>
      </Main>

      <BottomColumn>
        <div style={{ alignSelf: 'center' }}>
          <MainHeading
            heading={'Why should you  have a cat?'}
            seeMore={false}
          />
          <p>
            SEE MORE <span> &#8594;</span>
          </p>
        </div>

        <div className='flex gap-2 ' style={{ width: '55%' }}>
          <div className='flex flex-col'>
            <Card src={firstImage} width={'17.063rem'} height={'10.438rem'} />
            <Card src={secondImage} width={'12.218rem'} height={'18.328rem'} />
          </div>

          <Card src={thirdImage} width={'14.904rem'} height={'24.117rem'} />
        </div>
      </BottomColumn>
      <Information/>
    </div>
  );
}
export default App;
