import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/stores/userAtoms';
import Layout from '@/components/common/Layout';
import { NormalButton } from '@/components/common/Button';
import Loading from '@/components/common/Loading';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
`;

function Main() {
    const [status, setStatus] = useRecoilState(userState);
    const [loading, setLoading] = useState(true);
    const onClickGamePlay = () => {
        setStatus(prev => ({ ...prev, isGameMode: true }));
    };

    // useEffect(() => {
    //     // 데이터를 불러오는 등의 비동기 작업이 완료된 후에 setLoading(false)를 호출합니다.
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);
    // if (loading) {
    //     return <Loading />;
    // }

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
