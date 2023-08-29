import { Link } from 'react-router-dom';

function Category() {
    return (
        <section className=" italic">
            <div className="text-center py-4">
                <p className="text-xs text-stone-400 mb-2">CAREFULLY CREATED COLLECTIONS</p>
                <h2 className="text-xl font-semibold">BROWSE OUR CATEGORIES</h2>
            </div>
            <menu className="grid grid-cols-2 gap-x-8 mb-7 ">
                <Link to="/shop/?type=iphone">
                    <img src="../../public/product_1.png" alt="iphone" className="hover-img" />
                </Link>
                <Link to="/shop/?type=macbook">
                    <img src="../../public/product_2.png" alt="mac" className="hover-img" />
                </Link>
            </menu>
            <menu className="grid grid-cols-3 gap-x-8">
                <Link to="/shop/?type=ipad">
                    <img src="../../public/product_3.png" alt="ipad" className="hover-img" />
                </Link>
                <Link to="/shop/?type=watch">
                    <img src="../../public/product_4.png" alt="watch" className="hover-img" />
                </Link>
                <Link to="/shop/?type=airpod">
                    <img src="../../public/product_5.png" alt="airpods" className="row-span-full hover-img " />
                </Link>
            </menu>
        </section>
    );
}

export default Category;
