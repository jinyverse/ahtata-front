import styled from 'styled-components';
import { IChildrenProps } from '#types/common.type';

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

function Layout({ children }: IChildrenProps) {
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
        </Container>
    );
}

export default Layout;
