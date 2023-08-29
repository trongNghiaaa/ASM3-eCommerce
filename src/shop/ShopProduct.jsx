import { useSearchParams } from 'react-router-dom';

import ProductItem from './ProductItem';

// import { useState } from 'react';

function ShopProduct({ product }) {
    // const [listProduct, setListProduct] = useState([]);

    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const currentProduct = product.filter((item) => {
        if (!type  || type === 'all') {
            return true;
        }

        return item.category === type;
    });

    return (
        <section>
            <div className="flex flex-col gap-2 sm:flex-row  sm:justify-between pb-4  ">
                <input className="input w-1/2" placeholder="Enter Search Here!" />
                <select id="sort" name="sort" className="w-2/5">
                    <option value="default">Default sorting</option>
                </select>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-x-6 gap-y-4">
                {currentProduct.map((item) => (
                    <ProductItem product={item} key={item._id.$oid} />
                ))}
            </ul>
        </section>
    );
}

export default ShopProduct;
