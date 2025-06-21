import { useEffect} from "react";
import "./App.css";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage";
// @ts-expect-error AOS has no typing.
import AOS from 'aos';


function App() {
  useEffect(() => {
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
    }, 5000);
  });

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
