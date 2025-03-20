import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/images/gallery/photo2.jpeg", alt: "Descrição da Foto 1" },
    { src: "/images/gallery/photo2s.jpeg", alt: "Descrição da Foto 2" },
    { src: "/images/gallery/photo3.png", alt: "Descrição da Foto 3" },
    { src: "/images/gallery/photo1.jpeg", alt: "Caso giga" }, // Foto central
    { src: "/images/gallery/photo5.jpeg", alt: "Descrição da Foto 5" },
    { src: "/images/gallery/photo6.jpeg", alt: "Descrição da Foto 6" },
    { src: "/images/gallery/photo7.jpeg", alt: "Descrição da Foto 7" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay entre as animações das fotos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center h-[60vh] w-full p-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Lado Esquerdo - 3 Fotos */}
      <div className="flex flex-col gap-4 w-full md:w-1/4 h-full">
        {images.slice(0, 3).map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full h-1/3 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Foto Central - Destaque */}
      <motion.div
        variants={itemVariants}
        className="relative w-full md:w-2/4 h-full rounded-lg overflow-hidden shadow-lg"
      >
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Lado Direito - 3 Fotos */}
      <div className="flex flex-col gap-4 w-full md:w-1/4 h-full">
        {images.slice(4, 7).map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full h-1/3 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
