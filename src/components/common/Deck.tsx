import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { artistClickDataAtom } from '@/stores/artistAtom';
import { IArtistData, IArtistClickData } from '@/types/artist.type';
import { useEffect, useState, useRef } from 'react';

interface DeckProps {
    width: string;
    height: string;
    backgroundImage: string;
    content: string;
    ranking: string;
    onClick?: () => void;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    margin: 1em 0;
`;

const DeckImg = styled.div`
    background-color: #ffffff;
    width: 35%;
    height: 100%;
    border-radius: 3em;
    background-image: ${(props: DeckProps) => `url(${props.backgroundImage})`};
`;
const DeckInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    border-radius: 3em;
`;
const Name = styled.div`
    font-size: large;
`;
const Rank = styled.div`
    font-size: large;
`;
const ContainerDeckInfo = styled.div`
    justify-content: space-around;
    display: flex;
    width: ${(props: DeckProps) => props.width};
    height: ${(props: DeckProps) => props.height};
    border: 0.1em solid white;
    border-radius: 0.5em;
    background-color: white;
    position: relative;
    cursor: pointer;
    text-align: center;
    background-size: cover;
    font-weight: bold;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    &:hover::before {
        background-color: #0000007b;
        width: ${(props: DeckProps) => props.width};
        height: ${(props: DeckProps) => props.height};
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        border: 0.1em solid black;
        color: white;
        content: '선택';
        position: absolute;
        line-height: ${(props: DeckProps) => props.height};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.5em;
    }
`;

function Deck({ width, height, backgroundImage, content, ranking }: DeckProps) {
    const [artistClick, setArtistsClick] = useRecoilState(artistClickDataAtom);
    // const [click, setClick] = useState<boolean>(false);
    const artistClickData: IArtistClickData = {
        content: content,
    };

    // useEffect(() => {
    //     // console.log(artistClick);
    //     // setArtistsClick(artistClick);
    // }, [artistClickData]);
    return (
        <Container onClick={() => setArtistsClick(artistClickData)}>
            <ContainerDeckInfo
                width={width}
                height={height}
                content={content}
                backgroundImage={backgroundImage}
                ranking={ranking}
            >
                <DeckImg
                    width={width}
                    height={height}
                    content={content}
                    backgroundImage={backgroundImage}
                    ranking={ranking}
                ></DeckImg>
                <DeckInfo>
                    <Name>{content}</Name>
                    <Rank>{ranking}</Rank>
                </DeckInfo>
            </ContainerDeckInfo>
        </Container>
    );
}

export default Deck;
