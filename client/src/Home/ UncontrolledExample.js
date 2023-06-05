import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Carousel style={{ width: '60rem', margin: 'auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.euronews.com/articles/stories/06/07/67/98/1000x563_cmsv2_03bc89fa-4248-5ad8-8140-3c07bcb9d73c-6076798.jpg"
          alt=" Woolly Mammoth"
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
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
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
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
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
        />

        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Saber-toothed Tiger</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a-z-animals.com/media/2022/07/iStock-511649044.jpg"
          alt="Gastornis"
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
        />
        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Gastornis</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a-z-animals.com/media/2022/07/Shutterstock_1712872735.jpg"
          alt="Quagga"
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
        />
        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Quagga</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5571cdd6e4b0dd00b1d83c08/1630073549472-0NHVC1ZMA7RRYORXWTYC/Poison+Arrow+Frog+%28Dendrobatidae%29.jpeg?format=1000w"
          alt="Splendid poison frog"
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
        />
        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Splendid poison frog</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a-z-animals.com/media/2022/06/Archaeopteryx-header.jpg"
          alt="Archaeopteryx"
          style={{ 
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? '15rem' : '28.5rem',
          }}
        />
        <Carousel.Caption>
          <h3 style={{fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '2rem'}}>Archaeopteryx</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;