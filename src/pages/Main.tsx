import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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
import Hex from '@/components/common/Hex';

import gameStartButton from '@/assets/img/gameStartButton.svg';

const Container = styled.div``;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    :first-child {
        margin-top: 150px;
    }
    transition: 0.05s ease-in-out;
    :hover {
        scale: 1.05;
    }
    img {
        cursor: pointer;
    }
`;

function Main() {
    const navigate = useNavigate();
    const [status, setStatus] = useRecoilState(userState);

    const onClickGamePlay = () => {
        setStatus(prev => ({ ...prev, isGameMode: true }));
        navigate('/game');
    };

    return (
        <Layout isRootPage>
            <Container>
                <Wrapper>
                    <img
                        src={gameStartButton}
                        alt="game-start-button"
                        onClick={onClickGamePlay}
                    />
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default Main;
