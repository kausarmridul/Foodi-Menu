import { popularCategories } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="pt-8 pb-20">
      <Container>
        <div className="text-center">
          <p className="font-bold text-base lg:text-xl lg:tracking-[17.5%] uppercase text-col-7 mb-7.25">
            Customer Favorites
          </p>
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-black mb-19.5">
            Popular Catagories
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-9.5">
          {popularCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white shadow-col-3 rounded-[40px] pt-10 pb-11.5 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="size-38.25 bg-col-8 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={200}
                  loading="eager"
                  height={200}
                  className={`${cat.width ? "w-8/10" : "w-5/10"} `}
                />
              </div>
              <h3 className="font-semibold text-xl lg:text-[30px]  text-col-5">
                {cat.title}
              </h3>
              <p className="font-medium text-base lg:text-[22px] text-col-9">
                {cat.items}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
