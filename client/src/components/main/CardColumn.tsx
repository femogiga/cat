type CardColumnProp = {
  children?: React.ReactNode;
};

const CardColumn = ({ children }: CardColumnProp) => {
  const columnStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingInline:'4rem' ,
    gap: '2rem',
    flexWrap: 'wrap',
    position: 'relative',
  };

  const backCard: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: '#DEC68B',
    width: '46.96px',
    height: '176px',
    bottom: '3rem',
    left: '1rem',
    zIndex: '-3',
    borderRadius: '14rem',
  };
  return (
    <div className='cardColumn' style={columnStyle}>
      <div className='' style={backCard}></div>
      {children}
    </div>
  );
};

export default CardColumn;
