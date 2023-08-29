import Button from '../ui/Button';

function Banner() {
    return (
        <div className="relative h-[60vh] bg-[url('./asset/banner1.jpg')] bg-cover bg-center italic ">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:left-0 sm:translate-x-10">
                <p className="text-xs text-stone-400 mb-2">NEW INSPIRATION 2023</p>
                <h1 className="text-2xl font-bold mb-5">20% OFF ON NEW SEASON</h1>
                <Button to="/shop">Browse collections</Button>
            </div>
        </div>  
    );
}

export default Banner;
