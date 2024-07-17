import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <>
            <nav className='pl-5 pr-5 border-b bg-gradient-to-r from-blue-300' >
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a href='/' className=''><img src="/images/logo.jpg" alt="logo" width={100} height={100} className="rounded" /></a>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 border-grey-500">
                            <a href="/" className="py-5 px-3 text-black hover:text-green-500">Home</a>
                            <a href="/about" className="py-5 px-3 text-black hover:text-green-500">About Us</a>
                            <a href="/project" className="py-5 px-3 text-black hover:text-green-500">Our Project</a>
                            <a href="/blog" className="py-5 px-3 text-black hover:text-green-500">Blogs</a>
                            <a href="/contact" className="py-5 px-3 text-black hover:text-green-500">Contact</a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center p-2">
                            <button onClick={toggleMobileMenu} className="btn btn-square btn-ghost p-3">
                                <img src="/images/mobile.svg" width={25} height={25} alt="mobile" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="md:hidden flex flex-col items-center justify-center h-full">
                            <a href="/" className="p-4 text-white hover:text-green-500">Home</a>
                            <a href="/about" className="p-4 text-white hover:text-green-500">About Us</a>
                            <a href="/project" className="p-4 text-white hover:text-green-500">Our Project</a>
                            <a href="/blog" className="p-4 text-white hover:text-green-500">Blogs</a>
                            <a href="/contact" className="p-4 text-white hover:text-green-500">Contact</a>
                            <button onClick={toggleMobileMenu} className="text-white absolute top-4 right-4">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
