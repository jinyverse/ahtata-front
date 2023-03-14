import styled from 'styled-components';
import UseRoctagon from '@/assets/img/useroctagon.svg';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { artistDataAtom } from '@/stores/artistAtom';
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
];
interface SearchInputProps {
    content: string;
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
//onChange와 value를 여기 추가하는거 말고 다른 방법은 없을까,,?
const InputDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5%;
    border-radius: 2em;
    border: 0 solid;
    color: white;
    /* padding: 1.5em; */
    background-color: #ffffff2d;
    margin: 20px 0 0 0;
`;
const Input = styled.input`
    width: 80%;
    height: 70%;
    border-radius: 2em;
    border: 0 solid black;
    color: white;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0);
    /* margin: 20px 0 0 0; */
    &:focus {
        outline: none;
    }
`;
function SearchInput({ content }: SearchInputProps) {
    const [artists, setArtists] = useRecoilState(artistDataAtom);
    console.log(artists);
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = e.target.value;
        setArtists(
            artists?.filter(artist =>
                artist.name.toLowerCase().includes(searchValue.toLowerCase()),
            ) ?? [],
        );
    }

    return (
        <InputDiv>
            <Input placeholder={content} onChange={handleInputChange}></Input>
            <img src={UseRoctagon} alt="" />
        </InputDiv>
    );
}

export default SearchInput;
