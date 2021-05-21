import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container fluid style={styles.footer} >
  <Row  style={styles.row}>
    <Col  >
      <h5 style={styles.subHeading}>
        Contact us 
      </h5>
    </Col>
    <Col  >
        <Row style={styles.row}>
          <h5 style={styles.subHeading}>
            Follow Us here
          </h5>
        </Row>
        <Row style={styles.row}>
          <Col>
            <a href="https://www.youtube.com/">
             <FontAwesomeIcon icon={faYoutube}  size="2x"/>
            </a>
          </Col>
          <Col>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook}  size="2x"/>
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/">
             <FontAwesomeIcon icon={faInstagram}  size="2x"/>
            </a>
          </Col>
          <Col>
            <a href="https://www.google.com/" >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </Col>
        </Row>
        <Row style={styles.row}>
          <p>
            orem ipsum dolor sit amet,
          </p> 
        </Row>
     </Col>
  </Row>
 

    </Container>
  );
}

const styles = {
    footer: {
      backgroundColor:"#393e46",
      color:"#f3f4ed",
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
        
    },
    row: {
      padding:"20px",
      textAlign:"center",
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    subHeading: {
      fontWeight: "900",
      fontFamily: 'sans-serif', 
    }
  
}
export default Footer;
