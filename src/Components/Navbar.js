import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <div style={styles.nvbar}>
     <Navbar collapseOnSelect expand="md" variant="light">
  <Navbar.Brand style={styles.brandname} href="#home">Blogeer....</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
<<<<<<< HEAD
      <Nav.Link style={styles.navlinks} href="#features">Features</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#pricing">Pricing</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#deets">More Details </Nav.Link>
      <Nav.Link style={styles.navlinks} eventKey={2} href="#memes">Your Blogs</Nav.Link>
      <Nav.Link style={styles.navlinks} eventKey={2} href="login">Sign Up</Nav.Link>
    {/* <Button variant="Light">Sign Up</Button>{' '} */}
=======
    <LinkContainer to="/">
      <Nav.Link style={styles.navlinks} >Features</Nav.Link>
    </LinkContainer> 
    <LinkContainer to="/about">
      <Nav.Link style={styles.navlinks} >Pricing</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/contact">
      <Nav.Link style={styles.navlinks}>More Details </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/annual">
      <Nav.Link style={styles.navlinks} >Your Blogs</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/sign-up">  
      <Nav.Link style={styles.navlinks} >Sign Up</Nav.Link>
    </LinkContainer>
>>>>>>> e774b99bb66da7054286c7dfb47ca2033c97e9f0

    </Nav>
  </Navbar.Collapse>
</Navbar>
 

    </div>
  );
}

const styles = {
    nvbar:{
     
        paddingTop:"50px",
        width:"85%",
        align:"centre",
        margin:"auto",
        fontFamily: "Arial"
    },
    navlinks: {
        padding:"8px 20px 8px 20px"
    },
    brandname: {
        fontSize:"26px",
        color:"#536162",
        fontWeight:"900"
    }

};

export default Header;
