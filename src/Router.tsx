import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Artists from 'pages/Artists';
import Ranking from 'pages/Ranking';
import CardBook from 'pages/CardBook';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/card-book" element={<CardBook />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
