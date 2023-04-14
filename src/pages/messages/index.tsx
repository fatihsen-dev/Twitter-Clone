import Layout from "@/layout";
import Head from "next/head";
import { AiOutlineSetting } from "react-icons/ai";
import { BsSendPlus } from "react-icons/bs";

export default function index() {
   return (
      <>
         <Head>
            <title>Messages / Twitter</title>
         </Head>
         <Layout>
            <div className="border-l border-darkTwo flex-[0.6] 2xl:inline-block lg:inline-block hidden">
               <div className="flex items-center p-2 px-4">
                  <h1 className="text-xl font-semibold">Messages</h1>
                  <button className="text-xl hover:bg-darkTwo ml-auto p-2 rounded-full transition-all">
                     <AiOutlineSetting />
                  </button>
                  <button className="text-xl hover:bg-darkTwo p-2 rounded-full transition-all">
                     <BsSendPlus />
                  </button>
               </div>
               <div className="px-8 mt-5">
                  <h1 className="text-3xl font-bold mb-2">Welcome to your inbox!</h1>
                  <p className="text-textGray leading-5">Drop a line, share Tweets and more with private conversations between you and others on Twitter.</p>
                  <button className="bg-twitterBlue text-lg font-medium mt-4 text-white rounded-full py-3 px-6">Write a message</button>
               </div>
            </div>
            <div className="flex-1 border-x border-darkTwo flex justify-center items-center">
               <div className="px-8 mt-5 w-96">
                  <h1 className="text-3xl font-bold mb-2">Select a message</h1>
                  <p className="text-textGray leading-5">Choose from your existing conversations, start a new one, or just keep swimming.</p>
                  <button className="bg-twitterBlue text-lg font-medium mt-4 text-white rounded-full py-3 px-6">New message</button>
               </div>
            </div>
         </Layout>
      </>
   );
}
