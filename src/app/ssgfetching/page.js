import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const NextJsDataFetching = async() => {
 
    const response=await fetch('http://localhost:8000/shoes',{
        next:{
            revalidate:5
        }
    })
    const shoes=await response.json()
    
    return (
        <div className='text-center'>
          <div className='grid grid-cols-3 gap-8 m-8'>
            
            {
                shoes?.slice(0,3).map((shoe)=>(
                <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                      <Image
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" height={400} width={400} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                      {shoe.title}
                        <div className="badge badge-warning">NEW</div>
                      </h2>
                      <p>{shoe.description}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{shoe.category}</div>
                        <div className="badge badge-outline">{shoe.price}$</div>
                      </div>
                    </div>
                  </div>
                    
                ))
            }
        </div>
        <Link href='/ssrfetching'><button className='btn btn-warning'>see more</button></Link>
        </div>
    );
};

export default NextJsDataFetching;

/*
1.nextJs e fetching er jnno must server component hote hbe.client component e fetch kaj korbena
2.must asynce component hote hbe fetching er jnno
3.{cache:'force-cache'} dile content gula cache hoye thakbe and build korar shomoi static content er html file crate kore rakhbe.ei property na dile bydefault e hoye jabe.

*/