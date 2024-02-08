
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';
import homeCardImage from '../../app/assets/images/teaPlanting.jpg';
// import './HomeCard.css'
const HomeCard = () => {
    return (
        <Card className="w-100">
            <CardImg 
                src={homeCardImage} 
                alt='home-card-image' 
                height="75%"
                  width="100%"
            />
            <CardImgOverlay>
                <CardBody style={{ color: 'white', fontSize: '60px', textAlign: 'center' , fontWeight:'bold', paddingTop: '200px'}}>
                Tea Adventure
                </CardBody>
                  <CardText style={{ color: 'white', fontSize: '40px', textAlign: 'center' , fontWeight:'bold', paddingTop: '20px'}}>
                  Explore, and Cultivate Your Perfect Cup!
                </CardText>
              </CardImgOverlay>
        </Card>
    );
};

export default HomeCard;
