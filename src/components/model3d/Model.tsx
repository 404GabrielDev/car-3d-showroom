import "./Model.css";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Environment, useProgress } from "@react-three/drei";
import { TextureLoader, Mesh, RepeatWrapping, Vector3 } from "three";
import Card from "../card/Card";
import Logo from "../logoAnimation/Logo";
import { useLoading } from "../LoadingContext/LoadingContext";
import Loading from "../Loading/Loading";

function Model() {
  const garageGLTF = useLoader(GLTFLoader, "/models3d/studio.glb");
  const porscheGLTF = useLoader(GLTFLoader, "/models3d/porsche.glb");

  const { isLoading, setIsLoading } = useLoading();

  const textures = useLoader(TextureLoader, [
    "/textures/reflex/Metal049A_2K-PNG_Metalness.png",
    "/textures/reflex/Metal049A_2K-PNG_Roughness.png",
    "/background/background1.png",

    "/textures/floorblack/MetalPlates004_2K-PNG_Color.png",
    "/textures/floorblack/MetalPlates004_2K-PNG_Roughness.png",
    "/textures/floorblack/MetalPlates004_2K-PNG_NormalGL.png",
    "/textures/floorblack/MetalPlates004_2K-PNG_Displacement.png",
    "/textures/floorblack/MetalPlates004_2K-PNG_Metalness.png",

    "/textures/reflexMetal/MetalPlates006_2K-PNG_Color.png",
    "/textures/reflexMetal/MetalPlates006_2K-PNG_Metalness.png",
    "/textures/reflexMetal/MetalPlates006_2K-PNG_Roughness.png",
    "/textures/reflexMetal/MetalPlates006_2K-PNG_NormalGL.png",
    "/textures/reflexMetal/MetalPlates006_2K-PNG_Displacement.png",
  ]);

  const [metalMap, roughnessMap] = textures;
  const groundTextures = textures.slice(3, 8);
  const reflexTextures = textures.slice(8);

  useEffect(() => {
    try {
      garageGLTF.scene.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;

          if (mesh.name !== "ground_TilesSlateSquare001_2K_0") {
            mesh.material.map = reflexTextures[0];
            mesh.material.metalnessMap = reflexTextures[1];
            mesh.material.roughnessMap = reflexTextures[2];
            mesh.material.normalMap = reflexTextures[3];
            mesh.material.aoMap = reflexTextures[4];

            mesh.material.normalScale.set(1, 1);
            mesh.material.metalness = 1;
            mesh.material.roughness = 0.9;
            mesh.material.needsUpdate = true;
          } else {
            if (mesh.geometry.attributes.uv) {
              mesh.geometry.setAttribute("uv2", mesh.geometry.attributes.uv);
            }
            groundTextures.forEach((texture) => {
              texture.wrapS = texture.wrapT = RepeatWrapping;
              texture.repeat.set(7, 7);
            });

            mesh.material.map = groundTextures[0];
            mesh.material.roughnessMap = groundTextures[1];
            mesh.material.normalMap = groundTextures[2];
            mesh.material.displacementMap = groundTextures[3];
            mesh.material.displacementScale = 0.1;
            mesh.material.metalness = 1;
            mesh.material.roughness = 0.1;
            mesh.material.needsUpdate = true;

            mesh.position.z = -0.082;
            mesh.position.x = -0.3;
          }
        }
      });
    } catch (error) {
      console.error("Erro ao aplicar texturas: ", error);
    }
  }, [garageGLTF, porscheGLTF, textures, reflexTextures, groundTextures]);

  const targetRef = useRef();
  const orbitControlsRef = useRef();

  function SpotLightWithHelper({ target }) {
    const lightRef = useRef();
    return (
      <spotLight
        ref={lightRef}
        position={[0, 5, 10]}
        angle={0.3}
        penumbra={1}
        decay={2}
        distance={20}
        intensity={150}
        castShadow
        target={target}
      />
    );
  }

  function CameraAnimator({ orbitControlsRef }) {
    const { camera } = useThree();
    const targetPosition = new Vector3(-0.5, 1.1, 2.5);
    const initialPosition = useRef(new Vector3(-0.5, 1, 7));
    const animationDone = useRef(false);

    useEffect(() => {
      camera.position.copy(initialPosition.current);
    }, [camera]);

    useFrame(() => {
      if (animationDone.current) return;

      camera.position.lerp(targetPosition, 0.01);
      camera.lookAt(0, 0, 0);

      if (camera.position.distanceTo(targetPosition) < 0.01) {
        camera.position.copy(targetPosition);
        camera.lookAt(0, 0, 0);
        animationDone.current = true;

        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = true;
          orbitControlsRef.current.update();
        }
      } else {
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = false;
        }
      }
    });

    return null;
  }

  //capturando 1 frame
  function SceneReadyTrigger() {
    const hasRun = useRef(false);
    const { setIsLoading } = useLoading();
    const [error, setError] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (!hasRun.current) {
          console.warn("Timeout — forçando fim do loading");
          setError(true);
          setIsLoading(false);
        }
      }, 10000);
      return () => clearTimeout(timeout);
    }, [setIsLoading]);

    useFrame(() => {
      if (!hasRun.current && !error) {
        hasRun.current = true;
        console.log("Primeiro frame visível — desativando loading");
        setIsLoading(false);
      }
    });

    return null;
  }

  return (
    <>
      <div id="canvas-container">
        <Canvas shadows camera={{ position: [-0.5, 0.7, 2.5] }}>
          <Suspense fallback={null}>
            <SceneReadyTrigger />
            <ambientLight intensity={0.2} />
            <Environment preset="night" />
            <mesh ref={targetRef} position={[0, 1, 0]} visible={false} />
            <SpotLightWithHelper target={targetRef.current} />
            <directionalLight position={[0, 2, 1]} intensity={3} />
            <primitive
              object={garageGLTF.scene}
              scale={1}
              position={[0, 0, -3.5]}
            />
            <primitive
              object={porscheGLTF.scene}
              scale={50}
              position={[0, 0, 0]}
            />
            <CameraAnimator orbitControlsRef={orbitControlsRef} />
            <OrbitControls
              ref={orbitControlsRef}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.7}
              maxPolarAngle={Math.PI / 2.7}
            />
          </Suspense>
        </Canvas>

        <div id="cards">
          <div data-aos="fade-left" data-aos-duration="1000">
            <Card
              title="PERFORMANCE"
              cardTitle="PERFORMANCE"
              description="4.0L naturally aspirated flat-6 engine,
420 hp and 420 Nm of torque,
0–100 km/h in 4.4 seconds,
Top speed of 304 km/h"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="2000">
            <Card
              title="SPECIFICATIONS"
              cardTitle="SPECIFICATIONS"
              description="6-speed manual transmission,
Weight: 1,420 kg (DIN),
Dimensions: 4,456 × 1,801 × 1,267 mm,
Wheelbase: 2,482 mm"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="3000">
            <Card
              title="CHASSIS & DESIGN"
              cardTitle="Chassis & Design"
              description="Adjustable McPherson suspension,
Tires: 245/35 ZR20 (F), 295/30 ZR20 (R),
Fixed rear wing + functional diffuser,
Dual central sports exhaust"
            />
          </div>
        </div>

        <div id="logoLand">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default Model;
