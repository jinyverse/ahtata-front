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
    margin-top: 20px;
`;

const Input = styled.input`
    color: white;
    background-color: transparent;
    border: 0 none;
    border-bottom: 1px solid white;
    width: 100%;
    height: 30px;
    -webkit-appearance: none;
    :focus-visible {
        outline: none;
        border-radius: none;
    }
`;

const InputErrorMsg = styled.p`
    font-size: 14px;
    color: #d82e34;
    margin-top: 15px;
`;

const SignUpButton = styled.span`
    margin-top: 20px;
    font-size: 14px;
    color: white;
    cursor: pointer;
`;

interface SignFormData {
    nickname: string;
    password: string;
}

function SignIn() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<SignFormData>();

    const onValid = async (data: SignFormData) => {
        try {
            const res = await axios.post('/*');
            console.log(res);
        } catch (e: any) {
            console.log(e);
        }
    };

    return (
        <Layout hasBackgroundStars>
            <Container>
                <Wrapper>
                    <Image src={mainLogo} alt="game-start-button" />
                </Wrapper>
                <Wrapper>
                    <Form onSubmit={handleSubmit(onValid)}>
                        <InputTitle>닉네임</InputTitle>
                        <Input
                            type="text"
                            {...register('nickname', {
                                required: '닉네임을 입력해주세요.',
                                minLength: {
                                    value: 2,
                                    message: '닉네임은 최소 2글자 이상입니다.',
                                },
                                maxLength: {
                                    value: 20,
                                    message:
                                        '닉네임은 최대 20글자까지 가능합니다.',
                                },
                            })}
                        />
                        <InputErrorMsg className="text-danger">
                            {errors?.nickname?.message}
                        </InputErrorMsg>
                        <InputTitle>비밀번호</InputTitle>
                        <Input
                            type="password"
                            {...register('password', {
                                required: '비밀번호를 입력해주세요.',
                                minLength: {
                                    value: 1,
                                    message:
                                        '비밀번호는 최소 1자리 이상 입력해주세요',
                                },
                                maxLength: {
                                    value: 200,
                                    message: '비밀번호를 다시 확인해주세요.',
                                },
                            })}
                        />
                        <InputErrorMsg className="text-danger">
                            {errors?.password?.message}
                        </InputErrorMsg>
                        <LargePrimaryButton type="submit" buttonType="ON">
                            로그인
                        </LargePrimaryButton>
                    </Form>
                    <SignUpButton onClick={() => navigate('/sign-up')}>
                        회원가입
                    </SignUpButton>
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default SignIn;
