import { Navigate, Outlet } from 'react-router-dom';

// 로그인 상태일 경우 접근 제한
export function PublicRoute() {
    const isLoggedIn = false;
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
