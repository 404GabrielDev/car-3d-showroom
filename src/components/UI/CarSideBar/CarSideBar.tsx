import { useState } from "react";
import "./CarSideBar.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../LoadingCar/LoadingCar";
//OTIMIZAR BOTÃO

type Car = {
  name: string;
  path: string;
  thumb: string;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

type SideBarProps = {
  currentCarIndex: number;
  handleSelectCar: (index: number) => void;
  cars: Car[];
};

function SideBar({
  currentCarIndex,
  handleSelectCar: originalHandleSelectCar,
  cars,
}: SideBarProps) {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  const [isLoading, setIsLoading] = useState(false);

  const time = (index: number) => {
    if (currentCarIndex === index) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setSideBar(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  };

  const timeHandleIndex = (index: number) => {
    setTimeout(() => {
      originalHandleSelectCar(index);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className="loading-container"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`container-gallery ${sideBar ? "open" : ""}`}>
        <div className="container-toggleBtn" onClick={showSideBar}>
          <ToggleButton />
        </div>

        <div className="icons-showroom">
          {cars.map((car, index) => (
            <img
              key={car.name}
              src={car.thumb}
              alt={car.name}
              onClick={() => {
                timeHandleIndex(index);
                time(index);
              }}
              className={index === currentCarIndex ? "selected" : ""}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
