import styled from 'styled-components';
import Layout from 'components/common/Layout';
import { NormalButton } from 'components/common/Button';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
`;

function Main() {
    return (
        <Layout>
            <Container>
                <NormalButton>응원 메세지 보내기</NormalButton>
            </Container>
        </Layout>
    );
}

export default Main;
