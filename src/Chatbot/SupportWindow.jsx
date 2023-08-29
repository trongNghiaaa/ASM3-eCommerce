import { AiOutlineLink } from 'react-icons/ai';
import { CiFaceSmile } from 'react-icons/ci';
import { BsSendFill } from 'react-icons/bs';

function SupportWindow() {
    return (
        <div className="fixed bottom-[116px] right-[24px] w-96 h-96 border border-purple-600 rounded-lg bg-slate-100 overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 right-0 flex justify-between bg-slate-300 py-2 px-3">
                    <p className="font-semibold">Customer Support</p>
                    <p className="text-sm text-center bg-slate-100 p-1">Let chat app</p>
                </div>
                <div className="absolute mt-16">
                    <div className="flex items-center text-xs  ">
                        <img
                            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png"
                            alt="Bot"
                            className="h-10"
                        />
                        <p className="bg-slate-200 p-2 rounded-lg">
                            ADMIN: Xin chào , tôi có thể giúp <br />
                            gì cho bạn?
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around bg-slate-300 p-2">
                    <img
                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png"
                        alt="Bot"
                        className="h-10"
                    />
                    <input placeholder="Enter Message..." className="p-1 w-[60%]" />
                    <div className=" flex gap-2 ">
                        <AiOutlineLink />
                        <CiFaceSmile />
                        <BsSendFill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportWindow;
