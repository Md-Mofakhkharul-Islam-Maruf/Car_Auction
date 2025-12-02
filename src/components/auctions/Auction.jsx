import { useEffect, useState } from "react";
import Tr from "../tr/Tr";

const Auction = () => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((res) => setBids(res));
    }, [])

    const [secondDiv, setSecondDiv]= useState({})
     const handleLeft = (bid) => {
        setSecondDiv(bid)
    }
    const {currentBidPrice, image, timeLeft, title, id} = secondDiv
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
                <p>{secondDiv.id}</p>
                <p>{currentBidPrice}</p>
                <p>{timeLeft}</p>
                <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Auction;
