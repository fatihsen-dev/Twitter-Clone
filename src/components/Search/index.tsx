import { HiOutlineSearch } from "react-icons/hi";

export default function index() {
   return (
      <div className="w-full sticky top-0 bg-black">
         <div className="relative flex items-center text-white py-1 w-full">
            <input className="outline-none border border-transparent focus:border-twitterBlue w-full bg-[#202327] peer px-3 py-2 pl-10 rounded-full" placeholder="Search Twitter" type="text" />
            <HiOutlineSearch className="absolute z-10 text-xl pointer-events-none ml-3 text-white/50 peer-focus:text-twitterBlue" />
            <div className="p-4 hidden peer-focus:inline-block text-center pb-20 w-full text-sm text-white/50 bg-black shadow-[0_0_10px_0px_rgba(255,255,255,0.3)] rounded-lg absolute top-full">
               Try searching for people, topics, or keywords
            </div>
         </div>
      </div>
   );
}
