import styled from 'styled-components';
import { ILayoutProps } from 'types/common.type';
import Nav from 'components/common/Nav';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
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
    background-color: ${({ theme }) => theme.background.backgroundColor};
`;

function Layout({ children, hasNotNav }: ILayoutProps) {
    return (
        <Container>
            <Wrapper>
                {children}
                {!hasNotNav && <Nav />}
            </Wrapper>
        </Container>
    );
}

export default Layout;
