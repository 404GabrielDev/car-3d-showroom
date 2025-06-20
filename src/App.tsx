import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LandingPage from "./pages/LandingPage";
import Teste from "./pages/Teste/Test";

//AJUSTAR OS CARDS (PRA UM COMPONENTE SEPARADO) ❌
//TIPAR TUDO ❌
//LOGO FICANDO POR CIMA DO LOADING ❌
//FAZER INTEGRAÇÃO PRA UM COMPONENTE SEPARADO ❌

function App() {
  useEffect(() => {
    const time = setTimeout(() => {
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
    }, 5000);
  });

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
