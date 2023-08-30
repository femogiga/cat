type MainProp = {
  children?: React.ReactNode;
};
const Main = ({ children }: MainProp) => {
  return <section className='main flow-3'>{children}</section>;
};

export default Main;
