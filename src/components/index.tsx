"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { MouseEvent } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";
import HubSpotForm from "./formhub";
import ImageComparison from "./ImageComparison";
import ImageComparisonTwo from "./ImageComparisonTwo";
import ImageComparisonTree from "./ImageComparisonTree";
import BannerInitial from "./bannerInitial";
import Gallery from "./gallery";
import AboutSection from "./aboutsection";
import FormComponent from "./contact";

const LandingPage: React.FC = () => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <div className="bg-[#FBFFF9] flex flex-col items-center justify-between min-h-screen start-0">
      <BannerInitial />
      <Link
        href={"https://wa.me/5541984713006"}
        target="_blank"
        className="fixed bottom-5 right-5 flex items-center justify-center bg-green-400 hover:bg-green-600 w-16 h-16 rounded-full shadow-md z-50 transition-colors duration-300"
      >
        <Image
          className="px-2"
          src="/svg/wp.svg"
          width="42"
          height="42"
          alt="Ícone do WhatsApp, entre em contato."
        />
      </Link>
      <motion.section
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
      >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>
            Alguns motivos para você <br />
            confiar na KL Facilities
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div>
            <motion.div className="bg-[url('/images/Button.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start">
              <div>
                <p className="text-lg font-semibold">Abrangência Nacional</p>
                <p className="text-sm font-normal">
                  Estamos presentes em cerca de 10 estados no Brasil, oferecendo
                  nossos serviços com a mesma qualidade e eficiência em todas as
                  regiões.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="bg-[url('/images/Button2.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div>
                <p className="text-lg font-semibold">Otimização de Tempo</p>
                <p className="text-sm font-normal">
                  Contamos com uma equipe de colaboradores capacitados e
                  treinados, garantindo a excelência na prestação dos nossos
                  serviços.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="bg-[url('/images/Button3.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div>
                <p className="text-lg font-semibold">Redução de Custos</p>
                <p className="text-sm font-normal">
                  Focamos na redução de custos, otimização do tempo e aumento da
                  produtividade, proporcionando economia significativa para
                  nossos clientes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <section className="bg-[#292B74] w-full md:px-0 md:pl-24 py-20 mt-4">
        <section className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
            <motion.div
              className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+200</div>
              <p className="text-lg font-semibold text-white">
                Projetos finalizados
              </p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/projects.svg"
                  alt="Icone de projetos finalizados"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+10</div>
              <p className="text-lg font-semibold text-white">
                Anos de experiência
              </p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/clean.svg"
                  alt="Icone de anos de experiência"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+1 mi</div>
              <p className="text-lg font-semibold text-white">
                De investimento
              </p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/money.svg"
                  alt="Icone de investimento"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+100</div>
              <p className="text-lg font-semibold text-white">Parceiros</p>
              <div className="mt-2">
                <Image
                  src="/svg/partner.svg"
                  alt="Ícone de parceiros"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      <motion.section
        id="about"
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4 flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0, duration: 0.5 },
        }}
      >
        <AboutSection />
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section
        className="w-full px-6  md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0, duration: 0.5 },
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-2">
          <ImageComparison />
          <br />
          <ImageComparisonTwo />
          <br />
          <ImageComparisonTree />
        </div>
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section
        id="partner"
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>
            Parceiros que confiam <br />
            na KL Facilities
          </h1>
        </div>

        <div className="grid items-center drop-shadow-md gap-2">
          <div className="flex gap-12 justify-center ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/1.jpg"
                alt="Logo 1"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/2.jpg"
                alt="Logo 2"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/3.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/4.jpg"
                alt="Logo 4"
                width={200}
                height={100}
              />
            </motion.div>
          </div>
          <div className="flex gap-12 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/5.jpg"
                alt="Logo 1"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/6.jpg"
                alt="Logo 2"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/7.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/8.jpg"
                alt="Logo 4"
                width={200}
                height={100}
              />
            </motion.div>
          </div>
          <div className="flex gap-12 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/9.jpg"
                alt="Logo 1"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/10.jpg"
                alt="Logo 2"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/11.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/12.jpg"
                alt="Logo 4"
                width={200}
                height={100}
              />
            </motion.div>
          </div>
          <div className="flex gap-2 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/13.jpg"
                alt="Logo 1"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/14.jpg"
                alt="Logo 2"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/15.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/16.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded"
                src="/images/partners/17.jpg"
                alt="Logo 3"
                width={200}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />

      <motion.section
        id="photo"
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <Gallery />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <FormComponent />
      </motion.section>
    </div>
  );
};

export default LandingPage;
