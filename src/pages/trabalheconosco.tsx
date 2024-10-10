import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react';
import HubSpotFormTrabalhe from "@/components/formhubtrabalhe";
import 'tailwindcss/tailwind.css';
import Nav from "@/shared/Nav";
import Footer from "@/shared/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TrabalheConosco() {
  return (
    <div className={inter.className}>
    <Nav />
    <div className="bg-[#FBFFF9] flex flex-col items-center justify-between">
      <motion.section
        id="contact"
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="px-6 md:px-0 md:pl-24 py-20">
          <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
            <h1>Trabalhe <br />conosco</h1>
          </div>
          <main className="flex text-lg flex-col md:flex-row justify-center content-center items-center md:gap-4 gap-2">
            <section className='flex md:w-1/3 flex-col g-12'>
              <HubSpotFormTrabalhe />
            </section>
            <hr className="w-0.5 h-96 bg-gray-400 border-none m-8 hidden md:block" />
            <section className='flex flex-col g-12'>
            <Image
              src="/images/job.jpg"
              alt="Imagem de funcionária da KL trabalhando"
              width={465}
              height={550}
            />
            </section>
          </main>
        </div>
      </motion.section>
    </div>
    <Footer />
    </div>
  )
}
