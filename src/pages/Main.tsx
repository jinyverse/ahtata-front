import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userState } from '@/stores/userAtoms';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Layout from '@/components/common/Layout';
// import { NormalButton } from '@/components/common/Button';
// import Loading from '@/components/common/Loading';
// import Timer from '@/components/common/Timer';
// import Hex from '@/components/common/Hex';
// import Deck from '@/components/common/Deck';

const Container = styled.div``;

const fakeUserInfo = {
    id: '1111',
    name: 'yoon',
    point: '1000',
    profileImage: 'url',
};

function Main() {
    const [status, setStatus] = useRecoilState(userState);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(10);

    const onClickGamePlay = () => {
        setStatus(prev => ({ ...prev, isGameMode: true }));
    };

    return (
        <Layout hasBackgroundStars>
            <Container>
                {/* <Link to="/game" onClick={onClickGamePlay}>
                    <NormalButton>
                        테스트용 게임 플레이 페이지 이동
                    </NormalButton>
                </Link> */}
                {/* <Timer timeLeft={timeLeft}></Timer> */}
                {/* <Deck
                    width={'100%'}
                    height={'100%'}
                    backgroundImage={
                        'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg'
                    }
                    content={'대충가수이름'}
                    ranking={'1위'}
                ></Deck> */}
                {/* <Hex text="TESTING" /> */}
            </Container>
        </Layout>
    );
}

export default Main;
