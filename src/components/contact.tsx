import Link from "next/link";
import HubSpotForm from "./formhubtrabalhe";
import Image from "next/image";
import HubSpotFormTrabalhe from "./formhub";
import FormNext from "./formNext";

const FormComponent = () => {
  return (
    <div className=" px-6 md:px-0 md:pl-24 py-20 mt-4">
      <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
        <h1>
          Receba o nosso
          <br /> contato
        </h1>
      </div>

      <main className="flex text-lg flex-col md:flex-row justify-center content-center items-center md:gap-4 gap-2">
        <section className="flex md:w-1/3 flex-col g-12">
          <FormNext />
        </section>

        <hr className="w-0.5 h-96 bg-gray-400 border-none m-8 hidden md:block" />

        <section className="flex flex-col g-12">
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image
              className="imageBox"
              src="/svg/phone.svg"
              alt="Ícone do Telefone para contato"
              width={52}
              height={50}
            />
            <div className="px-4">
              <h1 className="text-md md:text-2xl font-bold text-[#667a1d]">
                Telefone
              </h1>
              <Link className="text-gray-600" href="tel:5541984022907">
                +55 41 98402-2907
              </Link>
            </div>
          </div>
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image
              className="imageBox"
              src="/svg/whatsapp.svg"
              alt="Ícone do Whats App"
              width={52}
              height={50}
            />
            <div className="px-4">
              <h1 className="text-md md:text-2xl font-bold text-[#667a1d]">
                WhatsApp
              </h1>
              <Link
                className="text-gray-600"
                href="https://wa.me/5541984022907"
              >
                Clique para entrar em contato
              </Link>
            </div>
          </div>
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image
              className="imageBox"
              src="/svg/mail.svg"
              alt="Ícone do email para contato"
              width={50}
              height={50}
            />
            <div className="px-4">
              <h1 className="text-md md:text-2xl font-bold text-[#667a1d]">
                Email
              </h1>
              <a
                className="text-gray-600"
                href="mailto:contato@klfacilities.com.br"
              >
                contato@klfacilities.com.br
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FormComponent;
