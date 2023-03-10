import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { playStatusAtom } from '@/stores/gameAtom';
import Deck from '@/components/common/Deck';

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 50%;
    background-color: white;
`;

export function CardSelect() {
    const setPlayStatus = useSetRecoilState(playStatusAtom);

    const handleSelectArtist = () => {
        setPlayStatus(prev => ({ ...prev, artist: '아티스트' }));
    };

    return (
        <Container>
            <Wrapper>
                <Deck
                    width={'8em'}
                    height={'8em'}
                    backgroundImage={
                        'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg'
                    }
                    content={'대충가수이름'}
                    ranking={'1위'}
                ></Deck>
                <button onClick={handleSelectArtist}>아이유 선택하기</button>
                <button onClick={handleSelectArtist}>임영웅 선택하기</button>
                <button onClick={handleSelectArtist}>김진영 선택하기</button>
            </Wrapper>
        </Container>
    );
}
