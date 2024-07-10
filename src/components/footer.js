import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2020 Eduardo Monteiro. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a href="https://github.com/monteiroedu10"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/eduardo-monteiro-2724101bb/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )
      }
    </Container>
  )
}

export default AppFooter;
