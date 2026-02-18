import { useEffect, useState } from 'react';

export const AqiPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedAqi, setAnimatedAqi] = useState(0);
  const targetAqi = 42;

  const aqiData = {
    status: "EXCELLENT",
    statusColor: "#44a531",
    liveLabel: "LIVE AQI",
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate AQI number count-up
    const duration = 2000;
    const steps = 60;
    const increment = targetAqi / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAqi) {
        setAnimatedAqi(targetAqi);
        clearInterval(timer);
      } else {
        setAnimatedAqi(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center gap-8 lg:gap-[405px] px-4 sm:px-8 lg:px-[81px] py-12 sm:py-16 lg:py-[90px] relative w-full bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://c.animaapp.com/63k0gsAj/img/uploaded-asset-1771393663442-0.png)' }}
      data-model-id="1:5"
      role="main"
      aria-label="Air Quality Index Dashboard"
    >
      <section
        className={`relative w-full max-w-[855px] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-labelledby="aqi-status"
        style={{ transitionDelay: '200ms' }}
      >
        <div
          className="mb-4 sm:mb-6 lg:mb-8 [font-family:'Inter',Helvetica] font-medium text-[#646464] text-base sm:text-xl lg:text-2xl tracking-[2.88px] leading-6 whitespace-nowrap"
          aria-label="Live Air Quality Index indicator"
        >
          {aqiData.liveLabel}
        </div>

        <p
          id="aqi-status"
          className="[font-family:'Inter',Helvetica] font-medium text-transparent text-[52px] tracking-[2.08px] leading-[83.2px]"
        >
          <span className="text-[#646464]">
            Indoor air quality is{" "}
          </span>

          <span
            className="transition-all duration-500 ease-out hover:brightness-110"
            style={{ color: aqiData.statusColor }}
            aria-label={`Air quality status: ${aqiData.status}`}
          >
            {aqiData.status}
          </span>
        </p>
      </section>

      <figure
        className={`relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-label="Air quality visualization"
        style={{ transitionDelay: '400ms' }}
      >
        <div className="relative group">
          <img
            className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
            alt="Air quality index visualization showing current measurements"
            src="https://c.animaapp.com/63k0gsAj/img/frame-1.png"
          />
        </div>

        {/* Info tooltip on hover */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Real-time air quality monitoring
          </div>
        </div>
      </figure>
    </div>
  );
};
