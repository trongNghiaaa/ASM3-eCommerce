import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    //1. Tải người dùng đã xác thực
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    //2. Nếu không có người dùng xác thực Redirect về trang login
    useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated, navigate]);

    //3. Nếu có người dùng đã xác thực, render app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
