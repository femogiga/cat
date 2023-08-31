const Stat = ({ statTitle, stat }) => {
  statTitle = statTitle || 'Child friendly';
  const barStyle = {
    width: '4rem',
    height: '.5rem',
    backgroundColor: 'black',
  };

  const barBlueStyle = {
    width: '4rem',
    height: '.5rem',
    backgroundColor: 'blue',
  };

  const barBlue =  <div style={barBlueStyle}></div>;
  const bar = <div style={barStyle}></div>;
  const arr = new Array(5)
  arr.fill(bar)

  return (
    <div className='stat flex gap1 align-center'>
      <p style={{ marginRight: '0rem',width:'30%' }}>{statTitle}</p>
      <div style={{ width: '100%',display:'flex',gap:'1rem' }}>
        {/* <div style={barStyle}></div> */}
        {arr.map((item, index) => index < stat ? bar : barBlue)}
      </div>
    </div>
  );
};

export default Stat;
