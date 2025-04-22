import React from "react";
import { motion } from "motion/react";

function AvatarSection() {
  return (
    <div className="w-full h-full p-10 flex flex-col gap-6 justify-center items-center">
      <span className="text-3xl text-center font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        <span className="text-primary">" </span>Top 3 orang tengil tapi jago
        <span className="text-primary"> "</span>
      </span>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        className="flex flex-col gap-6"
      >
        <div className="text-center">
          <img src="/avatar.png" className="w-72 h-72" />
          <div className="flex flex-col translate-x-4">
            <span className="text-lg font-medium">M. Ikhsan Kurniawan</span>
            <span className="text-lg text-gray-500 font-base">2306210784</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AvatarSection;
