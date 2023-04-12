import styled from 'styled-components';
import Nav from '@/components/common/Nav';
import Header from '@/components/common/Header';
import backgroundImage from '@/assets/img/backgroundImage.png';
import backgroundStars from '@/assets/img/backgroundStars.png';
import { ILayoutProps } from '@/types/common.type';

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 375px;
    max-height: 812px;
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
    height: calc(100% - 160px);
    top: 60px;
    padding: 20px;
`;

const BackgroundStars = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

function Layout({
    children,
    hasNotNav,
    hasBackgroundStars,
    isRootPage,
    headerType,
}: ILayoutProps) {
    return (
        <Container>
            <Wrapper>
                {hasBackgroundStars && (
                    <BackgroundStars src={backgroundStars} />
                )}
                <Header headerType={headerType} isRootPage={isRootPage} />
                <MainContents>{children}</MainContents>
                {!hasNotNav && <Nav />}
            </Wrapper>
        </Container>
    );
}

export default Layout;
