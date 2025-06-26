import { useState } from "react";
import "./LandingPage.css";
import Model from "../../components/Scene/model3d/Model";
import SideBar from "../../components/UI/CarSideBar/CarSideBar";
import Navbar from "../../components/UI/navbar/Navbar";
import Logo from "../../components/UI/logoAnimation/Logo";
import UseWindowWidth from "../../components/UI/MobileOnly/UseWindowWidth";
import { useLoading } from "../../components/Context/LoadingContext/LoadingContext";

//remover Logo em celular, dando problemas


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
      path: "/models3d/porsche.glb",
      thumb: "/icons/PorscheIcon.webp",
      scale: 70,
      position: [0, -0.01, 0],
      rotation: [0.02, 0, 0],
    },
    {
      name: "BMW X6",
      path: "/models3d/bmw-x6.glb",
      thumb: "/icons/bmwX6Icon.webp",
      scale: 0.7,
      position: [-0.1, 0.41, 0],
      rotation: [0.02, 0, 0],
    },
    {
      name: "Mercedes",
      path: "/models3d/Mercedes.glb",
      thumb: "/icons/MercedesIcon.webp",
      scale: width < 500 ? 0.7 : 0.6,
      position: [-0.2, -0.01, -0.2],
      rotation: [0.02, 1.5, 0],
    },

    {
      name: "BMW-M4",
      path: "/models3d/BMW-M4.glb",
      thumb: "/icons/BMW-M4Icon.webp",
      scale: width < 500 ? 0.7 : 0.7,
      position: [-0.2, -0.01, -0.2],
      rotation: [0.015, 4.7, 0],
    },

    {
      name: "Jaguar-2015",
      path: "/models3d/Jaguar.glb",
      thumb: "/icons/JaguarIcon.webp",
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
