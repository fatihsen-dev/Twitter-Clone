import Link from "next/link";
import { BiHomeCircle, BiEnvelope, BiBookmark } from "react-icons/bi";
import { BsThreeDots, BsTwitter } from "react-icons/bs";
import { RiHashtag, RiFileList2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import profilePhoto from "@/assets/images/profile-photo.jpg";

export default function index() {
   return (
      <header className="rightbar flex flex-col justify-between pb-3">
         <div className="flex flex-col gap-2 pt-1">
            <Link className="flex rounded-full overflow-hidden mr-auto ml-1.5" href="/">
               <BsTwitter className="text-3xl p-2.5 box-content hover:bg-gray-500/20" />
            </Link>
            <ul className="flex flex-col gap-3 w-[270px]">
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/">
                     <BiHomeCircle className="text-3xl" />
                     <span className="text-xl">Home</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/explore">
                     <RiHashtag className="text-3xl" />
                     <span className="text-xl">Explore</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/notifications">
                     <HiOutlineBell className="text-3xl" />
                     <span className="text-xl">Notifications</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/messages">
                     <BiEnvelope className="text-3xl" />
                     <span className="text-xl">Messages</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/bookmarks">
                     <BiBookmark className="text-3xl" />
                     <span className="text-xl">Bookmarks</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/">
                     <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white w-7 h-7">
                        <g>
                           <path d="M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23zM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18zM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5z"></path>
                        </g>
                     </svg>
                     <span className="text-xl">Twitter Blue</span>
                  </Link>
               </li>
               <li className="flex justify-start">
                  <Link className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full" href="/profile">
                     <HiOutlineUser className="text-3xl" />
                     <span className="text-xl">Profile</span>
                  </Link>
               </li>
               <li className="flex justify-start relative">
                  <Menu>
                     <Menu.Button className="flex items-center gap-4 hover:bg-gray-600/20 px-4 box-content py-2 rounded-full">
                        <CgMoreO className="text-2xl" />
                        <span className="text-xl">More</span>
                     </Menu.Button>
                     <Menu.Items className="left-0 bottom-0 w-full flex flex-col absolute rounded-md bg-black shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]">
                        <Menu.Item>
                           <Link href="/topics" className="flex hover:bg-gray-500/10 items-center gap-3 px-4 py-3">
                              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-white" data-testid="icon">
                                 <g>
                                    <path d="M12 3.75C7.99 3.75 4.75 7 4.75 11s3.24 7.25 7.25 7.25h1v2.44c1.13-.45 2.42-1.3 3.54-2.54 1.52-1.67 2.66-3.95 2.71-6.67.07-4.46-3.28-7.73-7.25-7.73zM2.75 11c0-5.11 4.14-9.25 9.25-9.25s9.34 4.23 9.25 9.77c-.06 3.28-1.44 6.01-3.23 7.97-1.76 1.94-3.99 3.21-5.87 3.5l-1.15.17V20.2c-4.64-.5-8.25-4.43-8.25-9.2zM15 10H9V8h6v2zm-2 4H9v-2h4v2z"></path>
                                 </g>
                              </svg>
                              <span className="text-xl font-medium">Topics</span>
                           </Link>
                        </Menu.Item>
                        <Menu.Item>
                           <Link href="/lists" className="flex hover:bg-gray-500/10 items-center gap-3 px-4 py-3">
                              <RiFileList2Line className="text-2xl" />
                              <span className="text-xl font-medium">Lists</span>
                           </Link>
                        </Menu.Item>
                        <Menu.Item>
                           <Link href="/twitter-circle" className="flex hover:bg-gray-500/10 items-center gap-3 px-4 py-3">
                              <AiOutlineUserAdd className="text-2xl" />
                              <span className="text-xl font-medium">Twitter Circle</span>
                           </Link>
                        </Menu.Item>
                        <hr className="mx-4 opacity-20 py-[1px]" />
                        <button className="hover:bg-gray-500/10">
                           <li className="flex items-center px-4 py-3 gap-3 justify-between">
                              <span>Creator Studio</span>
                              <MdOutlineKeyboardArrowDown className="text-2xl" />
                           </li>
                        </button>
                        <button className="hover:bg-gray-500/10">
                           <li className="flex items-center px-4 py-3 gap-3 justify-between">
                              <span>Professional Tools</span>
                              <MdOutlineKeyboardArrowDown className="text-2xl" />
                           </li>
                        </button>
                        <button className="hover:bg-gray-500/10">
                           <li className="flex items-center px-4 py-3 gap-3 justify-between">
                              <span>Settings and Support</span>
                              <MdOutlineKeyboardArrowDown className="text-2xl" />
                           </li>
                        </button>
                     </Menu.Items>
                  </Menu>
               </li>
            </ul>
            <button className="text-white bg-twitterBlue py-3 rounded-full mx-2 text-lg font-medium mr-6 mt-4 hover:bg-twitterBlue/90">Tweet</button>
         </div>
         <li className="flex justify-start relative">
            <Menu>
               <Menu.Button className="flex items-center justify-between gap-4 hover:bg-gray-600/20 p-3 box-content rounded-full w-full">
                  <div className="flex items-center gap-3">
                     <Image className="rounded-full" src={profilePhoto} alt="" width={40} height={40} />
                     <div className="flex flex-col items-start leading-5">
                        <b>Fatih</b>
                        <span className="text-textGray">@fatihsendev</span>
                     </div>
                  </div>
                  <BsThreeDots />
               </Menu.Button>
               <Menu.Items className="overflow-hidden left-0 bottom-[74px] w-full flex flex-col absolute rounded-xl bg-black shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]">
                  <button className="hover:bg-gray-500/10 text-start px-4 py-3">
                     <span>Add an existing account</span>
                  </button>
                  <button className="hover:bg-gray-500/10 text-start px-4 py-3">
                     <span>Log out @fatihsendev</span>
                  </button>
               </Menu.Items>
            </Menu>
         </li>
      </header>
   );
}
