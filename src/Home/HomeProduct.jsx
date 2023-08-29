import { useSelector } from 'react-redux';
import Popup from '../Popup/Popup';
import ProductItem from './ProductItem';

function HomeProduct({ product }) {
    const show = useSelector((state) => state.popup.show);

    return (
        <section className="pb-4 italic">
            <div className=" py-4">
                <p className="text-xs text-stone-400 mb-2">CAREFULLY CREATED COLLECTIONS</p>
                <h2 className="text-xl font-semibold">BROWSE OUR CATEGORIES</h2>
            </div>

            <ul className="grid grid-cols-3 sm:grid-cols-4 grid-rows-2 gap-x-6 gap-y-4">
                {product.map((item) => (
                    <ProductItem key={item._id.$oid} product={item} />
                ))}
            </ul>
            {show && <Popup />}
        </section>
    );
}

export default HomeProduct;
