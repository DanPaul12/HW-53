import { Container, Image, Col, Row, Button } from "react-bootstrap"


const HomePage = () => {

    return(
        <Container fluid className="bg-primary">
            <Col>
                <Row>
                    <h1>Home Page</h1>
                </Row>
                <Row>
                    <Image src="src/assets/jordan.jpg" id="jordan"  alt="jordan" roundedCircle />
                </Row>
            </Col>
            <Button variant="primary" className="mt-3"  >Submit</Button>
        </Container>
    )
}

export default HomePage