import Image from "next/image";
import Container from "./Container";
import { assets } from "@/lib/assets";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="lg:pt-27.5 pt-10 pb-15">
      <Container className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href={"#"} className="inline-block">
            <Image
              src={assets.header_logo}
              alt="Logo"
              width={200}
              loading="eager"
              height={200}
              className="w-30"
            />
          </Link>
          <p className="font-medium text-lg lg:leading-[151%] text-col-9 mt-10 lg:text-2xl">
            Savor the artistry where <br className="max-lg:hidden" /> every dish
            is a culinary <br className="max-lg:hidden" /> masterpiece
          </p>
        </div>
        <div className="lg:col-span-8 flex lg:flex-row flex-col lg:justify-between gap-8">
          <div>
            <h3 className="font-semibold lg:text-[26px] text-xl mb-9 text-black">
              Useful links
            </h3>
            <ul className="space-y-7.5">
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Eventss
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold lg:text-[26px] text-xl mb-9 text-black">
              Main Menu
            </h3>
            <ul className="space-y-7.5">
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Menus
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="font-medium text-lg text-col-9 lg:text-2xl hover:text-col-2 transition-all duration-300"
                >
                  Reservation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold lg:text-[26px] text-xl mb-9 text-black">
              Contact Us
            </h3>
            <ul className="space-y-7.5">
              <li>
                <p className="font-medium text-lg text-col-9 lg:text-2xl">
                  example@email.com
                </p>
              </li>
              <li>
                <p className="font-medium text-lg text-col-9 lg:text-2xl">
                  +64 958 248 966
                </p>
              </li>
              <li>
                <p className="font-medium text-lg text-col-9 lg:text-2xl">
                  Social media
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-12 flex flex-col lg:flex-row lg:justify-between gap-8 pt-15 items-center">
          <ul className="flex items-center gap-3 lg:gap-4.75">
            <li>
              <Link
                href={""}
                className="size-14.25 rounded-full bg-col-15 text-col-16 hover:bg-col-2 hover:text-white transition-all duration-300 inline-flex justify-center items-center"
              >
                <FiFacebook className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="size-14.25 rounded-full bg-col-15 text-col-16 hover:bg-col-2 hover:text-white transition-all duration-300 inline-flex justify-center items-center"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="size-14.25 rounded-full bg-col-15 text-col-16 hover:bg-col-2 hover:text-white transition-all duration-300 inline-flex justify-center items-center"
              >
                <FiTwitter className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="size-14.25 rounded-full bg-col-15 text-col-16 hover:bg-col-2 hover:text-white transition-all duration-300 inline-flex justify-center items-center"
              >
                <FiYoutube className="text-2xl" />
              </Link>
            </li>
          </ul>
          <div>
            <p className="font-medium lg:text-[22px] text-base text-col-9">
              Copyright &copy; {new Date().getFullYear()} ABC Limited | All
              rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
