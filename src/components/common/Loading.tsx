import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    height: 100vh;
`;

const Loading = () => {
    return (
        <Container>
            <FadeLoader color="#000000">Loading...</FadeLoader>
        </Container>
    );
};

export default Loading;
