'use client'
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { MdClose } from "react-icons/md";

export default function FilterModal() {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={handleOpen} className="flex gap-1 items-center justify-center text-xl border border-zinc-300 rounded-lg py-1 px-2">
                <LuFilter className="text-red-400"/>
                <p className="text-zinc-500">Filters</p>
            </button>
            {
                isOpen &&
                (
                    <div className="fixed top-0 left-0 z-10 backdrop-blur-sm w-screen h-screen flex justify-center pt-20">
                        <div className="w-96 h-96 bg-white flex flex-col gap-5 p-5 rounded-xl">
                            <button  onClick={handleOpen} className="w-8 flex items-center justify-center">
                                <MdClose className="text-3xl"/>
                            </button>
                            <section>
                                <form action="" className="flex flex-col gap-3 items-center">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="cities" className="text-zinc-800 font-semibold">City</label>
                                        <input type="text" className="border p-1 rounded-lg px-2 text-zinc-600" placeholder="Inform the city"/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="state" className="text-zinc-800 font-semibold">State</label>
                                        <input type="text" className="border p-1 rounded-lg px-2 text-zinc-600" placeholder="Inform the state"/>
                                    </div>
                                    <button type="submit" className="border font-bold text-zinc-800 hover:bg-zinc-100 px-4 py-1 rounded-lg">Save</button>
                                </form>
                            </section>
                        </div>
                    </div>
                )
            }
        </>
        
    )
}