import { servicesDiv } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 lg:py-27.5 py-10">
      <Container className="grid lg:grid-cols-2 gap-20 lg:gap-8 lg:items-center">
        <div>
          <p className="font-bold text-base lg:text-xl lg:tracking-[17.5%] uppercase text-col-7 mb-7.25 lg:mb-13.25">
            Our Story & Servicess
          </p>
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-black mb-10 lg:mb-19.5">
            Our Culinary Journey And Services
          </h2>
          <p className="font-medium text-lg text-col-9 lg:text-[26px] lg:leading-[159%] lg:mb-13.25 mb-10">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="lg:py-5.25 lg:mr-8.75 mr-5 lg:px-11.75 rounded-full bg-col-2 text-white font-semibold text-xl px-8 py-3 lg:text-[26px] primaryHover shadow-col-1">
            Explore
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-9">
          {servicesDiv.map((service) => (
            <div
              key={service.id}
              className="px-7 pt-11.25 pb-9.5 rounded-[30px] text-center shadow-col-5 bg-white"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={100}
                loading="eager"
                height={100}
                className="w-16 mx-auto"
              />
              <h3 className="mt-8 text-col-13 font-bold text-xl lg:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4.25 text-col-14 lg:text-xl text-base font-semibold">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
