import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { TbRepeat } from "react-icons/tb";

type Props = {
   data: {
      avatar: string;
      name: string;
      username: string;
      date: string;
      text: string;
      image: string;
      comment: number | string;
      retweet: number | string;
      like: number | string;
      view: number | string;
      Verified: boolean;
   };
};

export default function Post({ data }: Props) {
   return (
      <div className="p-4 flex gap-3 border-b border-darkTwo cursor-pointer hover:bg-[#080808] transition-colors">
         <Image className="rounded-full mb-auto" src={data.avatar} alt="Example Image" width={40} height={40} />
         <div>
            <div className="flex items-center -translate-y-0.5 gap-1">
               <a className="font-semibold hover:underline" href="#">
                  {data.name}
               </a>
               {data.Verified && (
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-[18px] h-[18px] fill-twitterBlue" data-testid="icon-verified">
                     <g>
                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                     </g>
                  </svg>
               )}
               <p className="text-textGray">
                  @{data.username} · <span>{data.date}</span>
               </p>
               <button className="ml-auto text-textGray hover:text-twitterBlue hover:bg-twitterBlue/10 p-2 rounded-full transition-all">
                  <BsThreeDots />
               </button>
            </div>
            <p className="leading-5">{data.text}</p>
            {data.image && <Image className="w-full rounded-md object-cover mt-3" src={data.image} alt="Example Image" width={500} height={500} />}
            <div className="flex justify-around text-textGray mt-2">
               <div className="flex items-center gap-1 group transition-all">
                  <svg className="w-[18px] fill-textGray p-2 box-content group-hover:bg-twitterBlue/10 rounded-full group-hover:fill-twitterBlue transition-all" viewBox="0 0 24 24" aria-hidden="true">
                     <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                     </g>
                  </svg>
                  <span className="text-sm group-hover:text-twitterBlue transition-all">{data.comment}</span>
               </div>
               <div className="flex items-center gap-1 hover:text-twitterGreen group transition-all">
                  <TbRepeat className="text-lg group-hover:bg-twitterGreen/10 p-2 rounded-full box-content transition-all" />
                  <span className="text-sm transition-all">{data.retweet}</span>
               </div>
               <div className="flex items-center gap-1 hover:text-twitterPink group transition-all">
                  <AiOutlineHeart className="text-lg group-hover:bg-twitterPink/10 p-2 rounded-full box-content transition-all" />
                  <span className="text-sm transition-all">{data.like}</span>
               </div>
               <div className="2xl:flex sm:flex hidden items-center gap-1 hover:text-twitterBlue group transition-all">
                  <IoIosStats className="text-lg group-hover:bg-twitterBlue/10 p-2 rounded-full box-content transition-all" />
                  <span className="text-sm transition-all">{data.view}</span>
               </div>
               <div className="flex items-center gap-1 hover:text-twitterBlue group transition-all">
                  <FiShare className="text-lg group-hover:bg-twitterBlue/10 p-2 rounded-full box-content transition-all" />
               </div>
            </div>
         </div>
      </div>
   );
}
