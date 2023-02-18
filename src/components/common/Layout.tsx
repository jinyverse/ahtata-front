import styled from 'styled-components';
import { ILayoutProps } from '#types/common.type';
import Nav from './Nav';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgColor};
`;

const Wrapper = styled.div`
    position: relative;
    max-width: 375px;
    height: 100vh;
    margin: 0px auto;
    padding: 0;
    vertical-align: baseline;
    background-color: whitesmoke;
`;

function Layout({ children }: ILayoutProps) {
    return (
        <Container>
            <Wrapper>
                {children}
                <Nav />
            </Wrapper>
        </Container>
    );
}

export default Layout;
