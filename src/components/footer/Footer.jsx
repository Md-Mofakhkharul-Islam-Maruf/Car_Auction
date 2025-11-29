import React from 'react';

const Footer = () => {
  return (
    <div className='text-center p-10 space-y-4 bg-base-300'>
      <p className='text-3xl font-bold'>Auction<span className='text-green-600'>Gallery</span></p>
      <div className='flex justify-center gap-12 text-xl font-semibold'>
        <p>Bid</p>
        <p>Win</p>
        <p>Won</p>
      </div>
      <div className='flex gap-5 justify-center text-lg'>
        <a className="">Home</a>
        <a className="">Actions</a>
        <a className="">Categories</a>
        <a className="">How to Works</a>
      </div>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Auction Gallery</p>
    </div>
  );
};
export default Footer;