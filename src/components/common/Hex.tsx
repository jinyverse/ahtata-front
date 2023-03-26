import styled from 'styled-components';

const HexagonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Hexagon = styled.div<HexProps>`
    z-index: 98;
    margin: 1em auto;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 1em/0.6em;
    background-color: ${({ theme }) => theme.button.white};
    transition: opacity 0.5s;
    transform: rotate(90deg);
    position: relative;

    &:before,
    &:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        border-top: inherit;
        border-bottom: inherit;
        content: '';
    }

    &:before {
        -webkit-transform: rotate(60deg);
        transform: rotate(120deg);
    }

    &:after {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-120deg);
    }
`;

const InnerHexagon = styled.div<HexProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;

    margin: 1em auto;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 1em/0.4em;
    background-color: ${({ theme }) => theme.button.Main};
    transition: opacity 0.5s;
    transform: rotate(120deg);
    position: absolute;
    top: -0.5em;
    right: 0.5em;

    &:before {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        border-top: inherit;
        border-bottom: inherit;
        content: '';
    }

    &:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        border-top: inherit;
        border-bottom: inherit;
        content: '';
    }

    &:before {
        -webkit-transform: rotate(60deg);
        transform: rotate(120deg);
    }

    &:after {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-120deg);
    }
`;

const LetterDiv = styled.div`
    z-index: 100;
    font-size: 2em;
    transform: rotate(150deg);
    color: ${({ theme }) => theme.font.white};
    /* :hover {
        font-size: 3em;
        transition: all 0.3s ease-in-out;
    }
    :not(:hover) {
        transition: all 0.3s ease-in-out;
    } */
`;

interface HexProps {
    width?: string;
    height?: string;
    size?: number;
    text?: string;
    image?: string;
}

function Hex({ width, height, size = 1, text, image }: HexProps) {
    return (
        <HexagonContainer>
            <Hexagon width={`${size * 7}em`} height={`${size * 12}em`}>
                <InnerHexagon width={`${size * 6}em`} height={`${size * 11}em`}>
                    <LetterDiv>{text}</LetterDiv>
                </InnerHexagon>
                {/* InnerHexagon을 Hexagon 안에 위치시킴 */}
            </Hexagon>
        </HexagonContainer>
    );
}

export default Hex;
