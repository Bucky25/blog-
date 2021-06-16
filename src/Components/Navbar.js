import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';
import {useHistory} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const history = useHistory();

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
    <div style={styles.nvbar} >
     <Navbar collapseOnSelect expand="md" variant="light" bg="light" fixed="top" >
     <Navbar.Brand style={styles.brandname} href="/">
      <div className="logo" onClick={()=>(history.push('/'))}> 
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
        <Nav.Link style={styles.navlinks} >About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog">  
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
      marginBottom:"2rem",
      width:"100%",
      align:"centre",
      margin:"auto",
      fontFamily: "Arial"
    },
    navlinks: {
      padding:" 8px",

    },
    brandname: {
      fontSize:"26px",
      color:"#536162",
      fontWeight:"900"
    }

};

export default Header;
