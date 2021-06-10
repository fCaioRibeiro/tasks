import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Header = ({title}) =>  {
    const history = useHistory();

    const handleHeaderHomeClick = () => {
        history.push(`/`)
    }

    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-3'>
        <Container>
        <Navbar.Brand className='btn p-0' onClick={handleHeaderHomeClick}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex">
            <Nav className='ms-auto'>
                <Nav.Link eventKey={2} href="#memes">
                    Limpar
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>  
    )
}

export default Header;