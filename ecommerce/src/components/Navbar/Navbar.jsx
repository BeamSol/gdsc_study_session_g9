import React from 'react';
import Logo from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    { id: '1', name: 'Home', link: 'link1.html' },
    { id: '2', name: 'Top Rated', link: 'link2.html' },
    { id: '3', name: 'Catagories', link: 'link2.html' },
    { id: '4', name: 'Latest Arrivals', link: 'link3.html' },
    { id: '5', name: 'Products', link: 'link4.html' },
  ];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white
    dark:bg-gray-900 dark:text-white duration=200
    relative z-40">
        <div className="bg-primary/50 py-2 ">
            <div className="container flex justify-between items-center">
                <div >
                   <a href=" " 
                   className="font-bold text-1xl sm:text-2xl flex gap-2">
                    <img src={Logo} alt="Logo" 
                    className="w-12"
                    /> Bamsy
                   </a>
                </div>
                <div className='flex justify-betwen items-center gap-4'>
                    <div className="relative group hidden
                    sm:block">
                        <input type="text" placeholder="   search" 
                        className="w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] 
                        transition-all duration-300 
                        rounded-full border border-gray-300 px-2 py-1 
                        focus-outline-none foucs-border-1 focus:boder-primary 
                        dark:border-gray-500 dark:bg-gray-800 "
                        />
                        <IoMdSearch
                         className="text-gray-500
                          group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                <button 
                onClick={()=> alert(
                    "Ordering not available yet"
                )}
                className="bg-gradient-to-r from-primary
                 to-secondary translation-all duration-200 
                 text-white py-1 px-4 rounded-full flex 
                 items-center gap-3 group"
                 >
                    <span className="group-hover:block
                    hidden transition-all duration-200">
                        Order
                    </span>
                    <FaCartShopping 
                    className='text-xl text-white 
                    drop-shadow-sm cursor-pointer'/>
                </button>
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                    Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link}
                            className='inline-block px-4 hover:text-primary 
                            duration-200'
                            >{data.name}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar