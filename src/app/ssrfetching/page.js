import Image from "next/image";
import Link from "next/link";


const AllShoes = async() => {
    const response=await fetch('http://localhost:8000/shoes',{
        cache:"no-store"
    })
    const shoes=await response.json()
   
    return (
       <div className="text-center">
         <h1 className='text-2xl text-center '>All Shoes</h1>
         <div className='grid grid-cols-3 gap-8 m-8'>
            
            {
                shoes?.map((shoe)=>(
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
        <Link href='/ssgfetching'><button className="btn btn-warning my-5">see less</button></Link>
       </div>
    );
};

export default AllShoes;



/* 
----how it works ---
client jokhon kono route e request korbe k e .database theke ekdm update date fetch kore response hishebe server e ashbe .server oi datar ba content er html file create kore browser e view korbe.eikhane kono data cache hoye thakbena.jotober e route e request hbe totobar ei kajtai hbe.ebol tokhon server e request jabe .server theke request jabe database e .database theke ekdm update date fetch kore response hishebe server e ashbe .server oi datar ba content er html file create kore browser e view korbe.eikhane kono data cache hoye thakbena.jotober e route e request hbe totobar ei kajtai hbe.

*/