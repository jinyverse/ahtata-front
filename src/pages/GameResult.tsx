import { useState } from 'react';
import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
    color: ${({ theme }) => theme.font.white};
`;

const gameResults = {
    result: 'incorrect',
    cardsCnt: 8,
    totalTime: 23.4323,
    score: 512,
    playerName: 'jinyoung',
};

function GameResult() {
    const { id } = useParams<{ id: string }>();
    const [gameResult, setGameResult] = useState();

    return (
        <Layout>
            <Container>
                <div>게임 결과</div>
                <div>score: {gameResults.score}</div>
                <div>
                    result: {gameResults.cardsCnt} {gameResults.totalTime}
                </div>
                <div>ranking: 28등</div>
                <div></div>
                <button>공유하기</button>
            </Container>
        </Layout>
    );
}

export default GameResult;
