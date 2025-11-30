import React from 'react';

const Hero = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex items-center' style={{ backgroundImage: "url('/assets/Banner-min.jpg')" }}>
            <div className='text-white w-1/2 ml-20'>
                <h1 className="text-5xl font-bold mb-4">Bid on Unique Items from Around the World</h1>
                <p className="text-lg mb-6">
                    Discover rare collections, luxury goods, and vintage treasures in our curated auctions.
                </p>
                <button className="px-6 py-3 bg-teal-600 rounded-full font-bold">Explore Auctions</button>
            </div>
        </div>
    );
};

export default Hero;