import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Model from "./components/model3d/Model";
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/Loading/Loading";
import {
  LoadingProvider,
  useLoading,
} from "./components/LoadingContext/LoadingContext";
//disponibilizando as animações globalmente pra todos os componentes:
//CONTEXTO GLOBAL COM O COMPONENTE LOADINGA

setTimeout(() => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 900,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
}, 5500); // 6 segundos (6000 milissegundos)
function App() {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <div className="container-homePage">
      {isLoading && <Loading />}
      <div className="container-landPage"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <Navbar />
        <Model />
      </div>
    </div>
  );
}

export default App;
