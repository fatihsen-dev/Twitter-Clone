import Layout from "@/layout";
import Search from "@/components/Search";
import TrendsForYou from "@/components/TrendsForYou";
import WhoToFollow from "@/components/WhoToFollow";
import Head from "next/head";
import Policy from "@/components/Policy";
import { data } from "..";
import Post from "@/components/Post";
import { BsThreeDots } from "react-icons/bs";

export default function index() {
   return (
      <>
         <Head>
            <title>Bookmarks / Twitter</title>
         </Head>
         <Layout>
            <div className="rightbar flex-1 h-fit border-x border-darkTwo relative flex flex-col max-w-2xl">
               <div className="flex justify-between items-center p-3 px-4">
                  <div className="flex flex-col">
                     <h1 className="text-xl font-bold">Bookmarks</h1>
                     <span className="text-textGray text-sm">@fatihsendev</span>
                  </div>
                  <button className="hover:bg-darkTwo p-2 rounded-full">
                     <BsThreeDots />
                  </button>
               </div>
               <div className="flex-1 bg-black">
                  {data.map((dt, index) => (
                     <Post key={index} data={dt} />
                  ))}
               </div>
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
