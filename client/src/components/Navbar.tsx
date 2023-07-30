import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full py-2 px-4 border-b border-gray-300">
        <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width="50" height="50" />
            <p className="text-xl font-bold ">fueler
                <span className="text-lg text-black/60">.daily</span>
            </p>
        </div>
        <div>
            <Link className="bg-cyan-400/90 text-white font-semibold rounded-md shadow-md px-5 py-3 " href="https://fueler.io/">
                Proof of Work
            </Link>
        </div>
    </nav>
  )
}
