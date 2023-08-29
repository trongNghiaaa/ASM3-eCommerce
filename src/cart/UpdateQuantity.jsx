import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';

function UpdateQuantity({ id }) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(id));

    return (
        <div className="flex items-center justify-center gap-1 md:gap-3">
            <Button type="arrow">
                {currentQuantity !== 0 && <BiSolidLeftArrow onClick={() => dispatch(decreaseItemQuantity(id))} />}
            </Button>
            {currentQuantity}
            <Button type="arrow">
                {currentQuantity !== 0 && <BiSolidRightArrow onClick={() => dispatch(increaseItemQuantity(id))} />}
            </Button>
        </div>
    );
}

export default UpdateQuantity;
