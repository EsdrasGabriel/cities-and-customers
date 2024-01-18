import FilterModal from "@/components/FilterModal";
import Search from "@/components/Search";
import Table from "@/components/Table";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
      <main className="flex-1 p-10 h-full flex flex-col items-start justify-start">
        <section className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-semibold text-zinc-800">Listing of Customers and Cities</h1>
          <div className="flex gap-5">
            <FilterModal />
            <Search />
          </div>
        </section>
        <section className="pt-10 w-full h-full flex flex-col gap-2">
          <div className="w-full flex justify-end text- xl font-bold ">
            <Link href={"/addCustomer"} className="flex gap-2 items-center justify-center hover:bg-zinc-200 py-1 px-2 rounded-lg">
              <FaPlus className="text-red-500"/>
              Add Customer
            </Link>
          </div>
          <Table />
        </section>
      </main>
  )
}
