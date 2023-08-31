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
    <div className='stat flex gap-2'>
      <p style={{ marginRight: '0rem',width:'50%' }}>{statTitle}</p>
      <div style={{ width: '60%',display:'flex',gap:'2rem' }}>
        {/* <div style={barStyle}></div> */}
        {arr.map((item, index) => index < stat ? bar : barBlue)}
      </div>
    </div>
  );
};

export default Stat;
