import React from 'react';

const HomeBanner = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff6f00] to-[#ffe601] font-black lg:text-9xl px-12 py-2 relative">
                <h1>AYUSH</h1>
                <h1>KUSHWAHA</h1>
            </div>
            <div className="absolute top-[115%] inset-0 flex justify-center items-center">
                <img 
                    src="/assets/Profile.png" 
                    alt="hero" 
                    className="h-80 object-contain animate-float" 
                />
            </div>
            <div className="flex text-xs font-semibold flex-col justify-center items-center relative top-[220px] text-center">
                <p>PASSIONATE FRONT-END DEVELOPER SKILLED</p>
                <span>IN BUILDING DYNAMIC WEB APPS</span>
            </div>
        </div>
    );
};

export default HomeBanner;
