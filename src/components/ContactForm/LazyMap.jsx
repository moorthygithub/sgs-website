import { useEffect, useRef, useState } from "react";

function LazyMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        <div
          ref={mapRef}
          className="min-h-[400px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isVisible ? (
            <>
              {!mapLoaded && (
                <div className="absolute inset-0 rounded-xl w-full h-[590px] bg-gray-200 shadow-md animate-pulse"></div>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31101.46548651626!2d77.596672!3d12.992104000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae165d38ad14c7%3A0xfae13fd0c5a97b8d!2sSardar%20Patel%20Bhavan!5e0!3m2!1sen!2sus!4v1765214762605!5m2!1sen!2sus"
                width="1114"
                height="590"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full shadow-md relative z-10"
                onLoad={() => setMapLoaded(true)}
              ></iframe>
            </>
          ) : (
            <div className="rounded-xl w-full h-[590px] bg-gray-200 shadow-md animate-pulse"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LazyMap;
