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
    <LinkContainer to="/login">  
      <Nav.Link style={styles.navlinks} >Sign Up</Nav.Link>
    </LinkContainer>

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
