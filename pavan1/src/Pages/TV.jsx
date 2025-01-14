import React from 'react';
import { tvs } from '../Data/TVslice';
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'
import { Row,Col } from 'react-bootstrap'

function TvData() {
  return (
    <div>
    <Header />
    <Row>
      <Col sm={2}>
      <Sidenav />
      </Col>
     
      <Col sm={10}>
      <div>
      <h1>TV Device Data</h1>
      <div style={{ display: 'flex' , flexWrap:'wrap', gap: '5%' }}>
        {tvs.slice(0, 10).map((tv) => (
          <div key={tv.id} style={{ border: '1px solid #ddd', padding: '15px', width: '200px', textAlign: 'center' }}>
            <img
              src={tv.image}
              alt={tv.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{tv.name}</h3>
            <p>{tv.price}</p>
          </div>
        ))}
      </div>
   
    </div>

      </Col>
    </Row>
  </div>
    
  );
}

export default TvData;
