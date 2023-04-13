import { useState } from "react";
import Image from "next/image";
import profilePhoto from "@/assets/images/profile-photo.jpg";
import { FiImage } from "react-icons/fi";
import { MdOutlineGifBox } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { BiListOl, BiSmile } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiEarthLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { IoMdCheckmark } from "react-icons/io";

export default function Form() {
   const [active, setActive] = useState<boolean>(false);

   return (
      <div className="flex p-3 px-4 items-start gap-3 border-b border-darkTwo">
         <Image className="rounded-full" src={profilePhoto} alt="" width={46} height={46} />
         <div className="flex flex-col flex-1">
            {active && (
               <div className="flex justify-center relative mr-auto">
                  <Menu>
                     <Menu.Button className="flex items-center gap-1 text-twitterBlue border border-textGray/70 rounded-full px-3">
                        <span className="text-[15px] font-medium">Everyone</span>
                        <MdOutlineKeyboardArrowDown className="text-xl" />
                     </Menu.Button>
                     <Menu.Items className="whitespace-nowrap w-60 overflow-hidden z-10 top-full flex flex-col absolute rounded-xl bg-black shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]">
                        <div className="px-4 py-2 font-bold text-xl">Choose audience</div>
                        <button className="hover:bg-gray-500/10 text-start px-4 py-3 flex items-center gap-2">
                           <RiEarthLine className="text-xl p-2 bg-twitterBlue rounded-full box-content" />
                           <span>Everyone</span>
                           <IoMdCheckmark className="ml-auto fill-twitterBlue text-lg text-twitterBlue" />
                        </button>
                        <button className="hover:bg-gray-500/10 text-start px-4 py-3 flex items-start gap-2">
                           <HiUserAdd className="text-xl p-2 bg-twitterGreen rounded-full box-content" />
                           <div className="flex flex-col leading-6">
                              <span>Twitter Circle</span>
                              <div className="flex gap-1">
                                 <span>0</span>
                                 <span className="text-textGray">People</span>
                                 <a className="underline hover:bg-darkTwo px-2 rounded-full" href="#">
                                    Edit
                                 </a>
                              </div>
                           </div>
                        </button>
                     </Menu.Items>
                  </Menu>
               </div>
            )}
            <input onFocus={() => setActive(true)} className="bg-transparent my-5 px-2 placeholder-textGray outline-none text-xl font-light" placeholder="What's happening?" type="text" />
            {active && (
               <div className="flex justify-center relative mr-auto mb-3">
                  <Menu>
                     <Menu.Button className="flex items-center text-twitterBlue rounded-full hover:bg-twitterBlue/10 pr-2">
                        <RiEarthLine className="p-2 rounded-full box-content text-lg" />
                        <span className="text-[15px] font-semibold">Everyone can reply</span>
                     </Menu.Button>
                     <Menu.Items className="whitespace-nowrap py-1 -left-14 overflow-hidden z-50 top-full flex flex-col absolute rounded-xl bg-black shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]">
                        <div className="py-2">
                           <span className="px-4 font-bold">Who can reply?</span>
                           <p className="text-sm text-textGray whitespace-normal px-4">Choose who can reply to this Tweet. Anyone mentioned can always reply.</p>
                        </div>
                        <button className="hover:bg-gray-500/10 text-start px-4 py-3 flex items-center gap-2">
                           <RiEarthLine className="text-xl p-2 bg-twitterBlue rounded-full box-content" />
                           <span>Everyone</span>
                           <IoMdCheckmark className="ml-auto fill-twitterBlue text-lg text-twitterBlue" />
                        </button>
                        <button className="hover:bg-gray-500/10 text-start px-4 py-3 flex items-center gap-2">
                           <RiEarthLine className="text-xl p-2 bg-twitterBlue rounded-full box-content" />
                           <span>People you follow</span>
                        </button>
                        <button className="hover:bg-gray-500/10 text-start px-4 py-3 flex items-center gap-2 pr-20">
                           <HiUserAdd className="text-xl p-2 bg-twitterBlue rounded-full box-content" />
                           <span>Only people you mention</span>
                        </button>
                     </Menu.Items>
                  </Menu>
               </div>
            )}
            {active && <hr className="border-darkTwo mb-2" />}
            <div className="flex justify-between items-center w-full">
               <div className="text-twitterBlue text-xl flex gap-1">
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <FiImage />
                  </button>
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <MdOutlineGifBox />
                  </button>
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <BiListOl className="text-2xl" />
                  </button>
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <BiSmile />
                  </button>
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <AiOutlineCalendar />
                  </button>
                  <button className="hover:bg-twitterBlue/10 w-[34px] h-[34px] transition-colors flex justify-center items-center rounded-full">
                     <CiLocationOn className="text-2xl" />
                  </button>
               </div>
               <button disabled className="bg-twitterBlue disabled:opacity-50 font-medium text-white px-5 py-1.5 rounded-full">
                  Tweet
               </button>
            </div>
         </div>
      </div>
   );
}
