import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import OrderItem from './OrderItem';

import { useSelector } from 'react-redux';

import { GrLocation } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { getTotalPrice } from '../cart/cartSlice';
import { convertPrice } from '../utils/helper';

function Order() {
    const navigate = useNavigate();

    const order = JSON.parse(localStorage.getItem('order'));
    const { cart, customer, address, phone } = order;
    const totalPrice = useSelector(getTotalPrice);

    const handleClick = () => {
        // localStorage.setItem('order', null);
        navigate('/');
    };

    return (
        <div className="space-y-8 px-4 py-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold">
                    Order # <span className="text-2xl font-bold">{customer}</span> status
                </h2>
            </div>
            <div className="text-center italic text-xl">
                <h3>Your order has been successfully!!!</h3>
            </div>

            <div className=" bg-stone-200 px-6 py-5 space-y-3 font-semibold">
                <h3 className="flex items-center gap-2">
                    <GrLocation />
                    Address : {address}
                </h3>
                <h3 className="flex items-center gap-2">
                    <BiUser />
                    Customer : {customer}
                </h3>
                <h3 className="flex items-center gap-2">
                    <BsTelephoneInbound />
                    Phone : {phone}
                </h3>
            </div>

            <ul className="dive-stone-200 divide-y border-b border-t">
                {cart.map((item) => (
                    <OrderItem item={item} key={item.id} />
                ))}
            </ul>
            <div className="text-center text-xl italic">
                <h2>
                    TOTAL : <span className="font-bold text-stone-500">{convertPrice(`${totalPrice}`)}</span> VND
                </h2>
            </div>

            <Button onClick={handleClick}> Back to Home </Button>
        </div>
    );
}

export default Order;
