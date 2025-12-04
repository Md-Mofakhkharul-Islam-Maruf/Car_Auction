import { useEffect, useState } from "react";
import Tr from "../tr/Tr";
import { CiHeart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auction = () => {
    const [bids, setBids] = useState([]);
    const [favorite, setFavorite] = useState([]);

    // Fetch bids from data.json once
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((res) => setBids(res));
    }, []);

    // Add to favorite if not already added
    const handleLeft = (bid) => {
        const exists = favorite.find((item) => item.id === bid.id);
        if (!exists) {
            setFavorite([...favorite, bid]);
            toast.success(`${bid.title} added to favorites!`);
        } else {
            toast.info(`${bid.title} is already in favorites`);
        }
    };

    // Remove from favorite
    const handleRemove = (id) => {
        const removedItem = favorite.find((item) => item.id === id);
        setFavorite(favorite.filter((item) => item.id !== id));
        toast.error(`${removedItem.title} removed from favorites`);
    };

    // Calculate total bids amount from favorite array
    const totalPrice =
        favorite.length > 0
            ? favorite.reduce((total, item) => total + item.currentBidPrice, 0)
            : 0;

    return (
        <div className="min-h-screen py-10 space-y-4">
            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={2000} />

            <div className="flex flex-col items-center justify-center gap-3.5">
                <h2 className="text-4xl font-bold">Active Auctions</h2>
                <p className="text-gray-600">Discover and bid on extraordinary items</p>
            </div>

            <div className="flex gap-20 mx-20">
                {/* Auction Table */}
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
                            {bids.map((bid) => (
                                <Tr key={bid.id} bid={bid} handleLeft={handleLeft} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Favorite Sidebar */}
                <div className="w-2/6">
                    <div className="flex gap-2 items-center text-blue-500 justify-center">
                        <CiHeart size={25} />
                        <p className="text-2xl font-semibold mb-1">Favorite Items</p>
                    </div>
                    <hr className="text-blue-500 md:mt-2" />

                    {favorite.length > 0 ? (
                        favorite.map((fav) => (
                            <div
                                key={fav.id}
                                className="flex items-center gap-4 bg-gray-100 px-2 rounded-lg shadow m-2"
                            >
                                <img
                                    className="w-20 h-16 object-cover rounded"
                                    src={fav.image}
                                    alt={fav.title}
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{fav.title}</h3>
                                    <p className="text-sm text-gray-600">
                                        $ {fav.currentBidPrice}
                                    </p>
                                    <p className="text-sm text-gray-600">Bids: {fav.bidsCount}</p>
                                </div>

                                <button
                                    onClick={() => handleRemove(fav.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <RxCross1 size={20} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className="text-gray-400 text-center">No favorite selected</p>
                            <p className="text-sm mb-3">
                                Click the heart icon on any item to add it to your favorite
                            </p>
                            <hr className="border-orange-300" />
                        </div>
                    )}

                    <p>Total bids amount: {totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Auction;
