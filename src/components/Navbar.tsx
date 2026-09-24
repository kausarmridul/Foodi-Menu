"use client";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { assets, navLink } from "@/lib/assets";
import { BiPhoneCall } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <nav
        className={`py-5 z-40 transition-all duration-300 w-full ${stickyMenu ? "fixed top-0 shadow-md bg-white" : "absolute top-4"}`}
      >
        <Container className="flex justify-between items-center">
          <div>
            <Link href={"#home"}>
              <Image
                src={assets.header_logo}
                alt="Logo"
                width={200}
                loading="eager"
                height={200}
                className="w-20 md:w-27.5"
              />
            </Link>
          </div>
          <ul className="xl:gap-15 lg:gap-10 lg:flex hidden items-center">
            {navLink.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="font-poppins font-medium text-xl hover:text-col-2 text-col-1 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 lg:gap-3.5 bg-col-2 text-white text-base lg:text-xl py-2.5 lg:py-3.55 rounded-full px-5 sm:px-6 lg:px-8.5 primaryHover">
              <BiPhoneCall className="text-xl lg:text-2xl" /> Contact
            </button>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </Container>
      </nav>
      <div className="overflow-hidden lg:hidden">
        <div
          onClick={() => setShowMobileMenu(false)}
          className={`fixed top-0 transition-all duration-300 left-0 max-lg:w-full max-lg:h-full lg:hidden bg-black/40 z-50 ${showMobileMenu ? "translate-0" : "translate-x-full"}`}
        />
        <div
          className={`md:w-4/10 transition-all duration-300 delay-300 max-md:w-6/10 bg-white max-lg:h-full fixed top-0 right-0 z-51 ${showMobileMenu ? "translate-0" : "translate-x-full"}`}
        >
          <button
            className="absolute right-4 top-3 z-10"
            onClick={() => setShowMobileMenu(false)}
          >
            <IoClose className="text-2xl hover:text-col-2 text-col-1 duration-300 transition-all" />
          </button>

          <ul className="flex flex-col justify-center h-full gap-4 pl-6">
            {navLink.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="text-base font-poppins font-medium hover:text-col-2 text-col-1 transition-all duration-300"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
