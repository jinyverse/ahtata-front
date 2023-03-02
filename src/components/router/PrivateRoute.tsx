import { Navigate, Outlet } from 'react-router-dom';

// 로그인이 필요한 페이지 라우팅 처리
export function PrivateRoute() {
    const isLoggedIn = false;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
