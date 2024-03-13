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
                    Nantou, Taiwan
                    <br/>
                </address>
            </Col>
            <Col>
                <h4>Contact Info</h4>
                <a
                    role='button'
                    className="btn btn-link"
                    href='tel: +1510-427-7562'
                >
                    <i className="fa fa-phone" /> 1-510-427-7562
                </a>
                <br/>
                <a
                    role = 'button'
                    className="btn btn-link"
                    href='mailto:cindy.psu.h@gmail.com'
                >
                    <i className="fa fa-envelope-o"/> swb@gmail.com
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
