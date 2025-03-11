import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function NotFoundPage() {

  const navigate = useNavigate();

  return (
    <Container fluid className='vh-100 d-flex align-items-center justify-content-center bg-light'>
      <Row className='text-center'>
        <Col>
          <h1 className='display-1 fw-bold text-success'>404</h1>
          <h2 className='mb-3'>oops! page not found</h2>
          <p>The page your'e looking fot does'nt exist pr been moved</p>
          <Button variant='success' size='lg' onClick={()=> navigate('/')}>Go back Home</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default NotFoundPage
