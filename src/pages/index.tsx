import Layout from "@/layout";
import Search from "@/components/Search";
import TrendsForYou from "@/components/TrendsForYou";
import WhoToFollow from "@/components/WhoToFollow";
import Head from "next/head";
import Policy from "@/components/Policy";
import Form from "@/components/Form";
import Post from "@/components/Post";
import { useState } from "react";

export const data = [
   {
      avatar: "https://pbs.twimg.com/profile_images/1598959528518643713/aWdwBYxv_400x400.jpg",
      name: "trash",
      username: "trashh_dev",
      date: "12m",
      text: "did you know you can use key remapping to filter out types you don't want? here we can filter out any property that isn't of type number. its pretty handy.",
      image: "https://pbs.twimg.com/media/FtjOaquaEAE5dyu?format=jpg&name=large",
      comment: 16,
      retweet: 19,
      like: "209",
      view: "26.7K",
      Verified: true,
   },
   {
      avatar: "https://pbs.twimg.com/profile_images/1117224716090204160/JGRnkbHy_400x400.jpg",
      name: "Sinemori",
      username: "sinemori",
      date: "20h",
      text: "HBO, The Conjuring evreninde geçecek bir dizi için çalışmalara başladı 👀",
      image: "https://pbs.twimg.com/media/Fth_FdjXwBQ5mx4?format=jpg&name=large",
      comment: 76,
      retweet: 115,
      like: "1,605",
      view: "127.2K",
      Verified: true,
   },
   {
      avatar: "https://pbs.twimg.com/profile_images/1558488044541546496/F0kS6Z9p_400x400.jpg",
      name: "annie",
      username: "soychotic",
      date: "22h",
      text: "Does anyone know what these vibes are called and how can I make every room in my house have these vibes",
      image: "https://pbs.twimg.com/media/FthnzZFXoAERWSI?format=jpg&name=large",
      comment: 58,
      retweet: 14,
      like: "282",
      view: "38,6K",
      Verified: true,
   },
   {
      avatar: "https://pbs.twimg.com/profile_images/1573897372408901637/Q8g6SXFM_400x400.jpg",
      name: "Chris Staudinger",
      username: "ChrisStaud",
      date: "8h",
      text: "ChatGPT is phenomenal. But it has limits. These tools will reduce work hours where ChatGPT cannot:",
      image: "",
      comment: 27,
      retweet: 38,
      like: "208",
      view: "92,2K",
      Verified: true,
   },
   {
      avatar: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
      name: "jhey 🔨🐻✨",
      username: "jh3yy",
      date: "Mar 31",
      text: "When you need the roundest rounded border in CSS without making a circle... p.s This is valid CSS 👀",
      image: "https://pbs.twimg.com/media/Fsj93MTWAAcZ0dD?format=jpg&name=large",
      comment: 30,
      retweet: 88,
      like: "949",
      view: "158,4K",
      Verified: false,
   },
];

export default function Home() {
   const [active, setActive] = useState(false);

   return (
      <>
         <Head>
            <title>Home / Twitter</title>
         </Head>
         <Layout>
            <div className="rightbar flex-1 h-fit border-x border-darkTwo relative flex flex-col max-w-2xl">
               <div className="flex flex-col gap-2 w-full sticky top-0 z-50 bg-dark bg-opacity-20 backdrop-blur border-b border-darkTwo">
                  <div className="p-3 px-4 text-xl font-bold">
                     <span>Home</span>
                  </div>
                  <div className="flex font-medium">
                     <div onClick={() => setActive(false)} className="flex-1 cursor-pointer flex justify-center hover:bg-darkTwo/50 transition-colors">
                        <button className={`${!active ? "border-b-2 border-twitterBlue text-white" : "text-textGray"} border-b-2 border-transparent text-center py-3`}>For you</button>
                     </div>
                     <div onClick={() => setActive(true)} className="flex-1 cursor-pointer flex justify-center hover:bg-darkTwo/50 transition-colors">
                        <button className={`${active ? "border-b-2 border-twitterBlue text-white" : "text-textGray"} border-b-2 border-transparent text-center py-3`}>Following</button>
                     </div>
                  </div>
               </div>
               <div className="flex-1 bg-black">
                  <Form />
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
