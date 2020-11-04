import axios from 'axios';

const LandingPage = () => {
    return <h1>Index</h1>;
};

LandingPage.getInitialProps = async () => {
    const response = await axios.get('/api/users/currentuser');
    return response.data;
}

export default LandingPage;