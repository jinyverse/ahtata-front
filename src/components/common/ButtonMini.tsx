import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { artistClickDataAtom } from '@/stores/artistAtom';
interface ButtonProps {
    content: string;
    color: string;
    onClick?: () => void;
}
const Button = styled.button`
    width: 118px;
    height: 57px;
    background-color: ${(props: ButtonProps) => props.color};
    border-radius: 10px;
    border: 0 solid;
    color: white;
`;
function ButtonMini({ content, color }: ButtonProps) {
    const [artistClick, setArtistsClick] = useRecoilState(artistClickDataAtom);
    const navigate = useNavigate();
    return (
        <Button
            content={content}
            color={color}
            onClick={() =>
                content === '선택'
                    ? navigate(`/${artistClick?.content}`)
                    : navigate(`/`)
            }
        >
            {content}
        </Button>
    );
}

export default ButtonMini;
