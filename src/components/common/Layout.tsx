import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Nav from '@/components/common/Nav';
import Header from '@/components/common/Header';
import { userState } from '@/stores/userAtoms';
import backgroundImage from '@/assets/img/backgroundImage.png';
import backgroundStars from '@/assets/img/backgroundStars.png';
import { ILayoutProps } from '@/types/common.type';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    height: 100vh;
    margin: 0px auto;
    padding: 0;
    vertical-align: baseline;
    overflow: hidden;
    background: linear-gradient(180deg, #000000 22.92%, #3500a6 100%);
`;

const MainContents = styled.div`
    position: relative;
    width: 90%;
    top: 60px;
    padding: 20px;
    height: 300vh;
`;

const BackgroundStars = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

function Layout({ children, hasNotNav, hasBackgroundStars }: ILayoutProps) {
    const { isLoggedIn } = useRecoilValue(userState);
    return (
        <Container>
            <Wrapper>
                {hasBackgroundStars && (
                    <BackgroundStars src={backgroundStars} />
                )}
                <Header
                    isLoggedIn={isLoggedIn}
                    nickname="닉네임"
                    point={1}
                ></Header>
                <MainContents>{children}</MainContents>
                {!hasNotNav && <Nav isLoggedIn />}
            </Wrapper>
        </Container>
    );
}

export default Layout;
