import Image from 'next/image';
import React from 'react';
import { BiMessageAlt } from "react-icons/bi";
import { LiaRetweetSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import { GoVerified } from "react-icons/go";






// ... other imports ...

const FeedCard: React.FC = () => {
    return (
      <div className='grid grid-cols-12 border-b-[1px] border-gray-800 pl-2 mt-2'>
        <div className='col-span-1 p-[3px] mt-3  pt-4  pr-2 '>
          <Image width={50} height={50} alt='img' className='rounded-full  relative bottom-3' src="https://secure.gravatar.com/avatar/2f555f36a8c3fa3a7a0ec1fe321726e001845530016e9e7e69af786ab8e3d4fd?s=128&d=identicon"/>
        </div> 
        <div className='col-span-11'>
          <div>
            <h5 className="mt-3 ">Name</h5>
            <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi molestiae expedita necessitatibus autem voluptatibus cupiditate delectus sunt cumque similique, quidem dicta minus eum repudiandae, enim odit molestias laboriosam maxime.?</p>
          </div>
          <div className='flex justify-evenly items-center mt-6 mr-14 pb-4'>
            <div>
              <BiMessageAlt/>
            </div>
            <div>
              <LiaRetweetSolid />
            </div>
            <div>
              <IoIosHeartEmpty />
            </div>
            <div>
              <LuUpload />
            </div>
          
          </div>
        </div>
      </div>
    );
  }
  

  
export default FeedCard;