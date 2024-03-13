import { Row, Col, Container, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import SubHeader from "../components/SubHeader";
import PartnersList from '../features/partners/PartnerList';
const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            
            <Row className='row-content'>
                <Col sm='12'>
                    <h3>About Us</h3>
                    <p>
                    At Tea Discoveries, we believe that every cup of tea tells a story, 
                    and we are dedicated to bringing you on a journey through the rich tapestry of tea cultures from around the world. 
                    Our passion for tea is deeply rooted in tradition, family heritage, and the art of cultivation.
                    <br/>
                    We aim to bridge the gap between the artisanal world of tea cultivation in Taiwan and tea enthusiasts around the globe. 
                    Our mission is to create a space where you can not only discover a diverse range of premium teas but also delve 
                    into the fascinating stories behind each variety.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card >
                        <CardHeader className='bg-success text-white'>
                        <CardTitle tag="h5">Facts at Glance </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 2, 1980</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>4</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                    I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.                                    
                                </p>
                                <footer className='blockquote-footer'>
                                Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Community Partners</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    );
};

export default AboutPage;