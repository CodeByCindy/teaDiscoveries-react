import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link style={{textDecoration: "none", fontSize:'15px', color:'#6c758d', fontWeight:'500'}} to='/'>Home </Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link style={{textDecoration: "none", fontSize:'15px', color:'#6c758d', fontWeight:'500'}} to='/directory'>Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active style={{fontSize:'16px', color:'#6c757d'}} >{current}</BreadcrumbItem>
                </Breadcrumb>
                {/* <h2>{current}</h2> */}
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;
