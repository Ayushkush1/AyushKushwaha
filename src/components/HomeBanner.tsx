import React from 'react';

const HomeBanner = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A00] to-[#f5de12] font-black tracking-wider px-12 py-8 relative">
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