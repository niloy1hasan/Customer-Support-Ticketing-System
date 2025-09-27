import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 max-w-[1600px] mx-auto shadow-sm">
            <div className='w-[93%] mx-auto flex justify-between items-center'>
                <div className="flex-1">
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