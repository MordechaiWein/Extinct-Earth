import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel style={{ width: '60rem', margin: 'auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.euronews.com/articles/stories/06/07/67/98/1000x563_cmsv2_03bc89fa-4248-5ad8-8140-3c07bcb9d73c-6076798.jpg"
          alt=" Woolly Mammoth"
          style={{ height: '28.5rem', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Woolly Mammoth</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.newscientist.com/wp-content/uploads/2022/07/25151808/SEI_116388714.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
          alt="Tyrannosaurus rex "
          style={{ height: '28.5rem', maxWidth: '100%' }}
        />

        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Tyrannosaurus rex</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.telegraph.co.uk/multimedia/archive/01117/sabre-tooth-tiger-_1117360c.jpg"
          alt="Saber-toothed Tiger"
          style={{ height: '28.5rem', maxWidth: '100%' }}
        />

        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Saber-toothed Tiger</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;