import React from "react";
import Breadcrumb from "./Breadcrumb";
import AnimateOnScroll from "./AnimateOnScroll/AnimateOnScroll";

const HeroSub = ({ title, description, breadcrumbLinks }) => {
  return (
    <header className="relative bg-gradient-to-br from-orange-400/20 via-orange-300/10 to-orange-500/20 max-w-full">
      <section className="relative z-20 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Title */}
            <AnimateOnScroll type="fade-right">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                {title}
              </h1>
            </AnimateOnScroll>

            {/* Description */}
            {description && (
              <AnimateOnScroll type="fade-down" delay={0.3}>
                <p className="mt-4 md:text-xl text-lg text-gray-600">
                  {description}
                </p>
              </AnimateOnScroll>
            )}

            {/* Breadcrumb */}
            <AnimateOnScroll type="fade-up" delay={0.7}>
              <div className="mt-6">
                <Breadcrumb links={breadcrumbLinks} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Bottom SVG Shape */}
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-0 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white w-full h-20 -mt-px"></div>
      </div>
    </header>
  );
};

export default HeroSub;
