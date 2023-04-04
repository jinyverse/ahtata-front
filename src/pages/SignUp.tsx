import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import { useNavigate } from 'react-router-dom';
import { LargePrimaryButton } from '@/components/common/Button';
import mainLogo from '@/assets/img/mainLogo.svg';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20% 0 0 0;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 50%;
    margin-bottom: 50px;
`;

function SignUp() {
    const navigate = useNavigate();
    return (
        <Layout hasBackgroundStars hasNotNav>
            <Container>
                <Wrapper>
                    <Image src={mainLogo} alt="game-start-button" />
                </Wrapper>
                <Wrapper>
                    <input type="text" />
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default SignUp;
