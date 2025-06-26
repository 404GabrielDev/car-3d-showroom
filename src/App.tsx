import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage/LandingPage";
// @ts-expect-error AOS has no typing.
import AOS from "aos";
import { useLoading } from "./components/Context/LoadingContext/LoadingContext";
import Loading from "./components/UI/LoadingPage/Loading";
import { motion } from "framer-motion";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import Footer from "./components/UI/Footer/Footer";

//arrumar os videos dos placeholders
//arrumar layout mobile/adicionar fontes

function App() {
  const { isLoading } = useLoading();

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
    });
  });

  console.log("Conteudo de isLoading", isLoading);

  return (
    <>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loading />
        </motion.div>
      )}
      <LandingPage />
      <ExplorePage />
      <Footer />
    </>
  );
}

export default App;
