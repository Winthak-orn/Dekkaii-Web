import React from 'react';
import './DetailCard.css';

const DetailCard = ({ isOpen , onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className='detail-overlay ' onClick={onClose}>
            <div className='detail-content' onClick={(e) => e.stopPropagation()}>
                <button className='detail-close' onClick={onClose}>&times;</button>
                <div className="detail-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DetailCard;