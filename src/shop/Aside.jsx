import { Link, useLocation } from 'react-router-dom';

function Aside() {
    const location = useLocation();

    return (
        <aside className="italic">
            <h3 className="py-4">CATEGORIES</h3>
            <ul>
                <h4 className="bg-black text-white pl-4 ">APPLE</h4>
                <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                    <Link to="/shop?type=all" className={location.search === '?type=all' ? 'active' : ''}>
                        All
                    </Link>
                </li>
                <ul>
                    <h5 className="bg-stone-200 pl-4 ">IPHONE & MAC</h5>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=iphone" className={location.search === '?type=iphone' ? 'active' : ''}>
                            Iphone
                        </Link>
                    </li>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=ipad" className={location.search === '?type=ipad' ? 'active' : ''}>
                            Ipad
                        </Link>
                    </li>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=macbook" className={location.search === '?type=macbook' ? 'active' : ''}>
                            Macbook
                        </Link>
                    </li>
                </ul>
                <ul>
                    <h5 className="bg-stone-200 pl-4">WIRELESS</h5>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=airpod" className={location.search === '?type=airpod' ? 'active' : ''}>
                            Airpod
                        </Link>
                    </li>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=watch" className={location.search === '?type=watch' ? 'active' : ''}>
                            Watch
                        </Link>
                    </li>
                </ul>
                <ul>
                    <h5 className="bg-stone-200 pl-4">OTHER</h5>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=mouse" className={location.search === '?type=mouse' ? 'active' : ''}>
                            Mouse
                        </Link>
                    </li>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=keyboard" className={location.search === '?type=keyboard' ? 'active' : ''}>
                            Keyboard
                        </Link>
                    </li>
                    <li className="bg-white pl-4 transition-all duration-500 hover:text-yellow-500">
                        <Link to="/shop?type=other" className={location.search === '?type=other' ? 'active' : ''}>
                            Other
                        </Link>
                    </li>
                </ul>
            </ul>
        </aside>
    );
}

export default Aside;
