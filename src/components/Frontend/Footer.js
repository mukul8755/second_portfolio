import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-r from-blue-300 to-blue-400 flex justify-center items-center h-19">
                <div className="w-full mx-auto max-w-screen-xl p-2 text-center">
                    <span className="text-base text-white sm:text-center">
                        © 2024 <a href="https://mukulprogrammer.42web.io" className="hover:underline">Mukul Dev.</a> All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}
