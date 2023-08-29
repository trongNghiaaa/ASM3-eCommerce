import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function Button({ children, to, disabled, onClick, type }) {
    const className =
        ' bg-zinc-700 text-gray-200 py-2 px-3 flex items-center justify-center focus:outline-none transition-all duration-300 hover:bg-zinc-950 ';

    // const base = 'bg-zinc-700 text-gray-200 py-2 px-3  focus:outline-none transition-all duration-300 hover:bg-zinc-950 ';
    const styles = {
        simple: 'flex items-center justify-center gap-4 border-2 border-black  text-gray-500  px-3 py-2 md:px-5 md:py3 transition-all duration-300 hover:bg-zinc-950 hover:text-gray-200',
        logout: 'italic transition-all duration-300 hover:text-stone-400',
        arrow: 'text-xs'
    };

    // className = {styles[type]}
    if (type) {
        return (
            <button disabled={disabled} className={styles[type]} onClick={onClick}>
                {children}
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button className={className} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    );
}

export default Button;
