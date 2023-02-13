import logo from './logo.svg';
import './App.css';
import { Card, Container, Col, Button } from 'react-bootstrap';
import egg from '../src/assets/img/eggs.png'

function App() {
  return (
    <div className="App">
      <Container className='p-4'>  
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={egg} />  
  <Card.Body>  
    <Card.Title>Card Title</Card.Title>  
    <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary">Read More</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>
  );
}

export default App;
