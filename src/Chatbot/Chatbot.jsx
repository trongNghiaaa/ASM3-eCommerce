import SupportWindow from './SupportWindow';
import Icon from './Icon';
import { useState } from 'react';

function SupportEngine() {
    const [show, setShow] = useState();

    const toggleChat = (show) => {
        setShow(show);
    };

    // const show = useSelector((state) => state.chatbot.show);
    // console.log(show);

    // const ref = useRef(null);
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             setIsShow(false);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [ref]);

    return (
        <>
            <Icon onClick={toggleChat} show={show} />
            {show && <SupportWindow />}
        </>
    );
}

export default SupportEngine;
