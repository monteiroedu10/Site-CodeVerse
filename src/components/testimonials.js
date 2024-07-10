import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Norsk Hydro',
    description: 'Implementação de estratégias de Manutenção Centrada em Confiabilidade (RCM). Desenvolvimento e automação de KPIs para Manutenção e Performance. Implantação de sistemas de gestão, como ISO 55001. Análise de dados para otimização de processos de manutenção.',
    designation: 'Estagiário de Engenharia'
  },
  {
    id: 2,
    name: 'Brainstorm Engenharia Júnior',
    description: 'Condução de reuniões, planejamento estratégico e gestão de mudanças. Desenvolvimento de sistemas backend e automação de processos.',
    designation: 'Vice-Presidente e Desenvolvedor Backend'
  },
  {
    id: 3,
    name: 'Ceamazaon | LCADE | LABMOTRIZ',
    description: 'Pesquisa de sistemas embarcados e simulação computacional por meio de método de elementos finitos. Desenvolvimento de projetos de inteligência artificial com foco em redes neurais recorrentes e técnicas de aprendizado não supervisionado.',
    designation: 'Scientific Researcher'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Experiência Profissional</h2>
          <div className="subtitle">As experiencias centrais em minha trajetória</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;