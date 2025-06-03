import React from 'react';
import BottomMainRight from './BottomMainRight';

const MainRight = ({ name }) => {
    return (
        <div className="border p-4">
            <h3 className="text-lg font-medium mb-2">MainRight Component</h3>
            <BottomMainRight name={name} />
        </div>
    );
};

export default MainRight;
