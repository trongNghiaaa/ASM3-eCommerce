import { useNavigate } from 'react-router-dom';
import { convertPrice } from '../utils/helper';

function Product({ product }) {
    const navigate = useNavigate();
    

    const { _id } = product;

    const price = convertPrice(product.price);

    return (
        <>
            <div onClick={() => navigate(`/detail/${_id.$oid}`)} className=" animate-[scale_0.5s_linear]">
                <img src={product.img1} alt="image" className="h-30 hover-img" />
                <div className="flex flex-col gap-1 flex-wrap text-center pt-2 italic">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-stone-300">{price} VND</p>
                </div>
            </div>
        </>
    );
}

export default Product;
