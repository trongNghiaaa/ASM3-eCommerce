import { useLoaderData } from 'react-router-dom';

import Banner from './Banner';
import Category from './Category';
import HomeProduct from './HomeProduct';
import MoreInfor from './MoreInfor';

function Home() {
    const product = useLoaderData();

    return (
        <>
            <Banner />
            <Category />
            <HomeProduct product={product} />
            <MoreInfor />
        </>
    );
}

export default Home;
