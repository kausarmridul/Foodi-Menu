import { dishesMenu } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";

const DishMenu = () => {
  return (
    <section className="lg:pt-30 pt-15 scroll-mt-20 lg:pb-27.5 pb-10" id="menu">
      <Container>
        <div className="mb-15">
          <p className="font-bold text-base lg:text-xl lg:tracking-[17.5%] uppercase text-col-7 mb-7.25">
            Special Dishess
          </p>
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-black mb-19.5">
            Standout Dishes <br className="max-lg:hidden" /> From Our Menu
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {dishesMenu.map((menu) => (
            <div
              key={menu.id}
              className="bg-white shadow-col-4 rounded-[40px] sm:pt-9.25 sm:px-11.25 sm:pb-10 p-8 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div>
                <Image
                  src={menu.images}
                  alt={menu.title}
                  width={500}
                  loading="eager"
                  height={500}
                  className="sm:w-69 w-46 mx-auto"
                />
              </div>
              <div>
                <h3 className="mt-6.25 font-semibold lg:text-[30px] text-2xl text-black">
                  {menu.title}
                </h3>
                <p className="mt-5 font-semibold lg:text-[22px] text-lg text-col-9">
                  {menu.content}
                </p>
                <div className="flex items-center justify-between gap-2 mt-7">
                  <h5 className="text-black text-2xl lg:text-[30px] font-semibold">
                    <span className="text-col-7 text-lg lg:text-2xl">$</span>
                    {menu.price}
                  </h5>
                  <p className="flex items-center gap-2 text-col-11 text-lg font-semibold lg:text-2xl">
                    <FaStar className="text-col-10 text-2xl" />
                    {menu.review}
                  </p>
                </div>
              </div>
              <button className="absolute bg-col-2 text-white w-18 h-16 sm:w-21.75 sm:h-18.75 flex justify-center items-center right-0 top-0 rounded-bl-[40px]">
                <FaHeart className="text-2xl group-hover:block hidden" />

                <FaRegHeart className="text-2xl group-hover:hidden block" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DishMenu;
