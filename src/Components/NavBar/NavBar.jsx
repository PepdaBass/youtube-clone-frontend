import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Navbar, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">YouTube-ish</Navbar.Brand>
        {/* <Nav.Link to="loginform">Login</Nav.Link> */}

        <SearchBar
          search={props.search}
          setSearch={props.setSearch}
          getVideo={props.getVideo}
        />
        <Button to="loginform" variant="outline-success">
          Login
        </Button>
      </Container>
    </Navbar>

    // <Nav>
    //   <ul>
    //     <li>
    //       <SearchBar
    //         search={props.search}
    //         setSearch={props.setSearch}
    //         getVideo={props.getVideo}
    //       />
    //     </li>
    //     <Link to="loginform">
    //       <li>Login</li>
    //     </Link>
    //   </ul>
    // </Nav>
  );
};

export default NavBar;
