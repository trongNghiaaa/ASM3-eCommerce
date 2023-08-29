import { useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Button from '../ui/Button';
import BannerDetail from './BannerDetail';
import { convertPrice } from '../utils/helper';
import { addItem, getCart } from '../cart/cartSlice';
import UpdateQuantity from '../cart/UpdateQuantity';

function Detail() {
    const [quantity, setQuantity] = useState();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    //lấy ID của sản phẩm được chọn từ Shoppage
    const { productId } = useParams();

    // lấy Data từ loader router
    const product = useLoaderData();

    const cart = useSelector(getCart);

    // lọc sản phẩm có ID trùng với ID của sản phẩm đã chọn bên Shoppage
    const productDetail = product.filter((item) => item._id.$oid === productId);

    //biến đổi từ [{}] sang {} chứa thông tin của sản phẩm được chọn
    const currentProduct = productDetail.reduce((result, item) => {
        for (const key in item) {
            result[key] = item[key];
        }
        return result;
    }, {});
    // console.log(currentProduct);

    // lọc sản phẩm có cùng type với sản phẩm hiện có
    const relatedList = product.filter((item) => item.category === currentProduct.category);
    const relatedProduct = relatedList.reduce((result, item) => {
        for (const key in item) {
            result[key] = item[key];
        }
        return result;
    }, {});
    // console.log(relatedList);

    // Biến đổi thêm dấu chấm vào price VD: 1000000 => 1.000.000
    const currentPrice = convertPrice(currentProduct.price);
    const relatedPrice = convertPrice(relatedProduct.price);

    const handleAddToCart = () => {
        const newItem = {
            id: productId,
            image: currentProduct.img1,
            name: currentProduct.name,
            quantity: quantity || 1,
            price: currentProduct.price,
            totalPrice: currentProduct.price * 1,
        };

        if (cart.some((item) => item.id === newItem.id)) {
            alert('Sản phẩm đã có trong giỏ hàng');
            return;
        }
        dispatch(addItem(newItem));
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
        setQuantity('')

        // navigate('/cart');
    };

    return (
        <section>
            <BannerDetail />
            {/* Information */}
            <div className="grid grid-cols-2 gap-x-4 py-8">
                <div>
                    <img src={currentProduct.img1} alt={currentProduct.category} />
                </div>
                <div className="flex flex-col gap-4 italic py-8">
                    <h2 className="text-3xl font-bold">{currentProduct.name}</h2>
                    <p className="text-stone-400">{currentPrice} VND</p>
                    <p className="text-stone-400 text-sm">{currentProduct.short_desc}</p>
                    <p className="font-bold">CATEGORY: {currentProduct.category} </p>
                    <div className="grid grid-cols-[1fr_1fr_1fr] ">
                        <input
                            type="number"
                            placeholder="QUANTITY"
                            value={quantity}
                            min="1"
                            className="input hide-spin-buttons"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <UpdateQuantity id={productId} />
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="w-1/2 italic py-8">
                <Button>DESCRIPTION</Button>
                <h3 className="font-bold my-4">PRODUCT DESCRIPITION</h3>
                <p className="text-sm text-stone-400">{currentProduct.long_desc} </p>
            </div>
            {/* Related */}
            <div className="italic pb-8">
                <h2 className="font-bold py-4">RELATED PRODUCT</h2>
                <div className="flex gap-4">
                    {relatedList.map((item) => {
                        return (
                            <div key={item._id.$oid} className="w-52 text-center">
                                <img src={item.img1} alt="related" className="h-40" />
                                <p className="text-xs">{item.name}</p>
                                <p className="text-xs text-stone-400">{relatedPrice}VND</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Detail;
