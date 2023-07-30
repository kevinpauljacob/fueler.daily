import Link from 'next/link';
import React from 'react';

interface SidebarProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const links = [
    {
        label: "Blogs",
        href: "blogs"
    },
    {
        label: "Discover",
        href: "discover"
    }
];

const Sidebar:  React.FC<SidebarProps> = ({ setCurrentPage}) => {

    const handleChangePage = (page: string) => () => {
        setCurrentPage(page)
    }

  return (
    <nav className="fixed h-[calc(100vh-68px)] w-[250px] flex flex-col justify-between border-r border-gray-200 py-5">
        <div className="">
            {
                links.map((link, index) => (
                    <div key={index}>
                        <button onClick={handleChangePage(link.href)} className="hover:bg-cyan-400 hover:text-white hover:transition hover:duration-300 hover:ease-in-out py-2 px-5">
                            {link.label}
                        </button>
                    </div>
                ))
            }
        </div>
        <Link className="bg-cyan-400/90 text-white text-center font-semibold rounded-md shadow-md px-5 py-3 mx-3" href="https://fueler.io/">
            Proof of Work
        </Link>
    </nav>
  )
}

export default Sidebar;