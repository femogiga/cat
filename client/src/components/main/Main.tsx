type MainProp = {
  children?: React.ReactNode;
};
const Main = ({ children }: MainProp) => {
  return <section className='main'>{children}</section>;
};

export default Main;
