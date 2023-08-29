import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // cart: JSON.parse(localStorage.getItem('cart'))|| []

    cart:
        JSON.parse(localStorage.getItem('cart')) ||
        [
            // {
            //     id: 2,
            //     name: 'Apple',
            //     quantity: 2,
            //     price: 200,
            //     totalPrice: 400,
            // },
        ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = newItem
            state.cart.push(action.payload);

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeItem(state, action) {
            //payload= id
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        increaseItemQuantity(state, action) {
            //payload= id
            const item = state.cart.find((item) => item.id === action.payload);

            item.quantity++;
            item.totalPrice = item.quantity * item.price;
        },
        decreaseItemQuantity(state, action) {
            //payload= id
            const item = state.cart.find((item) => item.id === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.price;

            if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => {
    return state.cart.cart;
};

export const getTotalQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

// const currentQuantity = useSelector(getCurrentQuantityById(id))
export const getCurrentQuantityById = (id) => (state) => state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

//hàm này dùng để tìm số lượng của sản phẩm đã chọn có hoặc hay không
// ?.quantity :kiểm tra xem thuộc tính quantity có tồn tại hay không. Nếu tồn tại, trả về giá trị của thuộc tính quantity,nếu không tồn tại thì trả về undefined
// ??0 : kiểm tra giá trị của biểu thức bên trái. Nếu giá trị đó là null hoặc undefined, nó trả về giá trị bên phải .Nếu giá trị bên trái không phải null hoặc undefined, nó trả về giá trị bên trái.
