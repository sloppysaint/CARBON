import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Carbon Footprint", href: "/emission" },
  { name: "Solutions", href: "/neutrality" },
  { name: "About Us", href: "/aboutus" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ className = "" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [navs, setNavs] = useState(navigation);

  useEffect(() => {
    const updatedNavs = navs.map(nav => ({
      ...nav,
      current: location.pathname === nav.href
    }));
    setNavs(updatedNavs);
  }, [location.pathname, navs]);

  return (
    <Disclosure as="nav" className={`bg-gradient-to-r from-custom-green via-custom-teal to-custom-green ${className}`}>
      {({ open }) => (
        <>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="font-bold text-white text-3xl">CARBON</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navs.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-purple-700 text-white"
                            : "text-white hover:bg-purple-600 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => navigate("/contactus")}
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navs.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={HashLink}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-purple-700 text-white"
                      : "text-white hover:bg-purple-600 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="button"
                onClick={() => navigate("/contactus")}
                className="w-full text-left text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-md px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out mt-2"
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}