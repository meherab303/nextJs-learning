import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const Adminlayout = ({children}) => {
    return (
        <div className='flex '>
            <div className='mb-8'><Sidebar></Sidebar></div>
            <div className='flex-1 text-center'>{children}</div>
        </div>
    );
};

export default Adminlayout;