import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
// import SubHeader from '../components/SubHeader';
import HomeCard from '../features/display/HomeCard';
const HomePage = () => {
    return (
        <Container>
            {/* <SubHeader current='Home' /> */}
            <HomeCard/>
            <br/>
            <br/>
            <DisplayList />
        </Container>
    );
};

export default HomePage;
