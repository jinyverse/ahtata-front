import styled from 'styled-components';
import Layout from '@/components/common/Layout';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
    color: ${({ theme }) => theme.font.white};
`;

function GameResult() {
    return (
        <Layout>
            <Container>결과 화면</Container>
        </Layout>
    );
}

export default GameResult;
