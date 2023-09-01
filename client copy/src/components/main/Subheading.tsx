type Subheading = {
  subheading: string;
};

const Subheading = ({ subheading }: Subheading) => {
  const style = {
    // paddingInline: '2rem',
    marginBlockEnd:'2rem'
  };
  return <h3 style={style}>{subheading}</h3>;
};

export default Subheading;
