import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://cursos.dankicode.com/api/certificados/a66e049a-d0a0-4272-8f53-9159514929df',
    image: require('../assets/images/img2.png'),
    subtitle: 'CURSO DE LINUX COMPLETO'
  },
  {
    id: 2,
    link: 'https://cursos.dankicode.com/api/certificados/367a3e58-9d4d-465e-9fc8-be1d7c4eabcf',
    image: require('../assets/images/img3.png'),
    subtitle: 'CURSO COMPLETO DE MACHINE LEARNING'
  },
  {
    id: 3,
    image: require('../assets/images/img4.png'),
    subtitle: 'CONFIABILIDADE EM FOCO - INDICADORES '
  },
  {
    id: 4,
    image: require('../assets/images/img5.png'),
    subtitle: 'ESTRATÉGIAS DE CONFIABILIDADE'
  },
  {
    id: 5,
    link: 'https://edu.revistamanutencao.com.br/api/certificate/fundamentos-essenciais-analise-de-vibracao?name=Eduardo+Monteiro&code=bW9udGVpcm9lZHUxMEBnbWFpbC5jb20=&host=%27rm%27&date=2023-08-15T00:20:00.612Z',
    image: require('../assets/images/img6.png'),
    subtitle: 'ANÁLISE DE VIBRAÇÃO'
  },
  {
    id: 6,
    image: require('../assets/images/img7.png'),
    subtitle: 'NR 10 - SEGURANÇA EM INSTALAÇÕES'
  },
]

let active = 2;
let items = [];
for (let number = 1; number <= 1; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Cursos e Certificações</h2>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;



// {
//   id: 7,
//   link: 'https://www.google.com',
//   image: require('../assets/images/img8.jpg'),
//   title: 'Lonely Path',
//   subtitle: 'Branding'
// },
// {
//   id: 8,
//   link: 'https://www.google.com',
//   image: require('../assets/images/img9.jpg'),
//   title: 'Appreciation',
//   subtitle: 'Photography'
// },
// {
//   id: 9,
//   link: 'https://www.google.com',
//   image: require('../assets/images/img2.jpg'),
//   title: 'Happy Days',
//   subtitle: 'Web Design'
// }