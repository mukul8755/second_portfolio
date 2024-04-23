import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import '../../App.css'
import { Toaster } from 'react-hot-toast';
export default function Header() {
     return (
          <>
               <Toaster position="top-right" reverseOrder={false} />
               <header>
                    <nav>
                         <div class="logo text-2xl font-bold text-accent"><Link to={"/"}><img class="logo1" src="images/logo.jpg" alt="logo"
                         /></Link></div>
                         <ul class="links">
                              <li><div class="flex items-center space-x-0">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                   </span>
                                   <Link class="text-gray-50 text-xl " to={'/'} >Home</Link>
                              </div></li>



                              <li> <div class="flex items-center space-x-0">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                   </span>
                                   <Link class="text-gray-50 text-xl " to={'/project'} >Project</Link>
                              </div></li>

                              <li><div class="flex items-center space-x-0">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                   </span>
                                   <Link class="text-gray-50 text-xl " to={'/profile'} >About</Link>
                              </div></li>
                              {/* <li> <div class="flex items-center space-x-0">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                   </span>
                                   <Link class="text-gray-50 text-xl " to={'/contact'} >Blog</Link>
                              </div></li> */}
                              <li> <div class="flex items-center space-x-0">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                   </span>
                                   <Link class="text-gray-50 text-xl " to={'/contact'} >Contact</Link>
                              </div></li>


                         </ul>
                         <label for="nav-toggle" class="icon-burger">
                              <div class="line"></div>
                              <div class="line"></div>
                              <div class="line"></div>
                         </label>
                    </nav >

                    <label for="nav-toggle" class="icon-burger">
                         <div class="line"></div>
                         <div class="line"></div>
                         <div class="line"></div>
                    </label>
               </header >
          </>
     )
}
