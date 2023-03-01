import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Artists from 'pages/Artists';
import Ranking from 'pages/Ranking';
import RankingSelf from 'pages/RankingSelf';
import CardBook from 'pages/CardBook';
import GamePage from 'pages/Game';
import { AuthRoute } from './AuthRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/artists" element={<Artists />} />
                {/* 로그인이 필요한 페이지 */}
                <Route path="/ranking/self" element={<AuthRoute />}>
                    <Route path="/ranking/self" element={<RankingSelf />} />
                </Route>
                <Route path="/card-book" element={<CardBook />} />
                {/* 임시 개발용 url */}
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
