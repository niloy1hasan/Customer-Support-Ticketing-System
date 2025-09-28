import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 max-w-[1600px] mx-auto shadow-sm">
            <div className='w-[93%] mx-auto flex justify-between items-center'>
                
            <div className="flex items-center flex-1">
                <div className="lg:hidden ml-[-10px]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                    <a className="text-[#130B2D] font-bold cursor-pointer text-[16px] md:text-[20px]">CS Ticket System</a>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="hidden lg:flex menu menu-horizontal px-1 text-[#000000]/90">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-normal rounded-sm"><i className="fa-solid fa-plus"></i> New Ticket</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;