import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ImageComparison = () => {
  const [active, setActive] = useState(false); // Para monitorar o estado ativo
  const [sliderValue, setSliderValue] = useState<number>(150); // Posição inicial do slider
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Função para mover o scroller
  const moveScroller = (x: number) => {
    if (wrapperRef.current) {
      const wrapperBounds = wrapperRef.current.getBoundingClientRect();
      const relativeX = x - wrapperBounds.left; // Calcula a posição relativa
      const boundedX = Math.max(0, Math.min(relativeX, wrapperBounds.width)); // Mantém o valor dentro dos limites
      setSliderValue(boundedX); // Define o valor do slider
    }
  };

  // Função que ativa o slider no desktop
  const handleMouseMove = (e: MouseEvent) => {
    if (!active) return;
    moveScroller(e.pageX);
  };

  // Função para o toque no mobile
  const handleTouchMove = (e: TouchEvent) => {
    if (!active) return;
    moveScroller(e.touches[0].pageX);
  };

  useEffect(() => {
    const stopSliding = () => setActive(false);

    // Adiciona os eventos de mouse e toque
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopSliding);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopSliding);

    return () => {
      // Remove os eventos ao desmontar o componente
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopSliding);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopSliding);
    };
  }, [active]);

  // Adicionar a classe noselect ao clicar para arrastar
  useEffect(() => {
    if (active) {
      document.body.classList.add('noselect');
    } else {
      document.body.classList.remove('noselect');
    }
  }, [active]);

  return (
    <div ref={wrapperRef} className="relative shadow-lg w-full h-96 overflow-hidden rounded-lg">
      {/* Imagem de antes */}
      <Image 
        src="/to/2befor.jpg" 
        alt="Before" 
        layout="fill" 
        objectFit="cover" 
        className="absolute rounded-lg top-0 left-0 w-full h-full" 
      />
      {/* Imagem de depois */}
      <Image 
        src="/to/2.jpg" 
        alt="After" 
        layout="fill" 
        objectFit="cover" 
        className="absolute rounded-lg top-0 left-0 w-full h-full" 
        style={{ clipPath: `inset(0 0 0 ${sliderValue}px)` }} 
      />
      {/* Scroller (ícone de controle) */}
      <div
        className="scroller absolute z-10 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-lg cursor-pointer"
        style={{
          left: `${sliderValue}px`,
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onMouseDown={() => setActive(true)}
        onTouchStart={() => setActive(true)}
      >
        <svg className="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
          <polygon points="0 50 37 68 37 32 0 50" style={{ fill: '#000' }} />
          <polygon points="100 50 64 32 64 68 100 50" style={{ fill: '#000' }} />
        </svg>
      </div>
      <style jsx>{`
        .scroller {
          transition: opacity 0.3s;
        }
        .scroller:hover {
          opacity: 1;
        }
        .scroller__thumb {
          width: 100%;
          height: 100%;
          padding: 5px;
        }
        .noselect {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </div>
  );
};

export default ImageComparison;
