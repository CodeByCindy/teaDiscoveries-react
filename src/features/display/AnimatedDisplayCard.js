import { useState, useEffect } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (      
        <animated.div style={animatedStyle}>
            <Card style={{ height: '100%' }}>
                <CardImg src={image} alt={name} top width="50%"/>
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardText tag="h6">{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;