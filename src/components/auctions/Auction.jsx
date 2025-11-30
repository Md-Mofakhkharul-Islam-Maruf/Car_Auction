import { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const Auction = () => {
    const [bids, setBids] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(res=>setBids(res))

    }, [bids])

    return (
        <div className='min-h-screen py-10 space-y-4'>
            <div className='flex flex-col items-center justify-center gap-3.5 '>
                <h2 className='text-4xl font-bold'>Active Auctions</h2>
                <p className='text-gray-600'>Discover and bid on extraordinary items</p>
            </div>

            <div className='flex gap-20 mx-20'>
                <div className='w-4/6'>
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">Item</th>
                                <th className="px-4 py-2 border">Product</th>
                                <th className="px-4 py-2 border">Current Bid</th>
                                <th className="px-4 py-2 border">Time Left</th>
                                <th className="px-4 py-2 border">Bid Now</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bids.map((bid) => (
                                <tr className="text-center">
                                    <td className="px-4 py-2 border">
                                        <img className="w-20 h-16 object-cover" src={bid.image} alt="" />
                                    </td>
                                    <td className="px-4 py-2 border">{bid.title}</td>
                                    <td className="px-4 py-2 border">${bid.currentBidPrice}</td>
                                    <td className="px-4 py-2 border">{bid.timeLeft}</td>
                                    <td className="px-4 py-2 border">
                                        <button>
                                            <IoIosHeartEmpty size={25} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-2/6">
                            hello
                </div>
            </div>
        </div>
    );
};

export default Auction;
