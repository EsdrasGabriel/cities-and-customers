import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function Header() {
    return (
        <header className="bg-white px-10 py-2 flex justify-between items-center justify-center border-b-2">
            <section className="text-5xl font-extrabold">
                LOGO
            </section>
            <section>
                <button className="border-2 py-1 pr-4 pl-6 rounded-xl">
                    <div className="flex gap-4 items-center justify-center">
                        <p className="text-md bg-pink-100 rounded-full p-2 text-red-700 font-extrabold">EG</p>
                        <MdOutlineKeyboardArrowDown className="text-3xl text-red-700"/>
                    </div>
                </button>
            </section>
        </header>
    )
}