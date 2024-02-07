import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import teaLogo from '../app/assets/images/teaLogo.png';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col sm='2'  className='text-center'>
                    <h4>
                    <img decoding="async" src={teaLogo} alt='tea logo' width="50%" height="50%"/>
                    <br/>
                    <strong><a>Tea Discoveries</a></strong>
                    </h4>
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <strong><h4>QUUICK LINKS</h4></strong>
                        <ul className='list-unstyled'>
                       
                            <li> 
                                <Link to='/'><span>Home</span></Link>
                            </li>
                            
                            <li>
                                <Link to='/directory'><span>Directory</span></Link>
                            </li>
                            <li>
                                <Link to='/about'><span>About</span></Link>
                            </li>
                            <li>
                                <Link to='/contact'><span>Contact</span></Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <strong><h4>Social</h4></strong>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='2' className='text-center'>
                        <h4>Contact Info</h4>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+15104277563'
                        >
                        <span>1-510-427-7563</span> 
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:cindy.psu.h@gmail.com'
                        >
                            <span>cindy.psu.h@gmail.com</span> 
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
