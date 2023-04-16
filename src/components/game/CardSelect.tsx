import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { playStatusAtom } from '@/stores/gameAtom';

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    color: white;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    width: 100%;
    font-size: 18px;
    color: white;
`;

const InputSearch = styled.input`
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    color: white;
`;

const CardWrapper = styled.div`
    display: flex;
    border: 1px solid white;
    margin: 10px 0;
    padding: 5px;
    cursor: pointer;
`;

export function CardSelect() {
    const setPlayStatus = useSetRecoilState(playStatusAtom);

    const handleSelectArtist = () => {
        setPlayStatus(prev => ({ ...prev, artist: '아티스트' }));
    };

    return (
        <Container>
            <Title>아티스트 선택하기</Title>
            <InputSearch placeholder="아티스트 검색" />
            <div>
                <span>랭킹순</span>
                <span>이름순</span>
            </div>
            <div>
                <CardWrapper onClick={handleSelectArtist}>
                    <span>아티스트 이미지</span>
                    <p>아티스트 이름</p>
                    <span>Ranking</span>
                </CardWrapper>
                <CardWrapper onClick={handleSelectArtist}>
                    <span>아티스트 이미지</span>
                    <p>아티스트 이름</p>
                    <span>Ranking</span>
                </CardWrapper>
                <CardWrapper onClick={handleSelectArtist}>
                    <span>아티스트 이미지</span>
                    <p>아티스트 이름</p>
                    <span>Ranking</span>
                </CardWrapper>
            </div>
            <div>
                <button>이전</button>
                <button>선택완료</button>
            </div>
        </Container>
    );
}
