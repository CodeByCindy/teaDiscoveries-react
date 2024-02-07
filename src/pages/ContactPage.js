import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../features/campsites/ContactForm";

const ContactPage = () => {
    return (
    <Container>
        <SubHeader current='Contact'/>
        <Row className="row-content align-itmes-center">
            <Col sm='4'>
                <h4>Our Address</h4>
                <address>
                    1 Cup Life
                    <br/>
                    Seattle, WA 98001
                    <br/>
                    USA
                </address>
            </Col>
            <Col>
                <h4>Contact Info</h4>
                <a
                    role='button'
                    className="btn btn-link"
                    href='tel: +1510-427-7563'
                >
                    <i className="fa fa-phone" /> 1-510-427-7563
                </a>
                <br/>
                <a
                    role = 'button'
                    className="btn btn-link"
                    href='mailto:fakeemail@fakeemail.co'
                >
                    <i className="fa fa-envelope-o"/> campsite@nucamp.co
                </a>
            </Col>
        </Row>
        <Row className='row-content'>
                <Col xs='12'>
                    <h3>Send Us Your Feedback</h3>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm/>
                </Col>
        </Row>
    </Container>
    );
};

export default ContactPage;
