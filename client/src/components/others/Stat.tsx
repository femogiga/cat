const Stat = ({ statTitle, stat }) => {
  statTitle = statTitle || 'Child friendly';
  const barStyle = {
    width: '4rem',
    height: '.5rem',
    backgroundColor: 'black',
  };
  return (
    <div className='stat flex gap-2'>
      <p style={{ marginRight: '1rem' }}>{statTitle}</p>
      <div style={barStyle}></div>
    </div>
  );
};

export default Stat;
