import { getProduct } from './apiStore';

export const loaderProduct = async () => {
    const product = await getProduct();
    return product;
};

// export const loaderDetail = async ({ params }) => {
//     const product = await getCheckout(params.productId);
//     return product;
// };
