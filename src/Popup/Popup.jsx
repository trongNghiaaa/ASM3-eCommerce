import { useDispatch, useSelector } from 'react-redux';

import Button from '../ui/Button';
import { convertPrice } from '../utils/helper';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { hidePopup } from './popupSlice';
import { useNavigate } from 'react-router-dom';

function Popup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //lấy obj chứa thông tin sản phẩm được click từ store
    const item = useSelector((state) => state.popup.item);
    
    //chuyển price về dạng 1.000.000
    const price = convertPrice(item.price);

    const handleClick = () => {
        dispatch(hidePopup());
        navigate(`/detail/${item._id.$oid}`);
    };

    return (
        <section className="fixed inset-0 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center ">
            <div className=" w-[80%] grid grid-cols-2 gap-x-8 p-8 bg-white relative animate-[dropTop_0.3s_linear]">
                <div>
                    <img src={item.img1} alt="Product" />
                </div>
                <div className="p-8">
                    <div className="my-8 italic">
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <p className="text-md text-stone-500 mb-2">{price} VND</p>
                        <p className="text-sm text-stone-400 ">{item.short_desc}</p>
                    </div>
                    <Button onClick={handleClick}>
                        <div className=" flex items-center gap-3">
                            <AiOutlineShoppingCart /> View Detail
                        </div>
                    </Button>
                    <div className="absolute top-3 right-3" onClick={() => dispatch(hidePopup())}>
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Popup;
