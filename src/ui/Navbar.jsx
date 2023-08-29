import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../user/userSlice';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const currentUser = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.setItem('currentUser', null);
    };

    let auth = (
        <div className="flex items-center gap-1">
            <FaUser /> Login
        </div>
    );

    if (isAuthenticated && currentUser) {
        auth = (
            <div
                onClick={handleLogout}
                className="transition-all duration-300 hover:text-stone-400 italic flex items-center gap-1"
            >
                <FaUser /> {currentUser.fullname}(Logout)
            </div>
        );
    }

    return (
        <header className="h-16 ">
            <nav className="relative h-full max-w-5xl mx-auto flex items-center justify-between px-2 italic">
                <div className="flex gap-3">
                    <NavLink to="/" className="hidden sm:block">
                        Home
                    </NavLink>
                    <NavLink to="/shop" className="hidden sm:block">
                        Shop
                    </NavLink>
                </div>
                <div className="text-2xl">Botique</div>
                <div className="flex gap-3">
                    <NavLink to="/cart" className="hidden sm:flex sm:items-center sm:gap-1">
                        <HiOutlineShoppingCart />
                        Cart
                    </NavLink>
                    <NavLink to="/login" className="hidden  sm:flex sm:items-center sm:gap-1">
                        {auth}
                    </NavLink>
                </div>

                {/* Responsive navbar */}
                <ul className="block sm:hidden">
                    {openMenu ? (
                        <MdOutlineClose size={'24px'} className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
                    ) : (
                        <MdMenu size={'24px'} className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
                    )}

                    {openMenu && (
                        <div className="absolute z-50 border-2 space-y-2 divide-y-2 right-8 bg-white px-8 py-4 text-center text-stone-600 text-sm">
                            <li>
                                <NavLink to="/" className="flex">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop/?type=all" className="flex">
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className="flex items-center gap-1">
                                    <HiOutlineShoppingCart />
                                    Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">{auth}</NavLink>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
