import { Form, useActionData, useNavigation } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../ui/Button';
import { getCart, getTotalPrice } from '../cart/cartSlice';
import { convertPrice } from '../utils/helper';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CheckoutForm() {
    const formErrors = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const cart = useSelector(getCart);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className="py-4 md:py-8 italic">
            <h2 className="text-xl font-semibold py-6">BILLING DETAILS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-x-8">
                <Form method="POST">
                    <div className="space-y-3 mb-3">
                        <label>FULL NAME</label>
                        <input type="text" name="customer" placeholder="Enter Your Full Name Here" required className="input" />
                    </div>
                    <div className="space-y-3 mb-3">
                        <label>EMAIL</label>
                        <input type="email" name="email" placeholder="Enter Your Email Here" required className="input" />
                    </div>

                    <div className="space-y-3 mb-3">
                        <label>PHONE NUMBER</label>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter Your Phone Number Here"
                                required
                                className="input"
                            />
                        </div>
                        {formErrors?.phone && <p>{formErrors.phone}</p>}
                    </div>

                    <div className="space-y-3 mb-3">
                        <label>ADDRESS</label>
                        <div>
                            <input type="text" name="address" placeholder="Enter Your Address Here" required className="input" />
                        </div>
                    </div>

                    <div>
                        {/* dùng input này và gán giá trị vào value vì ta không thể lấy dữ liệu từ từ redux trong hàm action */}
                        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                        <Button disabled={isSubmitting}>{isSubmitting ? 'Place order...' : 'Order now'}</Button>
                    </div>
                </Form>

                <div className="h-full flex flex-col items-start bg-stone-50 p-8 space-y-4">
                    <h2 className="text-lg font-semibold">CART TOTAL</h2>
                    <ul className="divide-y-2 ">
                        {cart.map((item) => (
                            <li key={item.id} className="text-sm py-3">
                                <span className="font-semibold">{item.name}</span> :
                                <span className="text-stone-400">
                                    {convertPrice(`${item.price}`)}VND x{item.quantity}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className="py-2">
                        TOTAL : <span className="font-semibold text-stone-700 text-lg">{convertPrice(`${totalPrice}`)} VND</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;

export async function action({ request }) {
    const formData = await request.formData();
    //ban đầu chỉ trả về 1 Obj formData không có thuộc tính, dùng hàm Object.fromEntries() để thấy đưcọ thuộc tính
    const data = Object.fromEntries(formData);
    //convert cart từ dạng '[]' về dạng []
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
    };
    console.log(order);

    const erorrs = {};
    // nếu phone nhập vào sai định dạng => thêm key phone vào Object errors
    if (!isValidPhone(order.phone)) erorrs.phone = 'Please give us your phone number. We might need it to contact you';
    // convert Object qua mảng và nếu mảng có 1 lỗi trở lên thì trả về lỗi, không chuyển trang
    if (Object.keys(erorrs).length > 0) return erorrs;

    // const newOrder = await CreateOrder(order)

    localStorage.setItem('order', JSON.stringify(order));

    return redirect(`/order`);
}
