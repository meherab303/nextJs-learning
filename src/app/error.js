'use client';

import Link from "next/link";



const GlobalError = ({error,reset}) => {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center  text-red-500">something went wrong</h1>
            <h1 className="text-3xl text-center text-red-500">{error.message}</h1>
            <div className="flex gap-5">
            <button onClick={()=>reset()} className="btn btn-warning my-5">try again</button>
           <Link href='/'> <button  className="btn btn-warning my-5">Home</button></Link>
           </div>
        </div>
    );
};

export default GlobalError;


// kono karone fetching off hoye gele othoba server off hoye gele reset function kaj kore tkhn .