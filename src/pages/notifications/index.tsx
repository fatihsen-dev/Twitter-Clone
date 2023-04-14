import TrendsForYou from "@/components/TrendsForYou";
import WhoToFollow from "@/components/WhoToFollow";
import Policy from "@/components/Policy";
import Layout from "@/layout";
import Head from "next/head";
import Search from "@/components/Search";
import { AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";

export default function Notifications() {
   const [active, setActive] = useState<1 | 2 | 3>(1);

   return (
      <>
         <Head>
            <title>Notifications / Twitter</title>
         </Head>
         <Layout>
            <div className="rightbar flex-1 h-full border-darkTwo relative flex flex-col max-w-2xl border-x">
               <div className="border-b border-darkTwo">
                  <div className="flex items-center justify-between gap-8 p-4 py-1.5">
                     <h1 className="text-xl font-semibold">Notifications</h1>
                     <button className="text-xl hover:bg-darkTwo p-2 rounded-full transition-all">
                        <AiOutlineSetting />
                     </button>
                  </div>
                  <div className="flex">
                     <div onClick={() => setActive(1)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 1 ? "font-medium" : "text-textGray"}`}>All</span>
                           {active === 1 && <div className="absolute w-full h-1 bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                     <div onClick={() => setActive(2)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 2 ? "font-medium" : "text-textGray"}`}>Verified</span>
                           {active === 2 && <div className="absolute w-full h-1 bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                     <div onClick={() => setActive(3)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 3 ? "font-medium" : "text-textGray"}`}>Mentions</span>
                           {active === 3 && <div className="absolute w-full h-1 bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                  </div>
               </div>
               <ul>
                  <li className="flex p-5 gap-4 hover:bg-[#080808] cursor-pointer border-b border-darkTwo">
                     <IoMdPerson className="text-3xl text-twitterBlue" />
                     <div className="flex flex-col gap-1">
                        <Image className="rounded-full w-8" src="https://pbs.twimg.com/profile_images/1493692146037178372/xtjpTYJq_400x400.jpg" alt="" width={50} height={50} />
                        <p>
                           <a className="font-medium hover:underline" href="#">
                              Developer Avocado
                           </a>
                           🥑 followed you
                        </p>
                     </div>
                  </li>
                  <li className="flex p-5 gap-4 hover:bg-[#080808] cursor-pointer border-b border-darkTwo">
                     <AiOutlineTwitter className="text-4xl" />
                     <div className="flex flex-col text-white/90">
                        <p>There was a login to your account @fatihsendev from a new device on Apr 11, 2023. Review it now.</p>
                     </div>
                  </li>
                  <li className="flex p-5 gap-4 hover:bg-[#080808] cursor-pointer border-b border-darkTwo">
                     <IoMdPerson className="text-3xl text-twitterBlue" />
                     <div className="flex flex-col gap-1">
                        <Image className="rounded-full w-8" src="https://pbs.twimg.com/profile_images/1631973890409807879/BU5d_P8H_400x400.jpg" alt="" width={50} height={50} />
                        <p>
                           <a className="font-medium hover:underline" href="#">
                              İskender ama Büyük Olan
                           </a>
                           🥑 followed you
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="h-full sticky ml-4 2xl:flex xl:flex lg:flex 2xl:w-[360px] lg:w-[360px] w-[300px] hidden">
               <div className="rightbar pb-5 flex flex-col gap-3 fixed 2xl:w-[360px] lg:w-[360px] w-[300px] top-0 h-full overflow-auto">
                  <Search />
                  <div className="rightbar flex flex-col gap-3">
                     <li>
                        <TrendsForYou />
                     </li>
                     <li>
                        <WhoToFollow />
                     </li>
                     <li>
                        <Policy />
                     </li>
                  </div>
               </div>
            </div>
         </Layout>
      </>
   );
}
