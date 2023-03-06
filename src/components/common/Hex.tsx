import styled from 'styled-components';

interface HexProps {
    width: string;
    height: string;
}

const HexagonContainer = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
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
    font-size: 3.5em;
    transform: rotate(150deg);
    color: ${({ theme }) => theme.font.white};
`;

function Hex() {
    return (
        <HexagonContainer>
            <Hexagon width={'8em'} height={'13em'}>
                <InnerHexagon width={'7em'} height={'12em'}>
                    <LetterDiv>ATATA</LetterDiv>
                </InnerHexagon>
                {/* InnerHexagon을 Hexagon 안에 위치시킴 */}
            </Hexagon>
        </HexagonContainer>
    );
}

export default Hex;
