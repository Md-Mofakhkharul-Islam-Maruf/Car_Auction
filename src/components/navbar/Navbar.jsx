import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-6 md:grid md:grid-cols-3">

            {/* LEFT: Logo */}
            <div className="flex items-center">
                <a className="text-2xl font-semibold whitespace-nowrap">
                    Car <span className='text-teal-600'>A</span>uctio<span className='text-teal-600'>n</span>
                </a>
            </div>

            {/* CENTER: Menu (Desktop Only) */}
            <div className="hidden md:flex justify-center gap-4">
                <a className="btn btn-ghost text-lg">Home</a>
                <a className="btn btn-ghost text-lg">Actions</a>
                <a className="btn btn-ghost text-lg">Categories</a>
                <a className="btn btn-ghost text-lg">How to Works</a>
            </div>

            {/* RIGHT: Cart + Avatar */}
            <div className="flex justify-end gap-2">

                {/* Cart */}
                <div className="dropdown dropdown-end flex-none">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                </div>

                {/* Avatar */}
                <div className="dropdown dropdown-end flex-none">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="profile"
                                src="https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-1/574109420_122221833776109883_6960769695475586517_n.jpg?stp=c0.0.769.769a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kPTEEm06C4wQ7kNvwHK1WAx&_nc_oc=AdlCXwERqD4boOx8uHiw_ePD4o5JX2y3Iv4fK5Nz9IlrbBK-r8bWOeT_YIXymS6ICI4&_nc_zt=24&_nc_ht=scontent.fdac207-1.fna&_nc_gid=DMr-asf9nRGxsTuZrhDtGA&oh=00_AfjZ-_e3Bs2jTL6v3d42_0ygdBEKsOJaQc26GAfgjHhZqA&oe=692F7209"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
