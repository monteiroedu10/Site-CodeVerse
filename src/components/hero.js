import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.png'),
    title: 'Curso de Informática Básica',
    description: 'Voltado especificamente para mulheres, em parceria com a SEMU - Secretaria de Estado das Mulheres do Pará.',
    link: 'https://www.linkedin.com/posts/eduardo-monteiro-2724101bb_education-digitalinclusion-technology-activity-7214295176624668672-KJT3?utm_source=share&utm_medium=member_desktop'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.png'),
    title: 'Formação em Arduino e Introdução à Robótica',
    description: 'Realizada pelo PET Elétrica UFPA, em parceria com a SEMEC - Secretaria Municipal de Educação de Belém. ',
    link: 'https://www.linkedin.com/posts/eduardo-monteiro-2724101bb_education-digitalinclusion-technology-activity-7214295176624668672-KJT3?utm_source=share&utm_medium=member_desktop'
  },
  // {
  //   id: 3,
  //   image: require('../assets/images/img-hero3.png'),
  //   title: 'Enjoy the Difference',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
  //   link: 'https://www.twitter.com'
  // }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Veja mais<i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;