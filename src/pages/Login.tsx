import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import Hex from '@/components/common/Hex';
import { NormalButton } from '@/components/common/Button';
const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 100vh;
`;

const H2 = styled.h2`
    color: white;
`;

const Input = styled.input`
    color: white;
    background-color: #0e0328;
    border: 0 none; 
    border-bottom: 1px solid white ;
    width 100%;
    height: 30px;
    margin: 20px 0;
`;

function Login() {
    return (
        <Layout hasNotNav={true}>
            <Container>
                <Hex></Hex>
                <H2>닉네임</H2>
                <Input placeholder="닉네임을 입력해 주세요"></Input>
                <H2>비밀번호</H2>
                <Input placeholder='"-"없이 숫자만 입력해 주세요'></Input>
            </Container>
            <NormalButton>로그인</NormalButton>
        </Layout>
    );
}

export default Login;
