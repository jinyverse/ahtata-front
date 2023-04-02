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
import Hex from '@/components/common/Hex';
// import Deck from '@/components/common/Deck';

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

const ImgWrapper = styled.div``;

function Main() {
    return (
        <Layout isRootPage>
            <Container>
                <Wrapper>
                    <img src={gameStartButton} alt="game-start-button" />
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default Main;
