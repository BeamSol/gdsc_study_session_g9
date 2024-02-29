import React from 'react'
import img1 from "../../assets/latest/img1.jpg";
import img2 from "../../assets/latest/img2.jpg";
import img3 from "../../assets/latest/img3.jpg";


const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Habesha kemis",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus iusto cupiditate, laborum laudantium dicta exercitationem obcaecati at libero quidem?"
    },
    {
        id: 2,
        img: img2,
        title: "Cotten Jacket",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus iusto cupiditate, laborum laudantium dicta exercitationem obcaecati at libero quidem?"
    },
    {
        id: 3,
        img: img3,
        title: "Shoe",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus iusto cupiditate, laborum laudantium dicta exercitationem obcaecati at libero quidem?"
    }
]

const LatestArrivals = () => {
  return (
    <div>
        <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <h1 data-aos="fade-up" className=' text-primary text-3xl  font-bold'>Latest Arrivals</h1>
                <p  data-aos="fade-up" className='text-xs  text-gray-400'> Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Praesentium nostrum 
                    tempore at.</p>
        </div>
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 
        md:gap-5 place-items-center'
        >
            {ProductsData.map((data)=>(
            <div className='
            data-aos="zoom-in"
            rounded-2xl bg-white
            dark:bg-gray-800 hover:bg-black/80
             dark:hover:bg-primary hover:text-white relative 
             shadow-xl duration-300 group max-w-[300px]'>
                <div className=''>
                    <img className='max-w-[140px] block mx-auto 
                    transform  -translate-y-5  group-hover:scale-105 duration-300
                    drop-shadow-md '  src={data.img} alt="" />
                </div>
                <div>
                    <div className='p-4 text-center'>
                        <div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300
                            text-sm line-clamp-2'>{data.description}</p>
                            <button className='bg-primary py-2 px-4
                            hover:scale-105 duration-full rounded-full
                            mt-4 group-hover:bg-white group-hover:text-primary
                           onClick={handleOrderPopup}'>Order Now</button>
                            </div>
                    </div>
                </div>
            </div>
              
            ))}
        </div>
        </div>
    </div>
  )
}

export default LatestArrivals