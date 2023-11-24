"use client";
import React, { useState } from "react";
import bravo from "../../public/bravo.png";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
  icon?: React.ReactNode;
};

const iconList = [
  <TwitterIcon className="text-white h-6 w-6 hover:text-corn" />,
  <InstagramIcon className="text-white h-6 w-6 hover:text-corn" />,
  <PersonOutlineIcon className="text-white h-6 w-6 hover:text-corn" />,
  <SearchIcon className="text-white h-6 w-6 hover:text-corn" />,
  <LocalMallIcon className="text-white h-6 w-6 hover:text-corn" />,
];
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigation: NavigationItem[] = [
    { name: "Brands", href: "#", current: true, icon: <ArrowDropDownIcon /> },
    { name: "Team", href: "#", current: false, icon: <ArrowDropDownIcon /> },
    { name: "Premium", href: "#", current: false },
    { name: "Gift Cards", href: "#", current: false },
  ];

  return (
    <nav className="bg-shark h-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navigation.map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {item.icon && item.icon}
                  <NavLink href={item.href} label={item.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="w-full h-full"
              src="/bravo.png" // Path relative to the `public` directory
              alt="bravo  "
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          </div>
          <div className="hidden md:block">
            <NavLink href="#" label="Become an affiliate" />
          </div>
          <div className="hidden  md:flex items-center space-x-4">
            {!isMobileMenuOpen &&
              iconList.map((icon, index) => (
                <React.Fragment key={index}>{icon}</React.Fragment>
              ))}
          </div>
          <div className="flex -mr-2 md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:text-corn focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                // Close Icon

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Menu Icon
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item: any) => (
              <NavLink key={item.name} href={item.href} label={item.name} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
const NavLink: React.FC<{ href: string; label: string; icon?: React.ReactNode }> = ({
  href,
  label,
  icon,
}) => {
  return (
    <a
      href={href}
      className="relative text-white px-3 py-2 text-sm font-medium overflow-hidden group flex items-center"
    >
      <span className="relative z-10 group-hover:text-corn">
        {label}
        {icon && (
          <span className="ml-1 inline-block">{icon}</span>
        )}
      </span>

      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-corn transform origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:transition-transform group-hover:duration-300"></span>
    </a>
  );
};



export default NavBar;
