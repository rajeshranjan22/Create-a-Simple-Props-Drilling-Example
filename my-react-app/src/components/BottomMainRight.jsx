import React from 'react';

const BottomMainRight = ({ name }) => {
    return (
        <div className="border p-4">
            <p className="text-md">👋 Hello, <strong>{name || 'Guest'}</strong>!</p>
        </div>
    );
};

export default BottomMainRight;
