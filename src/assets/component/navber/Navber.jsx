import React, { useState } from 'react';
import Link from '../Link/Link';
import { IoMenu } from "react-icons/io5";
import { AiOutlineX } from "react-icons/ai";
const navigationLinks = [
  { id: 1, name: "Dashboard", path: "/dashboard" },
  { id: 2, name: "Profile", path: "/profile" },
  { id: 3, name: "Settings", path: "/settings" },
  { id: 4, name: "Messages", path: "/messages" },
  { id: 5, name: "Logout", path: "/logout" }
];
const Navber = () => {

  const [menu, setMenu] = useState(false)
  const links = navigationLinks.map((navData, index) => <Link key={index} navData={navData}></Link>)
  return (
    <div>
      <div className='flex justify-between mx-10 my-10'>
        <span className='flex items-center gap-4' onClick={() => setMenu(!menu)}>
          {
            menu ? <AiOutlineX className='md:hidden' size={30} /> : <IoMenu size={30} className='md:hidden' />
          }
          <ul className={`md:hidden absolute duration-1000
           ${menu ? 'top-36' : '-top-96'}
              bg-cyan-400 p-4 rounded-2xl left-16`}>
            {
              links
            }
          </ul>
          <h3 className='md:flex hidden text-4xl text-cyan-300 font-extrabold'>My Navber</h3>
        </span>

        <ul className='md:flex hidden'>
          {
            links
          }

        </ul>
        <button className='btn bg-cyan-300 '> Sing in</button>
      </div>
    </div>
  );
};

export default Navber;