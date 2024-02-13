import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";




const inter = Inter({ subsets: ["latin"] });


interface twitterButtons{

  title: string,
  icon: React.ReactNode

}

const listItems : twitterButtons[]=[
  {
     title: "Home",
     icon: <IoHomeOutline />
  },
  {
     title: "Explore",
     icon: <FaHashtag />
  },
  {
     title: "Notifications",
     icon: <FaRegBell />

  },
  {
     title: "Profile",
     icon: <FaRegUserCircle />


  },
  {
     title: "Messages",
     icon: <FaRegEnvelope />



  },
  {
     title: "Bookmarks",
     icon: <IoBookmarksOutline />




  },
]
export default function Home() {
  return (
 <div className="grid grid-cols-12 h-screen w-screen pl-24">
  <div className="col-span-3 pt-4 pl-11">
<div className=" hover:bg-gray-700 p-2 w-fit h-fit rounded-full">  
  <FaXTwitter className="text-3xl cursor-pointer"/>
</div>
<div className="mt-4 ">
  <ul >
     {listItems.map((item)=>(<li className="flex justify-start items-center gap-2 mt-4 cursor-pointer hover:bg-gray-700 p-2 w-fit h-fit rounded-full" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
  </ul>
  </div>
  <div>
    <button className="bg-[#1D9BF0] w-fit px-16 py-2 rounded-full mt-4">Tweet</button>
  </div>
  </div>
  <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-800"></div>
  <div className="col-span-3"></div>
 </div>
  );
}
