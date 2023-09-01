type MainHeadingProps = {
  heading?: string
  seeMore?: boolean
}


const MainHeading = ({ heading, seeMore }:MainHeadingProps) => {
  const h1style: React.CSSProperties = {
    fontSize: '2rem',
    // width: '100%',
    whiteSpace:'nowrap',
    fontWeight: 'bold',
  };
  const pStyle: React.CSSProperties = {
    fontSize: '1rem',
    textAlign: 'end',
     width: '100%',
    alignSelf: 'flex-end',
  };


  return (
    <div className='mainheading flex flow-2' style={{width:'0%'}}>
      <p className='' style={h1style}>
       {heading}
      </p>
      {seeMore && <p style={pStyle}>
        SEE MORE <span> &#8594;</span>
      </p>}
    </div>
  );
};

export default MainHeading;
