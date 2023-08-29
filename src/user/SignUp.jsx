import { useState } from 'react';

import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const userArr = [];

function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra các thông tin đăng ký
        if (fullname.trim().length === 0 || email.trim().length === 0 || phone.trim().length === 0) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            return;
        }
        if (!isValidPhone(phone)) {
            setError('Vui lòng nhập đúng số điện thoại');
            return;
        }

        if (password.length < 8) {
            setError('Mật khẩu phải có ít nhất 8 ký tự.');
            return;
        }

        // Kiểm tra email có trùng với tài khoản đã có hay không (giả sử userArr là mảng chứa danh sách toàn bộ người dùng)
        const isEmailExist = userArr.some((user) => user.email === email);
        if (isEmailExist) {
            setError('Email đã tồn tại.');
            return;
        }

        // Nếu thông tin hợp lệ, thêm người dùng mới vào mảng userArr
        const newUser = { fullname, email, password, phone };
        userArr.push(newUser);

        // Lưu userArr vào LocalStorage
        localStorage.setItem('users', JSON.stringify(userArr));

        setFormIsValid(true);
        // Chuyển người dùng về trang Đăng nhập (giả sử có sử dụng React Router)

        navigate('/login');
    };

    return (
        <section className="h-[80vh] bg-[url('/src/asset/banner1.jpg')] bg-cover bg-center flex items-center">
            <div className=" max-w-lg w-[400px] m-[0_auto] text-center bg-white p-10 rounded-2xl">
                <h1 className="text-3xl italic mb-10">Sign Up</h1>
                {!formIsValid && error && <p>{error}</p>}
                <form onSubmit={handleSubmit} className="">
                    <div className="">
                        <input
                            type="text"
                            className="input"
                            placeholder="Full Name"
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>
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
                    <div className="">
                        <input
                            type="tel"
                            className="input"
                            placeholder="Phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <Button>Sign Up</Button>
                        <div className="italic text-stone-500">
                            Login?
                            <span className="cursor-pointer  text-blue-600" onClick={() => navigate('/login')}>
                                Click
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
