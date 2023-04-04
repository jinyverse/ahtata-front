import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Artists from '@/pages/Artists';
import Ranking from '@/pages/Ranking';
import RankingSelf from '@/pages/RankingSelf';
import CardBook from '@/pages/CardBook';
import GamePage from '@/pages/Game';
import ArtistList from '@/pages/ArtistList';
import GameResult from '@/pages/GameResult';
import SignMain from '@/pages/SignMain';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/game/result/:id" element={<GameResult />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/card-book" element={<CardBook />} />
                <Route path="/artist-list" element={<ArtistList />} />

                {/* 로그인이 필요한 페이지 */}
                <Route element={<PrivateRoute />}>
                    <Route path="/ranking/self" element={<RankingSelf />} />
                </Route>
                {/* 로그인 시 접근이 불가능한 페이지 */}
                <Route element={<PublicRoute />}>
                    <Route path="/sign" element={<SignMain />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
