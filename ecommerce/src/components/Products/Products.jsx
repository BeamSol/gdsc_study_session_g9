import React from 'react';
import Product1 from "../../assets/Products/Product1.jpg";
import Product2 from "../../assets/Products/Product2.jpg";
import Product3 from "../../assets/Products/Product3.webp";
import Product4 from "../../assets/Products/Product4.jpg";
import Product5 from "../../assets/Products/Product5.webp";
import {FaStar} from "react-icons/fa6";

const ProductsData =[
    {
        id: 1,
        img: Product1,
        title: "Product 1",
        color: "White",
        rating: 4.45
    },
    {
        id: 2,
        img: Product2,
        title: "Product 2",
        color: "Red",
        rating: 4.9
    },
    {
        id: 3,
        img: Product3,
        title: "Product 3",
        color: "Black",
        rating: 4.75
    },
    {
        id: 4,
        img: Product4,
        title: "Product 4",
        color: "Brown",
        rating: 4.25
    },
    {
        id: 5,
        img: Product5,
        title: "Product 5",
        color: "white",
        rating: 5
    }
]

const Products = () => {
  return (
    <div className='mt-14 mb-10'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <h1 data-aos="fade-up" className=' text-primary text-3xl  font-bold'>Our Products</h1>
                <p  data-aos="fade-up" className='text-xs  text-gray-400'> Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Praesentium nostrum 
                    tempore at.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grd-cols-3 md:grid-cols-4 
                lg:grid-cols-5 place-items-center gap-5'>
                    {
                        ProductsData.map((data) => (
                          <div
                          data-aos="fade-up"
                          data-aos-delay={data.aosDelay}
                          key={data.id} className='space-y-3'
                          >
                            <img src={data.img} alt=""
                            className='h-[220px] w-[150px] 
                            object-cover rounded-md' 
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                          </div>  
                        ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products