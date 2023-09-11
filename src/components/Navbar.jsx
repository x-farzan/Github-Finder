import React, { useState } from "react";

const Navbar = () => {
  const [toggleState, setToggleState] = useState(false);
  const [listClass, setListClass] = useState(
    "px-2 text-white cursor-pointer hidden md:block"
  );

  const toggleNav = () => {
    console.log(toggleState);
    toggleState ? setToggleState(false) : setToggleState(true);
  };

  return (
    <div>
      <div>
        <nav className="mt-1 mx-1">
          <div className="flex justify-between py-4 bg-gray-800">
            <div className="px-6 text-white flex">
              <button onClick={toggleNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:hidden"
                  onClick={toggleNav}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <h1 className="px-2">
                <a href="/">Github Finder</a>
              </h1>
            </div>

            <div className="px-2 text-white cursor-pointer hidden md:block flex">
              <ul className="flex">
                <li>
                  <a href="/">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="px-4">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
