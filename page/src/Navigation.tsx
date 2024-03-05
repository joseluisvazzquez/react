import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import img from './icon.png';

function Navigation(){
    return(
        <Navbar bg="light" variant="light" className='shadow-lg mx-5 my-3  rounded bg-opacity-10 '>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" href="#home">
            <img 
              src={img} 
              alt="BRAND"
              width="40"
              height="40"
              className='ms-0'
            />
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Link to="/"  className='me-3 lead text-decoration-none'>Home</Link>
            <Link to="/"  className='me-3 lead text-decoration-none'>Home</Link>
            <Link to="/"  className='me-3 lead text-decoration-none'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
 export default Navigation;