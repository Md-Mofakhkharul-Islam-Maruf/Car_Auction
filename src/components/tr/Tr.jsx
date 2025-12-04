import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Tr = ({ bid, handleLeft }) => {
    const { currentBidPrice, image, timeLeft, title } = bid;

    // Local state for heart click
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        handleLeft(bid);       // Add to favorite in parent
        setClicked(true);      // Turn heart red locally
    };

    return (
        <tr className="text-center">
            <td className="px-4 py-2 border">
                <img className="w-20 h-16 object-cover" src={image} alt={title} />
            </td>
            <td className="px-4 py-2 border">{title}</td>
            <td className="px-4 py-2 border">${currentBidPrice}</td>
            <td className="px-4 py-2 border">{timeLeft}</td>
            <td className="px-4 py-2 border">
                <button onClick={handleClick}>
                    <FaHeart size={25} color={clicked ? "red" : "gray"} />
                </button>
            </td>
        </tr>
    );
};

export default Tr;
