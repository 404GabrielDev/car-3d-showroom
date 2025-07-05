import { useState } from "react";
import "./LandingPage.css";
import Model from "../../components/Scene/model3d/Model";
import SideBar from "../../components/UI/CarSideBar/CarSideBar";
import Navbar from "../../components/UI/navbar/Navbar";
import UseWindowWidth from "../../components/UI/MobileOnly/UseWindowWidth";
import { useLoading } from "../../components/Context/LoadingContext/LoadingContext";


type Car = {
  name: string;
  path: string;
  thumb: string;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

function LandingPage() {
  const { isLoading } = useLoading();

  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const width = UseWindowWidth();

  const cars: Car[] = [
    {
      name: "Porsche",
      path: `${import.meta.env.BASE_URL}models3d/porsche.glb`,
      thumb: `${import.meta.env.BASE_URL}icons/PorscheIcon.webp`,
      scale: 70,
      position: [0, -0.01, 0],
      rotation: [0.02, 0, 0],
    },
    {
      name: "BMW X6",
      path: `${import.meta.env.BASE_URL}models3d/bmw-x6.glb`,
      thumb: `${import.meta.env.BASE_URL}icons/bmwX6Icon.webp`,
      scale: 0.7,
      position: [-0.1, 0.41, 0],
      rotation: [0.02, 0, 0],
    },
    {
      name: "Mercedes",
      path: `${import.meta.env.BASE_URL}models3d/Mercedes.glb`,
      thumb: `${import.meta.env.BASE_URL}icons/MercedesIcon.webp`,
      scale: width < 500 ? 0.7 : 0.6,
      position: [-0.2, -0.01, -0.2],
      rotation: [0.02, 1.5, 0],
    },

    {
      name: "BMW-M4",
      path: `${import.meta.env.BASE_URL}models3d/BMW-M4.glb`,
      thumb: `${import.meta.env.BASE_URL}icons/BMW-M4Icon.webp`,
      scale: width < 500 ? 0.7 : 0.7,
      position: [-0.2, -0.01, -0.2],
      rotation: [0.015, 4.7, 0],
    },

    {
      name: "Jaguar-2015",
      path: `${import.meta.env.BASE_URL}models3d/Jaguar.glb`,
      thumb: `${import.meta.env.BASE_URL}icons/JaguarIcon.webp`,
      scale: width < 500 ? 85 : 80,
      position: [-0.2, -0.01, -0.2],
      rotation: [0.015, 0, 0],
    },
  ];

  const handleSelectCar = (index: number) => {
    if (currentCarIndex === index) return;
    setCurrentCarIndex(index);
  };

  return (
    <div className="container-homePage">
      <Navbar />

      <div
        className="container-landPage"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <section className="container-sideBarCars">
          <SideBar
            cars={cars}
            currentCarIndex={currentCarIndex}
            handleSelectCar={handleSelectCar}
          />
        </section>

        <Model cars={cars} currentCarIndex={currentCarIndex} />
      </div>
    </div>
  );
}

export default LandingPage;
