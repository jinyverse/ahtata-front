import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/userAtoms';
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
    transition: 0.05s ease-in-out;
    :hover {
        scale: 1.05;
    }
`;

const Nickname = styled.div`
    font-size: 10px;
    font-weight: bold;
`;

const Point = styled.div`
    font-size: 10px;
`;

interface IHeaderProps {
    isRootPage?: boolean;
    headerType?: string;
}

function Header({ isRootPage, headerType }: IHeaderProps) {
    const { isLoggedIn } = useRecoilValue(userState);
    // const isLoggedIn = true;

    const navigate = useNavigate();

    if (headerType) return null;

    return (
        <Container>
            {/* 비로그인 & 루트 페이지 */}
            {!isLoggedIn && isRootPage && (
                <>
                    <WrapperRight>
                        <Button onClick={() => navigate('/sign-in')}>
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
                            <IoIosArrowBack size={30} />
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
