import Card from "./Card";

const MostSearchedCard = ({src,description,breed}) => {
    return (
      <article className='flex gap-2 flow-4'>
        <Card width='11rem' height='11rem' src = {src}/>

        <div style={{ padding: '.75rem 0' }}>
          <p>
            {1}.<span style={{ marginLeft: '.50rem' }}>{breed}</span>
          </p>
          <p style={{ marginTop: '.7rem' }}>
            {description}
          </p>
        </div>
      </article>
    );
}


export default MostSearchedCard
