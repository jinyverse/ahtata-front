import styled from 'styled-components';
import logincurve from '@/assets/img/logincurve.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div<{ isLoggedIn: boolean }>`
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    color: white;
    z-index: 999;
    font-family: 'esamanruLight';
`;

const Wrapper = styled.div`
    display: flex;
`;

const WrapperRight = styled(Wrapper)`
    align-items: center;
    cursor: pointer;
    span {
        margin: 0 5px;
    }
`;

const WrapperLeft = styled(Wrapper)`
    justify-content: space-evenly;
    flex-direction: column;
`;

const Nickname = styled.div`
    font-size: 10px;
    font-weight: bold;
`;

const Point = styled.div`
    font-size: 10px;
`;

interface HeaderProps {
    id?: string;
    isLoggedIn: boolean;
    nickname: string;
    point: number;
    profileImage?: string;
}

function Header(props: HeaderProps) {
    const { isLoggedIn } = props;
    const navigate = useNavigate();

    return (
        <Container isLoggedIn>
            {isLoggedIn ? (
                <>
                    <WrapperRight onClick={() => navigate('/login')}>
                        <span>
                            <img src={logincurve} alt="login-img" />
                        </span>
                        <span>login</span>
                    </WrapperRight>
                    <WrapperLeft>
                        <div>1231233</div>
                        <div>2{props.point}p</div>
                    </WrapperLeft>
                </>
            ) : (
                <>
                    <WrapperRight onClick={() => navigate('/login')}>
                        <span>
                            <img src={logincurve} alt="login-img" />
                        </span>
                        <span>login</span>
                    </WrapperRight>
                </>
            )}
            {/* <Nickname>{props.nickname}</Nickname> */}
        </Container>
    );
}

export default Header;
