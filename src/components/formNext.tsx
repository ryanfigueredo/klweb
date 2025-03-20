"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormNext() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    message: "",
    services: [] as string[],
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        router.push("/");
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg">
      {/* Campo Nome */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Qual é o seu nome?*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#779220] focus:border-[#779220]"
        />
      </div>

      {/* Campo Empresa */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Qual é o nome da sua empresa?*
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#779220] focus:border-[#779220]"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Qual é o seu email?*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#779220] focus:border-[#779220]"
        />
      </div>

      {/* Campo WhatsApp */}
      <div>
        <label
          htmlFor="whatsapp"
          className="block text-sm font-medium text-gray-700"
        >
          Qual é o seu número de WhatsApp?*
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#779220] focus:border-[#779220]"
        />
      </div>

      {/* Campo Mensagem */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Como podemos ajudar o seu negócio?**
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#779220] focus:border-[#779220]"
        />
      </div>

      {/* Botão Enviar */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#779220] text-white py-3 px-6 rounded-md hover:bg-[#667a1d] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#779220] focus:ring-offset-2"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
