import FilterModal from "@/components/FilterModal";
import Search from "@/components/Search";
import Table from "@/components/Table";

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
        <section className="pt-10 w-full h-full">
          <Table />
        </section>
      </main>
  )
}
