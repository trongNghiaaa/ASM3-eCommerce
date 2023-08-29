import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './userSlice';

import Button from '../ui/Button';

function SignIn() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuthenticated);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const userArr = JSON.parse(localStorage.getItem('users'));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim().length === 0 || password.trim().length === 0) {
            setError('Vui lòng nhập đủ thông tin');
            alert('Vui lòng nhập đủ thông tin');
            return;
        }

        const matchedUser = userArr?.find((user) => user.email === email && user.password === password);
        console.log(matchedUser);

        if (matchedUser) {
            // Nếu tìm thấy thông tin người dùng hợp lệ, dispatch action ON_LOGIN với matchedUser
            dispatch(login(matchedUser));
            // Lưu thông tin người dùng hiện tại xuống localStorage để khi vào lại trang Web thì vẫn ở trạng thái đăng nhập
            localStorage.setItem('currentUser', JSON.stringify(matchedUser));

            // Thực hiện chuyển hướng tới trang đăng nhập thành công
            navigate('/');
        } else {
            // Nếu không tìm thấy thông tin người dùng hợp lệ, hiển thị thông báo lỗi
            alert('Email hoặc mật khẩu không chính xác. Vui lòng nhập lại !');
            setPassword('');
            return;
        }
    };

    return (
        <section className="h-[80vh] bg-[url('/src/asset/banner1.jpg')] bg-cover bg-center flex items-center">
            <div className=" max-w-lg w-[400px] m-[0_auto] text-center bg-white p-10 rounded-2xl">
                <h1 className="text-3xl italic mb-10">Sign In</h1>
                {error && <p>{error}</p>}
                <form className="" onSubmit={handleSubmit}>
                    <div className="">
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Button>Sign In</Button>
                        <div className="italic text-stone-500">
                            Create Account ?
                            <span className="cursor-pointer  text-blue-600" onClick={() => navigate('/signup')}>
                                Sign Up
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignIn;
