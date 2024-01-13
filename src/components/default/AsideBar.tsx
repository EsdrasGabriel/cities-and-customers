import Link from "next/link";
import { CiViewList } from "react-icons/ci";

export default function AsideBar() {
    return (
        <aside className="bg-white p-4 border-r-2">
            <Link href={"/"} className="text-xl hover:bg-slate-200 rounded font-medium">
                <ul>
                    <li className="flex gap-2 hover:text-red-500 hover:bg-pink-100 w-44 items-center justify-start py-2 px-4 rounded-xl">
                        <CiViewList className="text-2xl"/>
                        Listing
                    </li>
                </ul>
            </Link>
        </aside>
    )
}