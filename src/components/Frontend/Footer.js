import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer class="footer_color ">
                <div class="w-full mx-auto max-w-screen-xl p-2 h-19  md:items-center md:justify-between">
                    <span class="text-base  text-[#FFFFFF] sm:text-center ">© 2024 <a href="https://mukulprogrammer.42web.io" class="hover:underline text-[#47c979]">Mukul Dev.</a> All Rights Reserved.
                    </span>

                </div>
            </footer>
        </>
    )
};
