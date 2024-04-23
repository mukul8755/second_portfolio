import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLoadingContext } from "react-router-loading";
export default function Home() {
     const loadingContext = useLoadingContext();
     setInterval(function () { loadingContext.done() }, 1000);
     return (
          <>
               <Header />
               <section class="home" id="home">
                    <div class="max-width">
                         <div class="home-content">
                              <div class="text-1">Well I am</div>
                              <div class="text-2">Mukul Sharma</div>
                              <div class="text-3">I am a Fullstack Developer</div>
                              <a href="/contact">Hire me</a>
                         </div>
                    </div>
               </section>

               <section class="about" id="about">
                    <div class="max-width">
                         <h2 class="title">About Me</h2>
                         <div class="about-content">
                              <div class="column left">
                                   <img src="https://source.unsplash.com/626x626/?profile" alt="Profile Image 626x626" />
                              </div>
                              <div class="column right">
                                   <div class="text">I'm Mukul Sharma and I'm a Fullstack Developer</div>
                                   <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
                                   <br />
                                   <div class="text">Why Work With Me</div>
                                   <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>

                                   <a href="#link" target="blank">Download CV</a>
                              </div>
                         </div>
                    </div>
               </section>


               <section class="services" id="services">
                    <div class="max-width">
                         <h2 class="title">My services</h2>
                         <div class="serv-content">
                              <div class="card">
                                   <div class="box">
                                        <i class="fas fa-laptop-code"></i>
                                        <div class="text">Web Design</div>
                                        <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                                   </div>
                              </div>
                              <div class="card">
                                   <div class="box">
                                        <i class="fas fa-laptop-code"></i>
                                        <div class="text">Web Development</div>
                                        <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                                   </div>
                              </div>

                              <div class="card">
                                   <div class="box">
                                        <i class="fas fa-laptop-code"></i>
                                        <div class="text">Full Stack Development</div>
                                        <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>


               <section class="skills" id="skills">
                    <div class="max-width">
                         <h2 class="title">My Skills</h2>
                         <div class="skills-content">
                              <div class="column left">

                                   <div class="text">INTERNSHIP</div>
                                   <p>
                                        <li class="intern">I have Completed the Internsala Fullstack Development</li>
                                        <li class="intern">I have Completed the LearnVern Fullstack Development</li>
                                        {/* <li class="intern">I have Completed the Internsala Fullstack Development</li> */}
                                   </p>

                                   <br />
                                   <div class="text">PROJECT</div>

                                   <p>
                                        <li class="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
                                        <li class="project">eCommerce Website (Shopify liquid-code, HTML, CSS)</li>
                                        <li class="project">QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</li>
                                        <li class="project">Fully Responsive Design Email Subscribe form</li>
                                        <li class="project">Blog (HTML, CSS, Bootstraps)</li>
                                        <li class="project">Tipster Challange (laravel,React)</li>
                                        <li class="project">Notfiy (Node js,React js)</li>
                                        <li class="project">Vesta CRM (CodeI,Jquery,Laravel)</li>
                                        <li class="project">Currently Working on a Hotel Management</li>
                                   </p>

                                   <br />
                                   <div class="text">DEVELOPMENT SKILLS</div>

                                   <p>
                                        I'm familiar & work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React js,Node js and other modern frameworks.
                                   </p>

                              </div>
                              <div class="column right">
                                   <div class="bars">
                                        <div class="info">
                                             <span>Node Js</span>
                                             <span>90%</span>
                                        </div>
                                        <div class="line python"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>HTML</span>
                                             <span>80%</span>
                                        </div>
                                        <div class="line html"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>CSS</span>
                                             <span>70%</span>
                                        </div>
                                        <div class="line css"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>JavaScript</span>
                                             <span>80%</span>
                                        </div>
                                        <div class="line js"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>Bootstraps</span>
                                             <span>70%</span>
                                        </div>
                                        <div class="line bootstraps"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>React</span>
                                             <span>70%</span>
                                        </div>
                                        <div class="line django"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>Laravel</span>
                                             <span>80%</span>
                                        </div>
                                        <div class="line django"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>PHP</span>
                                             <span>90%</span>
                                        </div>
                                        <div class="line django"></div>
                                   </div>
                                   <div class="bars">
                                        <div class="info">
                                             <span>Mysql</span>
                                             <span>70%</span>
                                        </div>
                                        <div class="line django"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <Footer />
          </>
     )
}
