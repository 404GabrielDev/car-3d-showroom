import "./ExplorePage.css";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState, useRef } from "react";
import UseWindowWidth from "../../components/UI/MobileOnly/UseWindowWidth";

const ExplorePage = () => {
  const [hoveredCard, setHoveredCard] = useState<
    null | "lexus" | "bmw" | "audi" | "Subaru"
  >(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const videoRef3 = useRef<HTMLVideoElement | null>(null);
  const videoRef4 = useRef<HTMLVideoElement | null>(null);

  const width = UseWindowWidth();
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: width < 800 ? true : false,
    slides: {
      perView: width < 800 ? 1 : 3,
    },
  });

  useEffect(() => {
    if (width >= 800) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3500);
    return () => clearInterval(interval);
  }, [width, instanceRef]);

  return (
    <section className="container-explorePage">
      <h1 id="title-explorePage">
        Engineered for Precision, Built with Power, Defined by Perfection
      </h1>

      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img
            id="cardImageSlider"
            src={`${import.meta.env.BASE_URL}/explorePage/2001Mazda.webp`}
            alt="Mazda"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img id="cardImageSlider" src={`${import.meta.env.BASE_URL}/explorePage/BMW.webp`} alt="BMW" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            id="cardImageSlider"
            src={`${import.meta.env.BASE_URL}/explorePage/Mercedes-Benz-SL65.webp`}
            alt="Mercedes"
          />
        </div>
      </div>

      <h1 id="title-containerCards">
        Unleash the machine. Feel every heartbeat on the road.
      </h1>

      <div className="container-carsHolder">
        <section
          className="container-cardCars"
          onMouseEnter={() => setHoveredCard("lexus")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* imagem */}
          <motion.img
            src={`${import.meta.env.BASE_URL}/explorePage/Lexus.webp`}
            alt="Car"
            initial={{ opacity: 1 }}
            animate={{ opacity: hoveredCard === "lexus" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* video com animação de fade, na entrada e saida */}
          <AnimatePresence>
            {hoveredCard === "lexus" && (
              <motion.video
                id="video-lexus"
                preload="auto"
                key="lexus-video"
                ref={videoRef}
                src={`${import.meta.env.BASE_URL}/explorePage/Lexus-ls.webm`}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onLoadedData={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
              />
            )}
          </AnimatePresence>
        </section>

        <section
          className="container-cardCars"
          onMouseEnter={() => setHoveredCard("bmw")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* imagem */}
          <motion.img
            src={`${import.meta.env.BASE_URL}/explorePage/BMWM3.webp`}
            alt="Car"
            initial={{ opacity: 1 }}
            animate={{ opacity: hoveredCard === "bmw" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* video com animação de fade, na entrada e saida */}
          <AnimatePresence>
            {hoveredCard === "bmw" && (
              <motion.video
                id="video-bm"
                preload="auto"
                key="bmw-video"
                ref={videoRef2}
                src={`${import.meta.env.BASE_URL}/explorePage/BMW-M.mp4`}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onLoadedData={() => {
                  if (videoRef2.current) {
                    videoRef2.current.currentTime = 0;
                    videoRef2.current.play();
                  }
                }}
              />
            )}
          </AnimatePresence>
        </section>

        <section
          className="container-cardCars"
          onMouseEnter={() => setHoveredCard("audi")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* imagem */}
          <motion.img
            src={`${import.meta.env.BASE_URL}/explorePage/AudiIcon.webp`}
            alt="Car"
            initial={{ opacity: 1 }}
            animate={{ opacity: hoveredCard === "audi" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* video com animação de fade, na entrada e saida */}
          <AnimatePresence>
            {hoveredCard === "audi" && (
              <motion.video
                id="video-audi"
                preload="auto"
                key="audi-video"
                ref={videoRef3}
                src={`${import.meta.env.BASE_URL}/explorePage/Audi-r8.webm`}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onLoadedData={() => {
                  if (videoRef3.current) {
                    videoRef3.current.currentTime = 0;
                    videoRef3.current.play();
                  }
                }}
              />
            )}
          </AnimatePresence>
        </section>

        <section
          className="container-cardCars"
          onMouseEnter={() => setHoveredCard("Subaru")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* imagem */}
          <motion.img
            src={`${import.meta.env.BASE_URL}/explorePage/SubaruIcon.webp`}
            alt="Car"
            initial={{ opacity: 1 }}
            animate={{ opacity: hoveredCard === "Subaru" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* video com animação de fade, na entrada e saida */}
          <AnimatePresence>
            {hoveredCard === "Subaru" && (
              <motion.video
                id="video-Subaru"
                preload="auto"
                key="Subaru-video"
                ref={videoRef4}
                src={`${import.meta.env.BASE_URL}/explorePage/Subaru-2022.webm`}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onLoadedData={() => {
                  if (videoRef4.current) {
                    videoRef4.current.currentTime = 0;
                    videoRef4.current.play();
                  }
                }}
              />
            )}
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
};

export default ExplorePage;
