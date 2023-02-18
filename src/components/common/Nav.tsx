import styled from 'styled-components';
import { FaHome, FaSearch, FaAward, FaUserAlt } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';

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
const IconWrapper = styled.div`
    margin: 5% 5% 20% 5%;
    width: 90%;
    height: 40%;
    /* background-color: #ffffff9b; */
    display: flex;
    justify-content: space-around;
`;

const Icon = styled.div`
    /* background-color: white; */
    width: 35px;
    height: 35px;
`;
const Circle = styled.div`
    position: relative;
    top: -60px;
    width: 80px;
    height: 80px;
    background: #ffffff9b;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Nav() {
    return (
        <Container>
            <Wrapper>
                <IconWrapper>
                    <Icon>
                        <FaHome size="100%" />
                    </Icon>
                    <Icon>
                        <FaAward size="100%" />
                    </Icon>
                    <Circle>
                        <GoPlus size="50%" />
                    </Circle>
                    <Icon>
                        <FaSearch size="100%" />
                    </Icon>
                    <Icon>
                        <FaUserAlt size="100%" />
                    </Icon>
                </IconWrapper>
            </Wrapper>
        </Container>
    );
}

export default Nav;
