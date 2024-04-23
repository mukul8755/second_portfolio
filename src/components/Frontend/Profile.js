import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import { useLoadingContext } from "react-router-loading";
export default function Profile() {
     const loadingContext = useLoadingContext();
     setInterval(function () { loadingContext.done() }, 1000);
     return (
          <>
               <Header />
               <section class="services" id="services">
                    <div class="max-width">
                         <h2 class="title">My Profile</h2>
                         <div class="serv-content">
                              <div class="card" style={{ backgroundImage: 'red' }}>
                                   <div class="box"  >
                                        <i class="fas fa-laptop-code"></i>
                                        <div class="text">BCA</div>
                                        <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                                   </div>
                              </div>
                              <div class="card">
                                   <div class="box">
                                        <i class="fas fa-user-secret"></i>
                                        <div class="text">MCA</div>
                                        <p>I ensures that, there is no sensitive data included in the source code and are stored outside of the project folder. And all the data which is stored by User Secrets is not encrypted.</p>
                                   </div>
                              </div>
                              <div class="card">
                                   <div class="box">
                                        <i class="fas fa-code"></i>
                                        <div class="text">12th</div>
                                        <p>I encompasses both the user interface(UI) & user experience(UX). The overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets which will use.</p>
                                   </div>
                              </div>


                         </div>
                    </div>
               </section >

               <Footer />
          </>
     )
}
