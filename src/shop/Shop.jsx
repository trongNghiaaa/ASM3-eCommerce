import { useLoaderData } from 'react-router-dom';

import Aside from './Aside';
import ShopProduct from './ShopProduct';
import BannerShop from './BannerShop';

function Shop() {
    const products = useLoaderData();
    console.log(products);

    return (
        <>
            <BannerShop />
            <div className="grid grid-cols-[1fr_4fr] gap-x-3 py-10">
                <Aside />
                <ShopProduct product={products} />
            </div>
        </>
    );
}

export default Shop;
