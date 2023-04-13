import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar";

type Props = {
   children: string | JSX.Element | JSX.Element[];
};

export default function index({ children }: Props) {
   return (
      <main className={`${inter.className} h-full bg-black text-white`}>
         <div className="flex h-full container">
            <Sidebar />
            <main className="flex-1 flex h-full">{children}</main>
         </div>
      </main>
   );
}
