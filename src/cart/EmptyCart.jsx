import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div>
            <Link to="/shop/?type=all">&larr; Back to menu</Link>

            <p className="mt-7 font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
        </div>
    );
}

export default EmptyCart;
