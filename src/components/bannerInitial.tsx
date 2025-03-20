import { motion } from "framer-motion";
import Link from "next/link";
import { smoothScrollTo } from "../utils/smoothScroll";
import React, { MouseEvent } from "react";

const BannerInitial: React.FC = () => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };
  return (
    <div
      className="w-full h-[740px] flex items-center bg-cover bg-center"
      id="start"
      style={{ backgroundImage: "url(/images/BannerMain.png)" }}
    >
      <motion.div
        className="relative p-8 md:p-16 text-white flex flex-col"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-3xl md:text-6xl leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          KL FACILITIES
        </motion.h1>
        <h1 className="mt-4 text-2xl md:text-4xl">
          A empresa de facilities <br />
          que mais cresce no Brasil
        </h1>
        <Link
          href="#contact"
          passHref
          onClick={(e) => handleSmoothScroll(e, "contact")}
        >
          <button className="mt-8 bg-[#779220] text-white py-4 px-8 rounded hover:bg-[#667a1d] transition duration-300">
            CONHEÇA NOSSO TRABALHO
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BannerInitial;
