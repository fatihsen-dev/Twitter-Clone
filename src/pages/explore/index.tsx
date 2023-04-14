import WhoToFollow from "@/components/WhoToFollow";
import Policy from "@/components/Policy";
import Layout from "@/layout";
import Head from "next/head";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Post from "@/components/Post";
import Search from "@/components/Search";
import { data } from "..";

export default function index() {
   return (
      <>
         <Head>
            <title>Explore / Twitter</title>
         </Head>
         <Layout>
            <div className="rightbar flex-1 h-fit border-x border-darkTwo relative flex flex-col max-w-2xl">
               <div className="flex items-center justify-between gap-8 p-4 py-1.5">
                  <Search />
                  <button className="text-xl hover:bg-darkTwo p-2 rounded-full transition-all">
                     <AiOutlineSetting />
                  </button>
               </div>
               <div className="bg-black w-full overflow-hidden border-b border-darkTwo">
                  <div className="p-3 px-3.5">
                     <h2 className="text-xl font-bold">Trends for you</h2>
                  </div>
                  <ul>
                     <li className="flex justify-between px-3.5 items-start hover:bg-[#080808] cursor-pointer py-2">
                        <div className="flex flex-col leading-5">
                           <span className="text-sm text-textGray">Trending in Turkey</span>
                           <b className="font-medium">#Secim2023</b>
                           <span className="text-sm text-textGray">49.3K Tweets</span>
                        </div>
                        <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                           <BsThreeDots />
                        </button>
                     </li>
                     <li className="flex justify-between px-3.5 items-start hover:bg-[#080808] cursor-pointer py-2">
                        <div className="flex flex-col leading-5">
                           <span className="text-sm text-textGray">Trending in Turkey</span>
                           <b className="font-medium">Serenay</b>
                           <span className="text-sm text-textGray">1,440 Tweets</span>
                        </div>
                        <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                           <BsThreeDots />
                        </button>
                     </li>
                     <li className="flex justify-between px-3.5 items-start hover:bg-[#080808] cursor-pointer py-2">
                        <div className="flex flex-col leading-5">
                           <span className="text-sm text-textGray">Trending in Turkey</span>
                           <b className="font-medium">Şevket Çoruh</b>
                           <span className="text-sm text-textGray">2,904 Tweets</span>
                        </div>
                        <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                           <BsThreeDots />
                        </button>
                     </li>
                     <li className="flex justify-between px-3.5 items-start hover:bg-[#080808] cursor-pointer py-2">
                        <div className="flex flex-col leading-5">
                           <span className="text-sm text-textGray">Trending in Turkey</span>
                           <b className="font-medium">Evlenmek</b>
                           <span className="text-sm text-textGray">8,906 Tweets</span>
                        </div>
                        <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                           <BsThreeDots />
                        </button>
                     </li>
                     <li className="flex justify-between px-3.5 items-start hover:bg-[#080808] cursor-pointer py-2">
                        <div className="flex flex-col leading-5">
                           <span className="text-sm text-textGray">Trending in Turkey</span>
                           <b className="font-medium">Asgari</b>
                           <span className="text-sm text-textGray">27.2K Tweets</span>
                        </div>
                        <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                           <BsThreeDots />
                        </button>
                     </li>
                  </ul>
                  <div className="px-3.5 py-4 cursor-pointer hover:bg-gray-500/10">
                     <span className="text-twitterBlue">Show more</span>
                  </div>
               </div>
               <div className="flex-1 bg-black">
                  {data.map((dt, index) => (
                     <Post key={index} data={dt} />
                  ))}
               </div>
            </div>
            <div className="h-full sticky ml-4 2xl:flex xl:flex lg:flex 2xl:w-[360px] lg:w-[360px] w-[300px] hidden">
               <div className="rightbar pb-5 flex flex-col gap-3 fixed 2xl:w-[360px] lg:w-[360px] w-[300px] top-0 h-full overflow-auto">
                  <div className="rightbar flex flex-col gap-3 mt-3">
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
