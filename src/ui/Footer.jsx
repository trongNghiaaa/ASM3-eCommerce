import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="h-full  bg-black text-stone-400 text-sm italic">
            <div className=" max-w-5xl mx-auto grid grid-cols-1 py-10 px-10 sm:grid-cols-3 sm:px-0">
                <ul>
                    <h2 className="text-white text-base mb-4">CUSTOMER SERVICERS</h2>
                    <li>
                        <Link href="#">Help & Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#">Return & Refunds</Link>
                    </li>
                    <li>
                        <Link href="#">Online Store</Link>
                    </li>
                    <li>
                        <Link href="#">Tern & Conditions</Link>
                    </li>
                </ul>
                <ul>
                    <h2 className="text-white text-base mb-4">COMPANY</h2>
                    <li>
                        <Link href="#">What We Do</Link>
                    </li>
                    <li>
                        <Link href="#">Return & Refunds</Link>
                    </li>
                    <li>
                        <Link href="#">Online Store</Link>
                    </li>
                    <li>
                        <Link href="#">Tern & Conditions</Link>
                    </li>
                </ul>
                <ul>
                    <h2 className="text-white text-base mb-4">SOCIAL MEDIA</h2>
                    <li>
                        <Link href="#">Twiter</Link>
                    </li>
                    <li>
                        <Link href="#">Instagram</Link>
                    </li>
                    <li>
                        <Link href="#">Facebook</Link>
                    </li>
                    <li>
                        <Link href="#">Pinterest</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
