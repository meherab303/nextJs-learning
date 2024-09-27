import Image from 'next/image';
import React from 'react';

const GalleryImage = () => {
    return (
        <div>
            <h1 className='text-2xl text-center'>Regular Image</h1>
           <img src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80' alt='plush image' width={500} height={500} className='mx-auto'></img> 
           <h1 className='text-2xl text-center'>Next.Js Image</h1>
           <Image src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'width={500} height={500} alt='next image' className='mx-auto'/>
        </div>
    );
};

export default GalleryImage;