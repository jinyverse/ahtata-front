import styled from 'styled-components';

const HexagonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Hexagon = styled.div`
    z-index: 1;
    position: relative;
    margin: 1em auto;
    width: 10em;
    height: 17.32em;
    border-radius: 1em/0.5em;
    background-color: ${({ theme }) => theme.buttonColorNavy};
    transition: opacity 0.5s;
    transform: rotate(90deg);

    &:before,
    &:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
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

const InnerHexagon = styled.div`
    z-index: 99;
    position: absolute;
    margin: 1em auto;
    width: 9em;
    height: 15.32em;
    border-radius: 1em/0.5em;
    background-color: ${({ theme }) => theme.buttonColorWhite};
    transition: opacity 0.5s;
    transform: rotate(90deg);

    &:before,
    &:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
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

function Hex() {
    return (
        <HexagonContainer>
            <Hexagon />
            <InnerHexagon />
        </HexagonContainer>
    );
}

export default Hex;
