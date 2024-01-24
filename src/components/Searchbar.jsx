import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="my-4 w-full text-indigo-800 rounded-xl bg-white flex items-center p-2 pr-5">
        <input className="w-full h-16 mr-5 text-xl border-none focus-within:ring-0" type="text" placeholder="Search by location, type, size, ..." />
        <span className="text-2xl"><button className="transition hover:opacity-80"><FaSearch /></button></span>
    </div>
  )
}

export default Searchbar