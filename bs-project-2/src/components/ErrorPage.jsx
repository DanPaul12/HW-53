import { Container, Row, Col, Image } from "react-bootstrap"


const ErrorPage = () => {
    return(
        <Container>
            <Col>
                <Row>
                    <h1>Error Page</h1>
                </Row>
                <Row>
                    <Image src="src/assets/errorimg3.png" id="error" alt="error"></Image>
                </Row>
            </Col>
        </Container>
    )
}

export default ErrorPage