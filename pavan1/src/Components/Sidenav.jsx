import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function Sidenav() {
  return (
    <div className="sidenav">
      <Nav className="flex-column" style={{ height: '100%', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <Nav.Link as={Link} to="/dashboard" style={{ marginBottom: '10px' }}>
         dashboard 
        </Nav.Link>
        <Nav.Link as={Link} to="/mobiles" style={{ marginBottom: '10px' }}>
          Mobiles
        </Nav.Link>
        <Nav.Link as={Link} to="/laptops" style={{ marginBottom: '10px' }}>
          Laptops
        </Nav.Link>
        <Nav.Link as={Link} to="/tv" style={{ marginBottom: '10px' }}>
          TV
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{ marginBottom: '10px' }}>
          Contact
        </Nav.Link>
      </Nav>
      
    </div>
  );
}

export default Sidenav;
