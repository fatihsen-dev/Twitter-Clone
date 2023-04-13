import { BsThreeDots } from "react-icons/bs";

export default function index() {
   return (
      <div className="bg-dark w-full rounded-xl overflow-hidden">
         <div className="p-3 px-3.5">
            <h2 className="text-xl font-bold">Trends for you</h2>
         </div>
         <ul>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">#Secim2023</b>
                  <span className="text-sm text-textGray">49.3K Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Serenay</b>
                  <span className="text-sm text-textGray">1,440 Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Şevket Çoruh</b>
                  <span className="text-sm text-textGray">2,904 Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Evlenmek</b>
                  <span className="text-sm text-textGray">8,906 Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Asgari</b>
                  <span className="text-sm text-textGray">27.2K Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">News · Trending</span>
                  <b className="font-medium">#SonDakika</b>
                  <span className="text-sm text-textGray">33K Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Şevket Çoruh</b>
                  <span className="text-sm text-textGray">2,904 Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Politics · Trending</span>
                  <b className="font-medium">Ekrem İmamoğlu</b>
                  <span className="text-sm text-textGray">72.5K Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
            <li className="flex justify-between px-3.5 items-start hover:bg-darkTwo cursor-pointer py-2">
               <div className="flex flex-col leading-5">
                  <span className="text-sm text-textGray">Trending in Turkey</span>
                  <b className="font-medium">Ersan Şen</b>
                  <span className="text-sm text-textGray">37.6K Tweets</span>
               </div>
               <button className="hover:bg-twitterBlue/20 p-2 rounded-full hover:text-twitterBlue">
                  <BsThreeDots />
               </button>
            </li>
         </ul>
         <div className="px-3.5 py-3 cursor-pointer hover:bg-gray-500/10">
            <span className="text-twitterBlue">Show more</span>
         </div>
      </div>
   );
}
