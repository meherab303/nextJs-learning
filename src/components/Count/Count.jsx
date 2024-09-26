"use client"
import  { useState } from 'react';
const Count = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div className='text-center mt-4 text-2xl'>Count:{count}</div>
    <div className='text-center mt-4'>
    <button className='btn btn-warning p-2 ' onClick={()=>setCount(count+1)}>Increase</button>
    <button className='btn btn-warning ml-2'  onClick={()=>setCount(count-1)}>Deccrease</button>
    </div>
        </div>
    );
};

export default Count;