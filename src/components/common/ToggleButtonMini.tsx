import styled from 'styled-components';
import { useState } from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { artistDataAtom } from '@/stores/artistAtom';
interface ToggleButtonMiniprops {
    content: string;
}
const Button = styled.button`
    width: 59px;
    height: 28px;
    border-radius: 14px;
    border: 0 solid;
    background-color: ${({ theme }) => theme.button.Main};
    padding: 0.5em;
    font-size: 5px;
    color: white;
`;

function ToggleButtonMini() {
    // { content }: ToggleButtonMiniprops
    const [click, setClick] = useState<boolean>(false);
    const [artists, setArtists] = useRecoilState(artistDataAtom);

    const getList = () => {
        setClick(!click);
        //여기에 데이터 필터링 부분을 추가해야함
        setArtists(
            artists?.filter(artist =>
                artist.name.toLowerCase().includes('a'),
            ) ?? [],
        );
    };
    console.log(click);
    return (
        <Button onClick={getList}>{click == true ? '인기순' : '랭킹순'}</Button>
    );
}

export default ToggleButtonMini;
