import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Tr = ({ bid, handleLeft }) => {
    const { currentBidPrice, image, timeLeft, title} = bid

    return (
        <>
            <tr className="text-center">
                <td className="px-4 py-2 border">
                    <img className="w-20 h-16 object-cover" src={image} alt="" />
                </td>
                <td className="px-4 py-2 border">{title}</td>
                <td className="px-4 py-2 border">${currentBidPrice}</td>
                <td className="px-4 py-2 border">{timeLeft}</td>
                <td className="px-4 py-2 border">
                    <button onClick={() => handleLeft(bid)}>
                        <FaHeart size={25} />
                    </button>
                </td>
            </tr>

        </>
    );
};

export default Tr;