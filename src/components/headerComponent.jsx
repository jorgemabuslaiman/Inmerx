import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo3d from '../assets/logo3d.svg';

export const HeaderComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container className="d-flex justify-content-between align-items-center w-100">
        <Nav className="me-auto nav-side">
          <Nav.Link href="#home">Inicio</Nav.Link>
        </Nav>
        <div className="navbar-logo mx-auto">
          <img src={logo3d} alt="Logo Inmersión 3D" className="logo-img" />
        </div>
        <Nav className="ms-auto nav-side">
          <Nav.Link href="#about">Sobre el proyecto</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
