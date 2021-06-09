import React from 'react';
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
import imageSeven from '../images/imageSeven.jpg';
const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={imageThree} alt='T-shirt' className='h-96 w-25 rounded mb-10 shadow' />
                <div className='flex flex-col justify-center items-center mb-3'>
                    <h2 className='text-2xl mb-1'>White T-shirt</h2>
                    <p className='mb-2'>White and full size T-shirt will suit you.</p>
                    <div className=" justify-between">
                        <button className="bg-red-500 rounded-96 py-2 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">$16</button>
                        <button className="bg-red-500 rounded-96 py-2 ml-4 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* img-two */}
            <div className='menu-card'>
                <img src={imageSeven} alt='T-shirt' className='h-96 w-25 rounded mb-10 shadow' />
                <div className='flex flex-col justify-center items-center mb-3'>
                    <h2 className='text-2xl mb-1'>T-shirt</h2>
                    <p className='mb-2'>this soft and well cloths T-shirt </p>
                    <div className=" justify-between">
                        <button className="bg-red-500 rounded-96 py-2 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">$16</button>
                        <button className="bg-red-500 rounded-96 py-2 ml-4 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">Buy Now</button>
                    </div>
                </div>
            </div>

                {/* img three */}
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-10'>
                <img src={imageTwo} alt='pant' className='h-96 w-25 rounded mb-10 shadow' />
                <div className='flex flex-col justify-center items-center mb-3'>
                    <h2 className='text-2xl mb-1'> Gray Pant</h2>
                    <p className='mb-2'>This is export quality pant</p>
                    <div className=" justify-between">
                        <button className="bg-red-500 rounded-96 py-2 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">$16</button>
                        <button className="bg-red-500 rounded-96 py-2 ml-4 text-2xl  px-10 hover:bg-green-300 transition duration-300 ease-in-out text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;