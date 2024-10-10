import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-[#292B74] h-auto p-10 absolute md:w-full '>
      <div className='text-gray-300  flex flex-col md:flex-row items-start justify-between'>
        <div>
          <Image
            className='pn-2'
            draggable={false}
            src="/svg/logo.svg"
            alt="Logomarca KL Facilities"
            width={127}
            height={67}
            priority
            style={{ filter: 'invert(1) brightness(300%) saturate(0%) contrast(400%)' }}
          />
          <p className="text-sm text-justify pt-2">
            Fornecer soluções em terceirização<br />
            de serviços que contribuam para o <br />
            sucesso dos nossos clientes.
          </p>
        </div>

        <div className="md:py-0 py-2 cursor-pointer ">
          <ul>
          <h4 className="font-bold">
            Navegação
            </h4>
            <hr className="py-2"/>
            <li>
            <Link href="/" className="hover:text-gray-400 transition duration-150 ease-in-out" passHref>
              Início
          </Link>
            </li>
            <li>
            <Link href="/" className="hover:text-gray-400 transition duration-150 ease-in-out" passHref>
              Quem Somos
          </Link>
            </li>
            <li>
            <Link className="hover:text-gray-400 transition duration-150 ease-in-out" href="/" passHref> 
              Parceiros
          </Link>
            </li>
          </ul>
        </div>

        <div className="md:py-0 py-2 cursor-pointer">
          <ul>
            <h4 className="font-bold ">
            Oportunidades
            </h4>
            <hr className="py-2"/>
            <li>
            <Link href="/trabalheconosco" className="hover:text-gray-400 transition duration-150 ease-in-out">
              Trabalhe Conosco
            </Link>
            </li>
          </ul>
        </div>

        <div className="md:py-0 py-2 cursor-pointer">
          <ul>
            <h4 className="font-bold">
            Social
            </h4>
            <hr className="py-2"/>
            <li className="hover:text-gray-400 transition duration-150 ease-in-out">
            contato@klfacilities.com.br
            </li>
            <li className="hover:text-gray-400 transition duration-150 ease-in-out">
            +55 41 98471-3006
            </li>
            
            <div className="flex py-2">
            <Link href="https://api.whatsapp.com/send/?phone=5541984713006&text&type=phone_number&app_absent=0" className="hover:scale-125 transition duration-50 ease-in-out p-2" passHref target="_blank">
              <Image width={20} height={20} src="/svg/wp.svg" alt="WhatsApp" />
            </Link>
            <Link href="https://www.instagram.com/klfacilities/" className="hover:scale-125 transition duration-50 ease-in-out p-2" passHref target="_blank">
              <Image width={20} height={20} src="/svg/insta.svg" alt="Instagram" />
            </Link>

            <Link href="https://www.linkedin.com/company/klfacilities/" className="hover:scale-125 transition duration-50 ease-in-out p-2" passHref target="_blank">
              <Image width={20} height={20} src="/svg/linkedin.svg" alt="LinkedIn" />
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61557548131305" className="hover:scale-125 transition duration-50 ease-in-out p-2" passHref target="_blank">
            <Image width={20} height={20} src="/svg/fb.svg" alt="Facebook" />
            </Link>              
            </div>
          </ul>
        </div>

        
        
      
      </div>

      <hr className="p10" />
      <div className="flex text-slate-500  ">
        <p className="text-sm font-normal hover:text-slate-400 transition duration-150 ease-in-out p-2">© 2024 KL Facilities Todos Direitos Reservados</p>
        <br /><br />
        <a href="https://ryanfigueredo.com/" className="text-sm hover:text-slate-400 font-normal transition duration-150 ease-in-out p-2">Desenvolvido por Ryan Figueredo</a>
      </div>
    </footer>

  );
}

export default Footer;
