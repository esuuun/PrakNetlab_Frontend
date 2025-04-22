import React from "react";
import { motion } from "motion/react";

const classNames = {
  container: "max-w-7xl mx-auto",
  header: "text-center",
  grid: "grid max-w-md mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none",
  card: "bg-gray-100 rounded-2xl p-8",
  footer:
    "flex items-center justify-between pt-2 mt-2 border-t border-gray-200",
};

const list = [
  {
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sistem Basis Data dan Praktikum",
    avatarSrc: "/DMJLogo.svg",
  },
  {
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sistem Operasi",
    avatarSrc: "/OSLogo.svg",
  },
  {
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Desain dan Manajemen Jaringan Komputer",
    avatarSrc: "/SBDLogo.svg",
  },
];

function NetlabList() {
  return (
    <section
      className="py-12 bg-background sm:py-16 lg:py-20 xl:py-24"
      id="netlabList"
    >
      <div className={`px-4 sm:px-6 lg:px-8 ${classNames.container}`}>
        <div className={`max-w-3xl mx-auto ${classNames.header}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-primary">Netlab</span> List that we have!
          </h2>
        </div>

        <div className={`grid-cols-1 gap-5 ${classNames.grid}`}>
          {list.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              key={index}
            >
              <div
                key={index}
                className={`${classNames.card} ${
                  index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
                } hover:-translate-y-8 duration-300 ease-in-out cursor-pointer`}
              >
                <div className="flex items-center justify-center -mt-14 mb-6">
                  <img className="object-fill w-24 h-24" src={item.avatarSrc} />
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-black font-bold text-lg text-center w-full">
                    {item.name}
                  </span>
                </div>
                <div className={classNames.footer}></div>
                <blockquote>
                  <p className="text-base text-center font-medium leading-9 text-gray-900">
                    {item.quote}
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetlabList;
