import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px; // Nav height 컨트롤
    box-sizing: border-box;
    bottom: 0;
    left: 0;
`;

const Wrapper = styled.div`
    width: 375px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    background-blend-mode: overlay;
    box-shadow: 0px -5px 30px rgba(41, 39, 130, 0.1),
        inset 0px 1px 0.5px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 50px 50px 0px 0px;
`;

function Nav() {
    return (
        <Container>
            <Wrapper></Wrapper>
        </Container>
    );
}

export default Nav;
