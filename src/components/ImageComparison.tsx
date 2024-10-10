import React, { useState, useRef } from 'react';
import Image from 'next/image';

const ImageComparison = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const beforeRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative shadow-lg w-full h-96">
      <Image 
        src="/to/1befor.jpg" 
        alt="After" 
        layout="fill" 
        objectFit="cover" 
        className="absolute rounded-lg top-0 left-0 w-full h-full" 
      />
      <Image 
        src="/to/1.jpg" 
        alt="Before" 
        ref={beforeRef} 
        layout="fill" 
        objectFit="cover" 
        className="absolute rounded-lg top-0 left-0 w-full h-full" 
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }} 
      />
      
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderValue} 
        ref={sliderRef}
        className="absolute appearance-none w-full h-full opacity-0 rounded-lg outline-none focus:outline-none"
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <div 
        className="absolute pointer-events-none" 
        style={{
          left: `${sliderValue}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
         <Image 
          src="/svg/arrow-right.svg" 
          alt="Slider Icon" 
          width={48} 
          height={48} 
          className="md:w-12 md:h-12 shadow-xl bg-opacity-50 bg-black rounded-xl" 
        />
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 50px;
          height: 50px;
          cursor: pointer;
        }

        .slider-icon {
          transition: transform 0.2s ease-in-out;
        }

        .slider-icon:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default ImageComparison;
