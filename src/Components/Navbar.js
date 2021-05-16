import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

function Header() {
  return (
    <div style={styles.nvbar}>
     <Navbar collapseOnSelect expand="md" bg="light" variant="light">
  <Navbar.Brand style={styles.brandname} href="#home">Blogeer....</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
      <Nav.Link style={styles.navlinks} href="#features">Features</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#pricing">Pricing</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#deets">More deets</Nav.Link>
      <Nav.Link style={styles.navlinks} eventKey={2} href="#memes">Your Blogs</Nav.Link>
    <Button variant="Light">Sign UP</Button>{' '}

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
        color:"#536162"
    }

};

export default Header;
