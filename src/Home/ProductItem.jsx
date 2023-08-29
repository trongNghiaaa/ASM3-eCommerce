import { useDispatch } from 'react-redux';

import { convertPrice } from '../utils/helper';
import { showPopup } from '../Popup/popupSlice';

function ProductItem({ product }) {
    const price = convertPrice(product.price);

    const dispatch = useDispatch();

    return (
        <li className="hover-img " onClick={() => dispatch(showPopup(product))}>
            <img src={product.img1} alt="image" className="h-28 sm:h-36 " />
            <div className="flex flex-col gap-1 text-center pt-2 text-xs sm:text-base">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-stone-300">{price} VND</p>
            </div>
        </li>
    );
}

export default ProductItem;
