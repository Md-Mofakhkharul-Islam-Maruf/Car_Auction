import { useEffect, useState } from "react";
import Tr from "../tr/Tr";
import { CiHeart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Auction = () => {
    const [bids, setBids] = useState([]);
    console.log(bids)

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((res) => setBids(res));
    }, [])

    const [secondDiv, setSecondDiv] = useState({})
    const handleLeft = (bid) => {
        setSecondDiv(bid)
    }
    const { currentBidPrice, image, timeLeft, title, id, bidsCount } = secondDiv
    return (
        <div className="min-h-screen py-10 space-y-4">
            <div className="flex flex-col items-center justify-center gap-3.5 ">
                <h2 className="text-4xl font-bold">Active Auctions</h2>
                <p className="text-gray-600">Discover and bid on extraordinary items</p>
            </div>

            <div className="flex gap-20 mx-20">
                <div className="w-4/6">
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
                            {
                                bids.map(bid => <Tr key={bid.id} bid={bid} handleLeft={handleLeft}></Tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div className="w-2/6">
                    <div className="flex gap-2 items-center text-blue-500 justify-center">
                        <CiHeart size={25} />
                        <p className="text-2xl font-semibold mb-1">Favorite Items</p>
                    </div>
                    <hr className="text-blue-500 md:mt-2" />

                    {image ?
                        <div className="flex items-center gap-2 justify-center">
                            <div className="flex m-2">
                                <img className="w-22 h-18 object-cover rounded-xl border" src={image} alt="" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="">${currentBidPrice}</p>
                                <p>Bids: {bidsCount}</p>
                            </div>
                            <button className="text-red-500 font-extrabold text-xl">X</button>
                        </div>
                        : <div className="text-center m-5 text-orange-500">
                            <h3>No favorite yet</h3>
                            <p>Click the heart icon on any Item to add it to our favorite</p>
                            <hr />
                        </div>}
                    {/* <table>
                        <thead>
                            <tr>
                                <td><img className="w-24" src={image} alt="" /></td>
                                <td>{`${title, bidscount}`}</td>
                                <td>{}<RxCross1 /></td>
                            </tr>
                        </thead>
                    </table> */}
                    {/* <p>{id}</p>
                    <p>{currentBidPrice}</p>
                    <p>{timeLeft}</p>
                    <img src={image} alt="" />
                    <p>{title}</p> */}
                    {/* {image ? (
                        <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow">
                            <img className="w-24 h-20 object-cover rounded" src={image} alt="" />

                            <div className="flex-1">
                                <h3 className="font-semibold">{title}</h3>
                                <p className="text-sm text-gray-600">
                                    Bids: {bidsCount}
                                </p>
                            </div>

                            <button className="text-red-500 hover:text-red-700">
                                <RxCross1 size={20} />
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center">No favorite selected</p>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Auction;
