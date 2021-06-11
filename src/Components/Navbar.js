import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  // const [show, handleShow] = useState(false);

  // const transitionNavBar = () => {
  //   if(window.scrollY > 100) {
  //       handleShow(true);   
  //   }else{
  //       handleShow(false);
  //   }
  // }

  // useEffect(() => {
  //     window.addEventListener("scroll", transitionNavBar);
  //     return () => window.addEventListener("scroll",transitionNavBar);
  // },[])

  return (
    <div style={styles.nvbar} className={`nav nav__black`}>
     <Navbar collapseOnSelect expand="md" variant="light">
     <Navbar.Brand style={styles.brandname} href="#home">
      <div className="logo"> 
        <img src="./images/logo.png" alt="Free Online Logo Maker">
        </img>
      </div>  
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
    
      <Nav className="ml-auto">
       <LinkContainer to="/">
       <Nav.Link style={styles.navlinks} >Home</Nav.Link>
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
      marginBottom:"20px",
      width:"100%",
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
