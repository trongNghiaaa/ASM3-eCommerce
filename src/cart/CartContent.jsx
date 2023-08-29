import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LuTrash2 } from 'react-icons/lu';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { HiOutlineGift } from 'react-icons/hi';

import Button from '../ui/Button';
import { getCart, getTotalPrice, removeItem } from './cartSlice';
import EmptyCart from './EmptyCart';
import UpdateQuantity from './UpdateQuantity';
import { convertPrice } from '../utils/helper';

function CartContent() {
    const navigate = useNavigate();

    const cartList = useSelector(getCart);
    console.log(cartList);
    const totalPrice = useSelector(getTotalPrice);
    console.log(totalPrice);

    const dispatch = useDispatch();

    if (!cartList.length) return <EmptyCart />;

    return (
        <div className="py-4 md:py-8 my-4 md:my-8 italic">
            <h2 className="pb-4 md:pb-8">SHOPPING CART</h2>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-8">
                <div>
                    <table className="table-auto">
                        <thead className=" bg-stone-200 ">
                            <tr>
                                <th className="p-4">IMAGE</th>
                                <th className="p-4">PRODUCT</th>
                                <th className="p-4">PRICE</th>
                                <th className="p-4">QUANTITY</th>
                                <th className="p-4">TOTAL</th>
                                <th className="p-4">REMOVE</th>
                            </tr>
                        </thead>
                        {cartList.map((item) => (
                            <tbody key={item.id}>
                                <tr>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt="Apple"
                                            className="h-28"
                                            onClick={() => navigate(`/detail/${item.id}`)}
                                        />
                                    </td>
                                    <td className="font-bold text-center p-6">{item.name}</td>
                                    <td className="text-stone-400 text-center text-sm">{convertPrice(item.price)} VND</td>
                                    <td className="text-center">
                                        <UpdateQuantity id={item.id} />
                                    </td>
                                    <td className="text-stone-400 text-center text-sm">
                                        {convertPrice(`${item.totalPrice}`)} VND
                                    </td>
                                    <td>
                                        <div className="flex justify-center" onClick={() => dispatch(removeItem(item.id))}>
                                            <LuTrash2 />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <div className="flex justify-between bg-stone-200 p-4 mt-8">
                        <Button type="simple" onClick={() => navigate('/shop/?type=all')}>
                            <BsArrowLeft /> Continue Shopping
                        </Button>
                        <Button type="simple" onClick={() => navigate('/checkout')}>
                            Proceed to check out <BsArrowRight />
                        </Button>
                    </div>
                </div>
                <div className="h-full flex flex-col items-start bg-stone-50 p-8 space-y-4">
                    <h2 className="text-lg font-semibold">CART TOTAL</h2>
                    <div className="divide-y-2 ">
                        <p className="py-2">
                            SUBTOTAL :{' '}
                            <span className="text-stone-400 text-center text-sm">{convertPrice(`${totalPrice}`)} VND</span>
                        </p>
                        <p className="py-2">
                            TOTAL :{' '}
                            <span className="font-semibold text-stone-70000 text-lg">{convertPrice(`${totalPrice}`)} VND</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <input placeholder="Enter your coupon" className="input" />
                        <Button>
                            <HiOutlineGift />
                            Apply Coupon
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartContent;
