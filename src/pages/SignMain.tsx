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
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 50%;
    }
`;

function SignMain() {
    const navigate = useNavigate();
    return (
        <Layout hasBackgroundStars hasNotNav>
            <Container>
                <Wrapper>
                    <img src={mainLogo} alt="game-start-button" />
                </Wrapper>
                <Wrapper>
                    <LargePrimaryButton
                        onClick={() => navigate('/sign-in')}
                        buttonType="ON"
                    >
                        로그인
                    </LargePrimaryButton>
                    <LargePrimaryButton
                        onClick={() => navigate('/sign-up')}
                        buttonType="DEFAULT"
                    >
                        회원가입
                    </LargePrimaryButton>
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default SignMain;
