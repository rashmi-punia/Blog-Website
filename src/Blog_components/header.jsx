import { useState } from "react";
import Show from "./show";
import Tooltip from "./Tooltip";

export default function Navbar() {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu=()=>{
    setIsMenu(!isMenu)
  }

  return (
    <>
      <nav className="navbar bg-cyan-500 font-serif z-10 fixed top-0 left-0 right-0 ">
        <div className=" p-7 h-24 md:h-28 w-auto flex items-center justify-between">
          <div className="m-auto md:m-0 text-blac md:text-white">
            <Tooltip text={"this is random logo.. team"} >
              <i class="fa-solid fa-blog fa-2xl"></i>
            </Tooltip>
          </div>

          <button onClick={()=> toggleMenu()}  className="p-2 hover:bg-sky-200 rounded-sm group md:hidden">
            
            <i class="fa-solid fa-bars-progress fa-lg"></i>

{isMenu && (

            <div className="absolute rounded-md right-10 top-16 bg-sky-200 p-2 group-focus:block hidden">
              <ul className= "*:text-start *:p-1 *:capitalize w-24 text-cyan-600">
              <li className="hover:text-cyan-950 hover:translate-x-2"><a>home</a></li>
              <li className="hover:text-cyan-950 hover:translate-x-2"><a>podcast</a></li>
              <li className="hover:text-cyan-950 hover:translate-x-2"><a>blog</a></li>
              <li className="hover:text-cyan-950 hover:translate-x-2"><a>constact us</a></li>

              

              </ul>
            </div>
)}
          </button>

          <ul className="nav-links md:flex justify-between items-center lg:space-x-10 md:space-x-8 space-x-5 hidden">
            <li className="nav-item p-2 text-white hover:bg-cyan-200  hover:text-black">
              <a href="">Home </a>
            </li>
            <li className="nav-item p-2 text-white hover:bg-cyan-200  hover:text-black">
              <a href="">
                Podcasts <i class="fa-solid fa-angle-down fa-sm mx-1"></i>
              </a>
            </li>
            <li className="nav-item p-2 text-white hover:bg-cyan-200  hover:text-black">
              <a href="">
                Blogs <i class="fa-solid fa-angle-down fa-sm mx-1"></i>
              </a>
            </li>
            <li className="nav-item p-2 text-white hover:bg-cyan-200  hover:text-black">
              <a href="">
                Contact <i class="fa-solid fa-angle-down fa-sm mx-1"></i>
              </a>
            </li>
          </ul>
          <button  className="subscribe-btn px-2 hidden md:block ">Subscribe now</button>
        </div>
      </nav>
    

      <Show />
    </>
  );
}
