"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  if(pathName === "/signUp" || pathName === "/login"){
    return " "
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {" "}
              <Link href="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link href="/blog">Blog</Link>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
          
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LitBlog</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            {" "}
            <Link href="/allcategory">All Category</Link>
          </li>
          <li>
            {" "}
            <Link href="/technology">Technology</Link>
          </li>
       
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/login"} className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
