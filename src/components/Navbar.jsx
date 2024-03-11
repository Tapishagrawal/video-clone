import { GoBell } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between py-3 px-5 fixed top-0 left-0 w-full bg-[#0f0f0f] border-b border-zinc-800 z-10">
            <Link to="/" className="flex items-center gap-2">
                <i><FaPlay/></i>
                <h3 className="text-xl font-medium">CloneTube</h3>
            </Link>
            <div className="w-[40%]">
                <label className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" className="block w-full p-2 px-10 text-sm  border rounded-full bg-[#121212] outline-none focus:border-blue-700 border-[#30302f] placeholder-gray-400 text-white" placeholder="Search" required />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <i className="text-2xl">
                    <GoBell />
                </i>
                <div>
                    <img className="rounded-full" src="https://placehold.co/40x40" alt="" />
                </div>
            </div>
        </div>
    )
}
