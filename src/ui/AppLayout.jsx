import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Loader from './Loader';
import Navbar from './Navbar';
import Chatbot from '../Chatbot/Chatbot';

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <>
            {isLoading && <Loader />}
            <Navbar />

            <main className="max-w-5xl mx-auto">
                <Outlet />
                <Chatbot />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;
