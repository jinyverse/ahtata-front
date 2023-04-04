import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import { useNavigate } from 'react-router-dom';
import { LargePrimaryButton } from '@/components/common/Button';
import mainLogo from '@/assets/img/mainLogo.svg';
import { NormalButton } from '@/components/common/Button';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20% 0 0 0;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 50%;
    margin-bottom: 50px;
`;

const Form = styled.form`
    width: 100%;
    background-color: yellowgreen;
`;

// / / / / / / / / / / / / / / / / / /
const H2 = styled.h2`
    color: white;
`;

const Input = styled.input`
    color: white;
    background-color: #0e0328;
    border: 0 none;
    border-bottom: 1px solid white;
    width: 100%;
    height: 30px;
    margin: 20px 0;
`;
const Label = styled.p`
    color: white;
`;

interface FormData {
    nickname: string;
    password: string;
}

function SignIn() {
    const navigate = useNavigate();
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const baseUrl = 'https://atata.jinytree.shop';
    const onValid = async (data: FormData) => {
        console.log('이거');
        //대충 여기서 로그인 구현
        const jsondata = {
            nickname: data.nickname,
            password: data.password,
        };

        try {
            // await axios.post(`${API.BASE_URL}/users/individuals`, jsondata);
            await axios.post(`${baseUrl}/member`, jsondata);
            alert('로그인이 완료되었습니다.');
            navigate('/main');
        } catch (err: any) {
            console.error(err.stack);
            // if (err.response.status === 400) {
            //     console.log('400 Error');
            //     alert('이미 가입한 이메일 입니다.');
            // }
        }
    };

    return (
        <Layout hasBackgroundStars hasNotNav>
            <Container>
                <Wrapper>
                    <Image src={mainLogo} alt="game-start-button" />
                </Wrapper>
                <Wrapper>
                    <Form>123</Form>
                    {/* <form onSubmit={handleSubmit(onValid)}>
                        <H2>닉네임</H2>
                        <Input
                            type="text"
                            {...register('nickname', { required: true })}
                            placeholder="닉네임을 입력해 주세요"
                            value={nickName}
                            onChange={(e: any) => {
                                setNickName(e.target.value);
                            }}
                        ></Input>
                        <Label>{errors?.password?.message}</Label>
                        <H2>비밀번호</H2>
                        <Input
                            type="text"
                            {...register('password', { required: true })}
                            placeholder="비밀번호를 입력해 주세요"
                            value={password}
                            onChange={(e: any) => {
                                setPassword(e.target.value);
                            }}
                        ></Input>
                        <Label>{errors?.password?.message}</Label>
                        <NormalButton type="submit">로그인</NormalButton>
                    </form> */}
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default SignIn;
