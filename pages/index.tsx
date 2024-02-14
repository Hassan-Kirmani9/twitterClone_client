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
import FeedCard from "@/components/feedCard";
import { CgMoreO } from "react-icons/cg";
import { GoVerified } from "react-icons/go";






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
  {
     title: "Twitter Blue ",
     icon: <GoVerified />




  },
  {
     title: "More",
     icon: <CgMoreO />




  },
]
export default function Home() {
  return (
    <div className="grid grid-cols-12 max-w-screen-xl mx-auto h-screen w-full pl-24">
  <div className="col-span-3 pt-4 pl-11 h-full ">
<div className=" hover:bg-gray-700 p-2 w-fit h-fit rounded-full">  
  <FaXTwitter className="text-3xl cursor-pointer"/>
</div>
<div className="mt-4 text-l">
  <ul >
     {listItems.map((item)=>(<li className="flex justify-start items-center gap-2 mt-2 cursor-pointer hover:bg-gray-700 p-2 w-fit h-fit rounded-full" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
  </ul>
  </div>
  <div>
    <button className="bg-[#1D9BF0] w-fit px-16 py-2 rounded-full mt-4">Tweet</button>
  </div>
  </div>
  <div className="col-span-5 border-gray-800 border ">
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>

    
  </div>
  <div className="col-span-3 h-full "></div>
 </div>
  );
}
