import Button from '../ui/Button';

function MoreInfor() {
    return (
        <section className="py-6 ">
            <div className="flex items-center justify-between flex-wrap italic bg-gray-200 py-4 px-28">
                <div>
                    <h2 className="text-xl font-semibold">FREE SHIPPING</h2>
                    <p className="text-xs text-stone-400 mb-2">Freeshipping worldwise</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">24 X 7 SERVICE</h2>
                    <p className="text-xs text-stone-400 mb-2">Freeshipping worldwise </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">FESTIVAL OFFER</h2>
                    <p className="text-xs text-stone-400 mb-2">Freeshipping worldwise</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between italic">
                <div>
                    <h2 className="text-xl font-semibold"> LETS BE FRIEND</h2>
                    <p className="text-xs text-stone-400 mb-2">Freeshipping worldwise</p>
                </div>
                <div className="flex pt-8 ">
                    <input type="text" placeholder="Enter your email" className="input" />
                    <Button> Subcrible </Button>
                </div>
            </div>
        </section>
    );
}

export default MoreInfor;
