import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/736x/b1/f0/27/b1f027ea65b5ca746e5ab7e94347d3a8.jpg",
    "https://i.pinimg.com/1200x/25/18/3d/25183dcf4733ba1e006ec9b97403560a.jpg",
    "https://i.pinimg.com/1200x/62/35/3b/62353b2c48215dd5c40fbf3635c13df1.jpg",
    "https://i.pinimg.com/1200x/92/16/dd/9216dddef5beea7fd02e413245c42652.jpg",
  ];

  const [current, setCurrent] = useState(0);

  //  for Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">

 
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          alt="slide"
        />
      ))}

     
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

     
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
