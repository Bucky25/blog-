import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

function Header() {
  return (
    <div style={styles.nvbar}>
     <Navbar collapseOnSelect expand="md" variant="light">
  <Navbar.Brand style={styles.brandname} href="#home">Blogeer....</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
      <Nav.Link style={styles.navlinks} href="#features">Features</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#pricing">Pricing</Nav.Link>
      <Nav.Link style={styles.navlinks} href="#deets">More Details </Nav.Link>
      <Nav.Link style={styles.navlinks} eventKey={2} href="#memes">Your Blogs</Nav.Link>
      <Nav.Link style={styles.navlinks} eventKey={2} href="login">Sign Up</Nav.Link>
    {/* <Button variant="Light">Sign Up</Button>{' '} */}

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
