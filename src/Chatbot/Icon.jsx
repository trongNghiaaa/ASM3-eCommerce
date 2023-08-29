

function Icon({show, onClick}) {
    
    
    return (
        <div className="fixed bottom-6 right-6" onClick={() => onClick(!show)}>
            <div
                className="
                        bg-[url(https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cc/61/51/cc615120-d37e-b36f-4de1-ae4d2a95a8ac/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png)] 
                        bg-center bg-cover            
                        w-[60px] h-[60px] rounded-full cursor-pointer border-2 border-red-500 transition-all duration-300
                        hover:border-4 hover:border-[#7a39e0]
                    "
            ></div>
        </div>
    );
}

export default Icon;
