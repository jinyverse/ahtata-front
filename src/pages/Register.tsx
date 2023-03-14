import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
const Label = styled.p`
    color: white;
`;

function Register() {
    interface FormData {
        nickname: string;
        password: string;
    }
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
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
        } catch (err: any) {
            console.error(err);
            // if (err.response.status === 400) {
            //     console.log('400 Error');
            //     alert('이미 가입한 닉네임 입니다.');
            // }
        }
    };
    return (
        <Layout hasNotNav={true}>
            <Container>
                <form onSubmit={handleSubmit(onValid)}>
                    <Hex></Hex>
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
                    <NormalButton type="submit">회원가입</NormalButton>
                </form>
            </Container>
        </Layout>
    );
}

export default Register;
