import { Link } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
export default function NotFound() {
     const loadingContext = useLoadingContext();
     setInterval(function () { loadingContext.done() }, 500);
     return (
          <div class="bg-gradient-to-r from-blue-400 to-blue-200">
               <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div class=" shadow overflow-hidden sm:rounded-lg pb-8">
                         <div class="border-t border-gray-200 text-center pt-8">
                              <h1 class="text-9xl font-bold text-black">404</h1>
                              <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                              <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                              <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                   <Link to="/">HOME</Link>
                              </button>
                              <button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">  <Link to="/contact">Contact US</Link></button>

                         </div>
                    </div>
               </div>
          </div>
     )
}