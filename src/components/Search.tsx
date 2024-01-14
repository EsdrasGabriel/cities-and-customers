import { FiSearch } from "react-icons/fi";

export default function Search() {
    return (
            <form action="">
                <div className="relative flex items-center justify-start">
                    <FiSearch className="absolute text-xl text-red-400 ml-2"/>
                    <input type="text" className="bg-transparent border border-zinc-300 placeholder:text-zinc-400 py-2 pr-2 pl-8 rounded-lg w-96" placeholder="Search by customer name"/>
                </div>
            </form>
    )
}