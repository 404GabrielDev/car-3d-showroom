import React, { useEffect, useState, Suspense } from "react";
import "./LandingPage.css";
import AOS from "aos";
import Model from "../components/Scene/model3d/Model";
import SideBar from "../components/UI/CarSideBar/CarSideBar";
import Navbar from "../components/UI/navbar/Navbar";
import Loading from "../components/UI/LoadingPage/Loading";
import Logo from "../components/UI/logoAnimation/Logo";
import UseWindowWidth from "../components/UI/MobileOnly/UseWindowWidth";
import { useLoading } from "../components/Context/LoadingContext/LoadingContext";

//TIPAR TUDO ❌
//FAZER GIT PRA ESSA BRANCH (SEGURANÇA)
const cars = [
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
    scale: 0.7,
    position: [-0.2, -0.01, -0.2],
    rotation: [0.02, 1.5, 0],
  },
];

function LandingPage() {
  const { isLoading, setIsLoading } = useLoading();
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const width = UseWindowWidth();

  const cars = [
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
  ];

  const handleSelectCar = (index) => {
    if (currentCarIndex === index) return;
    setCurrentCarIndex(index);
  };

  return (
    <div className="container-homePage">
      <div className="container-logo" data-aos="zoom-in">
        <Logo />
      </div>
      {isLoading && <Loading />}
      <div
        className="container-landPage"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <Navbar />      
        
        <SideBar
          cars={cars}
          currentCarIndex={currentCarIndex}
          handleSelectCar={handleSelectCar}
        />
        <Model cars={cars} currentCarIndex={currentCarIndex} />
      </div>
    </div>
  );
}

export default LandingPage;
