import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Liderança e Trabalho em Equipe',
    description: 'Experiência comprovada em liderança de equipes e condução de reuniões, planejamento estratégico e gestão de mudanças.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Tecnologias e Ferramentas',
    description: 'Domínio de linguagens de programação como Python, Java, JavaScript, C, C++, e Rust. Experiência com Docker, Kubernetes, Git, Ansible, e sistemas de gerenciamento de servidores Linux.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Engenharia de Confiabilidade',
    description: 'Implementação de KPIs, análise de dados, e estratégias de manutenção centrada em confiabilidade (RCM).'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Desenvolvimento de Software',
    description: 'Desenvolvimento de aplicações web utilizando React, Bootstrap, Django, e outras tecnologias modernas.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Análise de Dados e Automação',
    description: 'Experiência com PowerBI, Machine Learning, Microsoft Azure, e outras ferramentas de análise e automação.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Resolução de Problemas e Flexibilidade',
    description: 'Habilidade analítica e proatividade na resolução de problemas complexos, com adaptabilidade a diferentes cenários e desafios.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Habilidades</h2>
          <div className="subtitle">Principais habilidades</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;