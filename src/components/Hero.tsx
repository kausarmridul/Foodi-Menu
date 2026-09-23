import Image from "next/image";
import Container from "./Container";
import { assets } from "@/lib/assets";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen pt-50 pb-20 lg:pt-35 heroBg" id="home">
      <Container className="grid lg:grid-cols-12 gap-8 lg:gap-4 lg:items-center">
        <div className="lg:col-span-5">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[62px] lg:leading-[146%] text-black mb-10 lg:mb-14.75">
            Dive into Delights Of Delectable
            <span className="text-col-2"> Food</span>
          </h1>
          <p className="font-medium text-lg md:text-2xl lg:text-[26px] lg:leading-[171%] lg:mb-17.75 mb-10">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className="flex items-center gap-y-5 flex-wrap">
            <button className="lg:py-5.25 lg:mr-8.75 mr-5 lg:px-11.75 rounded-full bg-col-2 text-white font-semibold text-xl px-8 py-3 lg:text-[26px] primaryHover shadow-col-1">
              Order Now
            </button>
            <button className="lg:text-[26px] text-xl font-semibold text-col-4 primaryHover lg:mr-7.5 mr-5">
              Watch Video
            </button>
            <button className="lg:w-20 lg:h-20 w-15 h-15 rounded-full bg-white shadow-col-2 flex items-center justify-center primaryHover">
              <FaPlay className="lg:text-3xl text-2xl text-col-5" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Image
            src={assets.hero_right}
            alt="Hero Image"
            width={1000}
            loading="eager"
            height={1000}
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
