import React, { useCallback } from "react";
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
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { gql_client } from "@/client/api";
import { verifyGoogleTokenUser_query } from "@/graphql/queries/user";
import { GraphQLClient } from "graphql-request";
// import { useCurrentUser } from "@/hooks/user"; 


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
  //  const { user } = useCurrentUser();
  //  console.log(user);
   
   const handleLoginwithGoogle = useCallback(
      async (cred: CredentialResponse) => {
        const google_token = cred.credential;
        if (!google_token) return toast.error(`Google token not found`);
    
        try {
          const { verifyGoogleToken } = await gql_client.request(
            verifyGoogleTokenUser_query,
            { token: google_token }
          );
    
          if (verifyGoogleToken) {
            window.localStorage.setItem("tw_token", verifyGoogleToken);
            console.log("Token verified successfully:", verifyGoogleToken);
            toast.success("Verified Success");
          } else {
            throw new Error("Token verification failed");
          }
        } catch (error) {
          console.error("Error verifying Google token:", error);
          toast.error("Error verifying Google token");
        }
      },
      []
    );
    
   
  

   // const handleLoginwithGoogle = useCallback(async (cred: CredentialResponse) => {
   //    const google_token = cred.credential;
   //    if (!google_token) return toast.error("NO!");
      
      
   //    const {verifyGoogleToken} = await gql_client.request(verifyGoogleTokenUser_query,{token : google_token})
   //    toast.success("YES!");
   //      console.log("sadsadasd",verifyGoogleToken);
   //      if(verifyGoogleToken){
   //       window.localStorage.setItem("tw_token",verifyGoogleToken)
   //      }
   //  }, []);

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
  <div className="col-span-3 h-full ">
      <div className="h-40 rounded-lg bg-gray-800 p-3 mt-4 ml-4">
       <h1 className="mb-2 flex justify-center items-center">New to Twitter</h1>
   <div className=" flex justify-center ">
      <GoogleLogin onSuccess={handleLoginwithGoogle}/>
   </div>
   </div>
  </div>
 </div>
  );
}
