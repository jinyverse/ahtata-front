import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import { useNavigate } from 'react-router-dom';
import { LargePrimaryButton } from '@/components/common/Button';
import mainLogo from '@/assets/img/mainLogo.svg';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 40%;
    padding-top: 50px;
`;

const Form = styled.form`
    width: 100%;
`;

const InputTitle = styled.h2`
    color: white;
`;

const Input = styled.input`
    color: white;
    background-color: transparent;
    border: 0 none;
    border-bottom: 1px solid white;
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    -webkit-appearance: none;
    :focus-visible {
        outline: none;
        border-radius: none;
    }
`;

const SignInButton = styled.span`
    margin-top: 20px;
    font-size: 14px;
    color: white;
    cursor: pointer;
`;

interface FormData {
    nickname: string;
    password: string;
}

function SignIn() {
    const navigate = useNavigate();

    function handleSignUp() {
        console.log('register');
    }

    return (
        <Layout hasBackgroundStars>
            <Container>
                <Wrapper>
                    <Image src={mainLogo} alt="game-start-button" />
                </Wrapper>
                <Wrapper>
                    <Form>
                        <InputTitle>닉네임</InputTitle>
                        <Input type="text" />
                        <InputTitle>비밀번호</InputTitle>
                        <Input type="password" />
                        <LargePrimaryButton
                            onClick={handleSignUp}
                            buttonType="ON"
                        >
                            회원가입
                        </LargePrimaryButton>
                    </Form>
                    <SignInButton onClick={() => navigate('/sign-in')}>
                        로그인
                    </SignInButton>
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default SignIn;
