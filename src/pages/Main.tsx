import styled from 'styled-components';
import Layout from 'components/common/Layout';
import { NormalButton } from 'components/common/Button';
import { Link } from 'react-router-dom';
import { userState } from 'stores/atoms';
import { useRecoilState } from 'recoil';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
`;

function Main() {
    const [status, setStatus] = useRecoilState(userState);
    const onClickGamePlay = () => {
        setStatus(prev => {
            return { ...prev, isPlayMode: true };
        });
    };
    return (
        <Layout>
            <Container>
                <Link to="/game" onClick={onClickGamePlay}>
                    <NormalButton>
                        테스트용 게임 플레이 페이지 이동
                    </NormalButton>
                </Link>
            </Container>
        </Layout>
    );
}

export default Main;
