import { convertPrice } from '../utils/helper';

function OrderItem({ item }) {
    const { image, quantity, name, totalPrice } = item;

    return (
        <li className="py-3 italic">
            <div className="flex items-center justify-between gap-4 text-sm">
                <div className="flex items-center">
                    <img src={image} alt="..." className="h-16" />
                    <p>
                        <span className="font-bold">{quantity}&times;</span> {name}
                    </p>
                </div>
                <p className="font-bold text-stone-500">{convertPrice(`${totalPrice}`)} VND</p>
            </div>
        </li>
    );
}

export default OrderItem;
