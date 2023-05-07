import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardCarousel = ({ cards }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
      centerMode: true,
      centerSlidePercentage: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
      centerMode: true,
      centerSlidePercentage: 80,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
      centerMode: true,
      centerSlidePercentage: 80,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // renderiza no servidor
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {cards.map((card, index) => (
        <div key={index} className="card">{card}</div>
      ))}
    </Carousel>
  );
};

const Card = ({ title, image, subtitle }) => {
  return (
    <div className="card-content">
      <div className="card-header">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Teste = () => {
  const cards = [
    <Card title="Card 1" image="https://via.placeholder.com/300x200/FF5733/FFFFFF" subtitle="Subtitle 1" />,
    <Card title="Card 2" image="https://via.placeholder.com/300x200/C70039/FFFFFF" subtitle="Subtitle 2" />,
    <Card title="Card 3" image="https://via.placeholder.com/300x200/900C3F/FFFFFF" subtitle="Subtitle 3" />,
  ];

  return (
    <div className="container">
      <CardCarousel cards={cards} />
    </div>
  );
};

export default Teste;
