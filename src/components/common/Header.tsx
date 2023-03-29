import styled from 'styled-components';
import logincurve from '@/assets/img/logincurve.svg';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    /* flex-direction: row-reverse; */
    width: 100%;
    height: 60px;
    padding: 0 20px;
    color: white;
    z-index: 999;
    font-family: 'esamanruLight';
`;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    padding: 20px 10px;
`;

const WrapperRight = styled(Wrapper)`
    right: 0;
    align-items: center;
    cursor: pointer;
    span {
        margin: 0 5px;
    }
`;

const WrapperLeft = styled(Wrapper)`
    left: 0;
    justify-content: space-evenly;
    flex-direction: column;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
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
    isRootPage?: boolean;
    nickname: string;
    point: number;
    profileImage?: string;
}

function Header(props: HeaderProps) {
    const { isLoggedIn, isRootPage } = props;
    const navigate = useNavigate();
    console.log(isRootPage);
    return (
        <Container>
            {/* 비로그인 & 루트 페이지 */}
            {!isLoggedIn && isRootPage && (
                <>
                    <WrapperRight onClick={() => navigate('/login')}>
                        <Button>
                            <img src={logincurve} alt="login-img" />
                            <span>login</span>
                        </Button>
                    </WrapperRight>
                </>
            )}
            {/* 비로그인 & 서브 페이지 */}
            {!isLoggedIn && !isRootPage && (
                <>
                    <WrapperLeft>
                        <Button onClick={() => navigate(-1)}>
                            <IoIosArrowBack />
                        </Button>
                    </WrapperLeft>
                </>
            )}
            {/* 로그인 & 루트 페이지 */}
            {isLoggedIn && isRootPage}
            {/* 로그인 & 서브 페이지 */}
            {isLoggedIn && !isRootPage}

            {/* <Nickname>{props.nickname}</Nickname> */}
        </Container>
    );
}

export default Header;
