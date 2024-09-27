import Image from 'next/image';
import React from 'react';
import plushImage from '../../assets/plush.avif'


const GalleryImage = () => {
    return (
        <div>
            <h1 className='text-2xl text-center'>Regular Image</h1>
           <img src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80' alt='plush image' width={500} height={500} className='mx-auto'></img> 
           <h1 className='text-2xl text-center'>Next.Js Image</h1>
           <Image src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'width={500} height={500} alt='next image' className='mx-auto'/>
           <h1 className='text-2xl text-center'>Local Next.Js Image</h1>
           <Image src={plushImage} width={500} height={500} alt='next image' className='mx-auto'/>
        </div>
    );
};

export default GalleryImage;

/* 
1.local image view korate hole next.js er Image component use kortei hbe .<img> tag e local image support korena
2.external image view er jnno domain name config korte hbe .
next.config.mjs file ke rename kore next.config.js korte hbe and oikhane domain name include korte hbe 
shob domain support er jnno
 remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
use korte hbe
3.next.js er Image compo te height width mandatory property 

*/