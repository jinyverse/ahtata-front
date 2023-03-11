import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    color: white;
    height: 50px;
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
    nickname: string;
    point: string;
    profileImage?: string;
}
function Header({ nickname, point }: HeaderProps) {
    return (
        <Container>
            <Nickname>{nickname}닉네임</Nickname>
            <Point>{point}p</Point>
        </Container>
    );
}

export default Header;
