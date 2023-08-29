import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import Home from './Home/Home';
// import Shop from './shop/Shop';
// import Cart from './cart/Cart';
// import Checkout from './checkout/Checkout';
// import Detail from './Detail/Detail';
// import Error from './ui/Error';
// import AppLayout from './ui/AppLayout';
// import Order from './Order/Order';
// import SignIn from './user/SignIn';
import { loaderProduct } from './services/loader';
import { action } from './checkout/CheckoutForm';
import SignUp from './user/SignUp';
import ProtectedRoute from './ui/ProtectedRoute';
import Loader from './ui/Loader';

const Home = lazy(() => import('./Home/Home'));
const Shop = lazy(() => import('./shop/Shop'));
const Cart = lazy(() => import('./cart/Cart'));
const Checkout = lazy(() => import('./checkout/Checkout'));
const Detail = lazy(() => import('./Detail/Detail'));
const Error = lazy(() => import('./ui/Error'));
const AppLayout = lazy(() => import('./ui/AppLayout'));
const Order = lazy(() => import('./Order/Order'));
const SignIn = lazy(() => import('./user/SignIn'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home />, loader: loaderProduct },
            { path: '/shop', element: <Shop />, loader: loaderProduct, errorElement: <Error /> },
            {
                path: '/cart',
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/checkout',
                element: (
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                ),
                action: action,
            },
            {
                path: '/detail/:productId',
                element: (
                    <ProtectedRoute>
                        <Detail />
                    </ProtectedRoute>
                ),
                loader: loaderProduct,
                errorElement: <Error />,
            },
            {
                path: '/order',
                element: (
                    <ProtectedRoute>
                        <Order />
                    </ProtectedRoute>
                ),
            },
            { path: '/login', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
