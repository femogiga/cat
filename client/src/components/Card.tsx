
type CardProp = {
    aspect?: string;
    breed?: string
    height?:string

}

const Card = ({ aspect,breed,height }:CardProp) => {
    //aspect = 1/2
    breed = 'Bengal';
    const cardStyle:React.CSSProperties = {
        width: '13.75rem',
        // aspectRatio: aspect  || '1/1',
        height:height || '13.75rem',
        objectFit: 'cover',
        borderRadius: '24px'
    };
  return (
    <article>
      <div>
        <img
          style={cardStyle}
          src='https://images.pexels.com/photos/17893702/pexels-photo-17893702/free-photo-of-boy-riding-bile-on-country-road.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        />
              <p>{breed }</p>
      </div>
    </article>
  );
};

export default Card;
