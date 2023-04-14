import Policy from "@/components/Policy";
import Layout from "@/layout";
import Head from "next/head";
import TrendsForYou from "@/components/TrendsForYou";
import Search from "@/components/Search";
import { data } from "..";
import Post from "@/components/Post";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { BsBalloon } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import EmirPhoto from "@/assets/images/emir.jpg";
import husseinPhoto from "@/assets/images/hussein.jpg";
import dragonPhoto from "@/assets/images/dragon.jpg";

export default function Profile() {
   const [active, setActive] = useState(1);
   return (
      <>
         <Head>
            <title>Profile / Twitter</title>
         </Head>
         <Layout>
            <div className="rightbar flex-1 h-fit border-x border-darkTwo relative flex flex-col max-w-2xl">
               <div className="flex flex-col gap-2 w-full top-0 z-50 bg-black border-b border-darkTwo">
                  <div className="p-1 px-4 flex items-center gap-5">
                     <button>
                        <BiLeftArrowAlt className="text-3xl" />
                     </button>
                     <div>
                        <h1 className="text-xl font-bold">Fatih</h1>
                        <span className="text-sm text-textGray">59 Tweets</span>
                     </div>
                  </div>
                  <div className="">
                     <div>
                        <Image className="w-full" width={500} height={200} alt="" src="https://pbs.twimg.com/profile_banners/770029631894355968/1647814594/1500x500" />
                     </div>
                     <div className="w-full p-4 flex items-start pb-6 relative">
                        <Image
                           className="rounded-full absolute border-[3px] bottom-2 left-6 border-black"
                           width={140}
                           height={140}
                           alt=""
                           src="https://pbs.twimg.com/profile_images/1533606729786728448/pgBgO2lb_400x400.jpg"
                        />
                        <button className="border ml-auto border-white/50 rounded-full px-4 py-1">Edit profile</button>
                     </div>
                     <div className="flex flex-col p-4 px-6">
                        <h2 className="text-2xl font-semibold">Fatih</h2>
                        <span className="text-textGray">@fatihsendev</span>
                        <p className="my-1.5">Hi i am Fatih a FrontEnd Developer.</p>
                        <div className="flex flex-wrap gap-x-3 text-textGray leading-5 mb-4">
                           <div className="inline-flex gap-10.5items-center">
                              <CiLocationOn className="text-xl" />
                              <span>istanbul / Turkiye</span>
                           </div>
                           <div className="inline-flex gap-0.5 items-center">
                              <AiOutlineLink className="text-xl" />
                              <a className="text-twitterBlue hover:underline" href="#">
                                 fatihsen.com
                              </a>
                           </div>
                           <div className="inline-flex gap-0.5 items-center">
                              <BsBalloon className="text-xl" />
                              <span>Born March 18, 1999</span>
                           </div>
                           <div className="inline-flex gap-0.5 items-center">
                              <MdCalendarMonth className="text-xl" />
                              <span>Joined August 2016</span>
                           </div>
                        </div>
                        <div className="flex items-center text-textGray gap-3 text-[15px]">
                           <p className="inline-flex gap-1">
                              <b className="text-white">87</b>Following
                           </p>
                           <p className="inline-flex gap-1">
                              <b className="text-white">16</b>Followers
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex">
                     <div onClick={() => setActive(1)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 1 ? "font-medium" : "text-textGray"}`}>Tweets</span>
                           {active === 1 && <div className="absolute w-full h-[4px] bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                     <div onClick={() => setActive(2)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 2 ? "font-medium" : "text-textGray"}`}>Replies</span>
                           {active === 2 && <div className="absolute w-full h-[4px] bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                     <div onClick={() => setActive(3)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 3 ? "font-medium" : "text-textGray"}`}>Media</span>
                           {active === 3 && <div className="absolute w-full h-[4px] bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
                     <div onClick={() => setActive(4)} className="flex-1 flex hover:bg-[#080808] cursor-pointer justify-center">
                        <button className="py-3.5 px-3 flex justify-center relative">
                           <span className={`${active === 4 ? "font-medium" : "text-textGray"}`}>Likes</span>
                           {active === 4 && <div className="absolute w-full h-[4px] bottom-0 rounded-full bg-twitterBlue"></div>}
                        </button>
                     </div>
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
                  <Search />
                  <ul className="rightbar flex flex-col gap-3">
                     <li className="grid grid-cols-2 gap-1 rounded-md overflow-hidden">
                        <Image className="h-24 w-full object-cover" width={140} height={140} alt="" src="https://pbs.twimg.com/media/FtsOPYrWYCYGxsJ?format=jpg&name=large" />
                        <Image className="h-24 w-full object-cover" width={140} height={140} alt="" src="https://pbs.twimg.com/media/FthfgegWAAMF2-4?format=jpg&name=900x900" />
                        <Image className="h-24 w-full object-cover" width={140} height={140} alt="" src="https://pbs.twimg.com/media/Ftmr-bhaIAMOH3i?format=png&name=small" />
                        <Image className="h-24 w-full object-cover" width={140} height={140} alt="" src="https://pbs.twimg.com/media/FtlVQWDWIAABdxr?format=jpg&name=4096x4096" />
                     </li>
                     <li>
                        <div className="bg-dark w-full rounded-xl overflow-hidden">
                           <div className="p-3 px-3.5">
                              <h2 className="text-xl font-bold">You might like</h2>
                           </div>
                           <ul>
                              <li className="flex px-3.5 items-start hover:bg-darkTwo cursor-pointer py-4 gap-3">
                                 <Image className="rounded-full" src={EmirPhoto} alt="" width={40} height={40} />
                                 <div className="flex flex-col leading-5">
                                    <a className="font-medium hover:underline">Emir</a>
                                    <span className="text-sm text-textGray">@huxxlley</span>
                                 </div>
                                 <button className="bg-white hover:bg-opacity-95 px-4 py-1 text-dark ml-auto rounded-full">Follow</button>
                              </li>
                              <li className="flex px-3.5 items-start hover:bg-darkTwo cursor-pointer py-4 gap-3">
                                 <Image className="rounded-full" src={husseinPhoto} alt="" width={40} height={40} />
                                 <div className="flex flex-col leading-5">
                                    <div className="flex items-center gap-1">
                                       <a className="font-medium hover:underline">Hussein Nasser</a>
                                       <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-[18px] h-[18px] fill-twitterBlue translate-y-0.5" data-testid="icon-verified">
                                          <g>
                                             <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                                          </g>
                                       </svg>
                                    </div>
                                    <span className="text-sm text-textGray">@hnasr</span>
                                 </div>
                                 <button className="bg-white hover:bg-opacity-95 px-4 py-1 text-dark ml-auto rounded-full">Follow</button>
                              </li>
                              <li className="flex px-3.5 items-start hover:bg-darkTwo cursor-pointer py-4 gap-3">
                                 <Image className="rounded-full" src={dragonPhoto} alt="" width={40} height={40} />
                                 <div className="flex flex-col leading-5">
                                    <a className="font-medium hover:underline">Dragon of Dojima</a>
                                    <span className="text-sm text-textGray">@Kachow__95</span>
                                 </div>
                                 <button className="bg-white hover:bg-opacity-95 px-4 py-1 text-dark ml-auto rounded-full">Follow</button>
                              </li>
                           </ul>
                           <div className="px-3.5 py-3 cursor-pointer hover:bg-gray-500/10">
                              <span className="text-twitterBlue">Show more</span>
                           </div>
                        </div>
                     </li>
                     <li>
                        <TrendsForYou />
                     </li>
                     <li>
                        <Policy />
                     </li>
                  </ul>
               </div>
            </div>
         </Layout>
      </>
   );
}
