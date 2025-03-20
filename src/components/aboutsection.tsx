import { motion } from "framer-motion";

const AboutSection = () => {
  const topics = [
    {
      icon: "🌱",
      title: "Compromisso com Sustentabilidade e Qualidade",
      description:
        "Somos uma empresa em constante expansão, comprometida com políticas de sustentabilidade e a excelência na qualidade dos serviços prestados.",
    },
    {
      icon: "🛠️",
      title: "Portfólio Diversificado",
      description:
        "Atuamos nos principais ramos da terceirização de serviços, oferecendo soluções personalizadas para atender às necessidades específicas de cada cliente.",
    },
    {
      icon: "👥",
      title: "Equipe Capacitada",
      description:
        "Contamos com uma equipe de colaboradores altamente capacitados e treinados, prontos para oferecer o melhor atendimento e suporte aos nossos clientes.",
    },
    {
      icon: "✨",
      title: "Propostas Personalizadas",
      description:
        "Nosso modelo de trabalho é baseado na elaboração de propostas personalizadas para cada tipo de serviço, garantindo uma experiência única e satisfatória.",
    },
    {
      icon: "⏱️",
      title: "Foco em Eficiência",
      description:
        "Nosso principal objetivo é a redução de custos, otimização do tempo e aumento da produtividade para nossos clientes.",
    },
    {
      icon: "📈",
      title: "Inovação e Tecnologia",
      description:
        "Investimos em tecnologia e inovação para oferecer soluções modernas e eficientes, garantindo que nossos clientes estejam sempre à frente no mercado.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay entre as animações dos tópicos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      {/* Vídeo em Largura Total */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/movie.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </div>

      {/* Tópicos com Ícones */}
      <motion.div
        className="flex justify-center p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex  items-start">
                <span className="text-3xl mr-4">{topic.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-[#667a1d]">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
