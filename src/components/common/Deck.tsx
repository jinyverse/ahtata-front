import styled from 'styled-components';

interface DeckProps {
    width: string;
    height: string;
    backgroundImage: string;
    content: string;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeckInfo = styled.div`
    width: ${(props: DeckProps) => props.width};
    height: ${(props: DeckProps) => props.height};
    border: 0.1em solid white;
    border-radius: 0.5em;
    background-color: white;
    margin: 0.5em;
    position: relative;
    cursor: pointer;
    text-align: center;
    line-height: ${(props: DeckProps) => props.height};
    background-image: ${(props: DeckProps) => `url(${props.backgroundImage})`};
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.5em;
    }
`;

function Deck({ width, height, backgroundImage, content }: DeckProps) {
    return (
        <Container>
            <DeckInfo
                width={width}
                height={height}
                backgroundImage={backgroundImage}
                content={content}
            >
                {content}
            </DeckInfo>
        </Container>
    );
}

export default Deck;
