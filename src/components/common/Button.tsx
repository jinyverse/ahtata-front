import styled from 'styled-components';

const Button = styled.button`
    height: 3rem;
    width: 100%;
    border-radius: 1rem;
    border: 0;
    background-color: ${({ theme }) => theme.buttonColorNavy};
`;

function ButtonLong() {
    return <Button></Button>;
}

export default ButtonLong;
