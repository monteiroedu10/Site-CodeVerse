import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.png';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About</h2>
          <div className="subtitle">Veja um pouco sobre mim</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Sou graduando em Engenharia Elétrica pela Universidade Federal do Pará, com previsão de conclusão em dezembro de 2024. Tenho uma sólida experiência em desenvolvimento de software e engenharia de manutenção, combinando habilidades técnicas avançadas com um forte senso de liderança e planejamento estratégico. </p>
            <p>Minha paixão por tecnologia e inovação me impulsiona a buscar constantemente novas soluções para problemas complexos:</p>
            
            <div className='progress-block'>
              <h4>Engenharia Elétrica | Engenharia de Manutenção | Engenharia de Confiabilidade | Gestão de ativos | PCM | Gestão de Projetos </h4>
            </div>
            <div className='progress-block'>
              <h4>Python | SAP | Machine learning | Deep learning</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;