import Image from "next/image";
import Container from "./Container";
import { assets } from "@/lib/assets";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="lg:py-27.5 py-10 scroll-mt-10" id="offers">
      <Container className="grid lg:grid-cols-2 gap-8 lg:items-center">
        <div>
          <Image
            src={assets.testimonials_left}
            alt="Testimonials Image"
            width={700}
            loading="eager"
            height={700}
            className="w-full"
          />
        </div>
        <div>
          <div>
            <p className="font-bold text-base lg:text-xl lg:tracking-[17.5%] uppercase text-col-7 mb-7.25 lg:mb-13.25">
              Testimonials
            </p>
            <h2 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-black mb-10 lg:mb-19.5">
              What Our Customers Say About Us
            </h2>
            <p className="font-medium text-lg text-col-9 lg:text-[26px] lg:leading-[159%]">
              “I had the pleasure of dining at Foodi last night, and I&apos;m
              still raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
          </div>
          <div className="flex sm:items-center gap-5 lg:mt-16.75 mt-10 sm:flex-row flex-col">
            <div>
              <Image
                src={assets.feedback}
                alt="Feedback Image"
                width={200}
                loading="eager"
                height={200}
                className="w-40"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-black lg:text-[26px]">
                Customer Feedback
              </h3>
              <div className="flex items-center gap-3">
                <FaStar className="text-col-10 text-2xl" />
                <p className="text-col-11 text-lg font-semibold lg:text-2xl">
                  4.9
                </p>
                <p className="text-col-12 font-medium text-lg lg:text-2xl">
                  (18.6k Reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
