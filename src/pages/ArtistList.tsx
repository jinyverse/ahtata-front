import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import Layout from '@/components/common/Layout';
import Deck from '@/components/common/Deck';
import ButtonMini from '@/components/common/ButtonMini';
import SearchInput from '@/components/common/SearchInput';
import ToggleButtonMini from '@/components/common/ToggleButtonMini';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { artistDataAtom, artistClickDataAtom } from '@/stores/artistAtom';

const ArtistData = [
    {
        name: '뉴진스',
        ranking: '1',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: '르세라핌',
        ranking: '2',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: '에스파',
        ranking: '4',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: 'STACY',
        ranking: '33',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: 'NCT',
        ranking: '10',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: 'BTS',
        ranking: '15',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: 'EXO',
        ranking: '12',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
    {
        name: '트와이스',
        ranking: '5',
        backgroundImage:
            'https://image.ajunews.com/content/image/2022/09/12/20220912100327657380.jpg',
    },
];

const Container = styled.div`
    width: 96%;
    padding: 20px;
    height: 300vh;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Midium20 = styled.div`
    font-size: 20px;
    color: white;
`;
const ListInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ScrollStyle = styled.div`
    height: 600px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
// 아티스트 리스트 페이지
function ArtistList() {
    const [search, setSearch] = useState<string>('');
    const [artists, setArtists] = useRecoilState(artistDataAtom);
    const [artistClick, setArtistsClick] = useRecoilState(artistClickDataAtom);

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(artistClick);
        // setArtistsClick(artistClick);
        setArtists(ArtistData);
    }, []);

    //onChange 의 매개변수 e가 search의 변수로 설정되어있음;;
    //고민하다 SearchInputProps의 인터페이스에 onChange를 추가했더니 잘 실행된다.

    // const slicedData = artists.slice(indexOfFirstItem, indexOfLastItem);
    const slicedData = artists ?? [];
    //null을 반환하면 빈 배열 []을 할당

    //데이터 보여주기

    const Data = slicedData.map(artist => (
        <Deck
            key={artist.ranking}
            width="100%"
            height="100px"
            backgroundImage={artist.backgroundImage}
            content={artist.name}
            ranking={artist.ranking}
        />
    ));
    useEffect(() => {
        // artists에 ArtistData를 저장
        setArtistsClick(artistClick);
    }, [artists]);

    function ToggleClick(e: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = e.target.value;
        setArtists(
            artists?.filter(artist =>
                artist.name.toLowerCase().includes(searchValue.toLowerCase()),
            ) ?? [],
        );
    }
    return (
        <RecoilRoot>
            <Layout hasNotNav={true}>
                <Container>
                    <ListInfo>
                        <Midium20>아티스트페이지</Midium20>
                        <ToggleButtonMini></ToggleButtonMini>
                    </ListInfo>
                    <SearchInput
                        content={'검색하기'}
                        // onChange={handleSearchChange}
                        value={search}
                    ></SearchInput>
                    <ScrollStyle>{Data}</ScrollStyle>
                    <ButtonContainer>
                        <ButtonMini
                            color="#6D5D5D"
                            content={'이전'}
                        ></ButtonMini>
                        <ButtonMini
                            color="#484848"
                            content={'선택'}
                            // onClick={() => navigate(`/${artistClick}`)}
                        ></ButtonMini>
                    </ButtonContainer>
                </Container>
            </Layout>
        </RecoilRoot>
    );
}

export default ArtistList;
