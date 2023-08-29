import Card from './components/Card';
import Form from './components/header/Form';
import Header from './components/header/Header';
import Logo from './components/header/Logo';
import CardColumn from './components/main/CardColumn';
import Main from './components/main/Main';
import MainHeading from './components/main/MainHeading';
import Subheading from './components/main/Subheading';

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <Form />
      </Header>
      <Main>
        <Subheading subheading={'Most Search Breeds'} />
        <MainHeading />
        <CardColumn>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardColumn>
      </Main>
    </div>
  );
}

export default App;
