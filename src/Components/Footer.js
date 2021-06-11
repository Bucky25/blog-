import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin 
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container fluid style={styles.footer} >
      <Row style={styles.row}>
        <Col style={styles.subHeading}>ABOUT US</Col>
        <Col style={styles.subHeading}>HELP</Col>
        <Col style={styles.subHeading}>CONTACT</Col>
      </Row>
      <hr/>
      <Row>
      sophisticated and immersive dark-blue theme with white text. This made the whole interface looks clean, simple, and concise. As a link-focused footer, it enables the visitors to use the product or have contacted 
      more conveniently because they don’t need to scroll back up.
      </Row>
  <Row  style={styles.row}> 
    <Col  >
       
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
          <Col>
            <a href="https://www.google.com/" >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
        <Row style={styles.row}>
            @ 2021 Copyright : Pied Papers
        </Row>
     </Col>
  </Row>
 

    </Container>
  );
}
//#393e46
//#00adb5
const styles = {
    footer: {
      backgroundColor:"#393e46",
      color:"#f3f4ed",
      textAlign: "center",
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: "2.5% 20% 0% 20%"
      
    },
    row: {
      paddingTop:"20px",
      flex: 1,
      justifyContent: 'center'
    },
    subHeading: {
      fontWeight: "900",
      fontFamily: 'sans-serif', 
    },
    line: {
      width: "70%",
      color: "white"
    }
  
}
export default Footer;
