import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { Playing, CardSelect } from '@/components/game';
import { userState } from '@/stores/userAtoms';
import { playStatusAtom } from '@/stores/gameAtom';

function GamePage() {
    const navigate = useNavigate();
    const status = useRecoilValue(userState);
    const { artist } = useRecoilValue(playStatusAtom);

    // 새로고침 막기 변수
    const preventClose = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
    };

    // 뒤로가기 시 재확인
    useEffect(() => {
        const preventGoBack = () => {
            if (
                confirm(
                    '변경사항이 저장되지 않을 수 있습니다. 뒤로가기를 실행하시겠습니까?',
                )
            ) {
                history.go(-1);
            } else {
                history.pushState(null, '', location.href);
            }
        };
        // 새로고침 후 뒤로가기를 하면 동작하지 않음.
        history.pushState(null, '', location.href);
        window.addEventListener('popstate', preventGoBack);
        return () => window.removeEventListener('popstate', preventGoBack);
    }, []);

    // 새로고침 시 재확인
    useEffect(() => {
        window.addEventListener('beforeunload', preventClose);
        return () => window.removeEventListener('beforeunload', preventClose);
    }, []);

    // url을 입력으로 접근하는 경우 방지
    useEffect(() => {
        console.log(status.isGameMode);
        // + 잘못된 경로 안내 문구 modal
        if (status.isGameMode === false) navigate('/');
    }, []);

    return (
        <Layout hasNotNav={true}>
            {/* 아티스트 선택 UI -> 선택 -> 게임 플레이 UI */}
            {!artist ? <CardSelect /> : <Playing />}
        </Layout>
    );
}

export default GamePage;
