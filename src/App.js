import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  CubeCamera,
} from "@react-three/drei";
import { Model } from "./Model";
import { Ground } from "./Groundx";
// import { Perf } from "r3f-perf";
import { useRef, useEffect } from "react";
// import { Lights } from "./Lights";

function Rig({ children }) {
  const { camera } = useThree(); // Use the useThree hook inside the Rig component
  useEffect(() => {
    // Here you can use camera and other state from useThree
    console.log(camera);
  }, [camera]); // Depend on camera to update

  return children; // Render children passed to Rig
}

export default function App() {
  const cubeCameraRef = useRef();
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <PerspectiveCamera makeDefault position={[0, 8, 8]} fov={20} />
      <color attach="background" args={["#272727"]} />

      {/* <hemisphereLight intensity={4} /> */}
      <ambientLight intensity={5} />
      <spotLight
        color={"white"}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[-10, 4, 0]}
      />

      <spotLight
        position={[10, 4, 0]} // Adjust position for your scene
        angle={0.6}
        penumbra={1}
        intensity={300}
        castShadow
        color={"white"}
      />

      <Rig>
        {" "}
        {/* Use Rig to wrap components that need access to useThree */}
        <CubeCamera resolution={1024} frames={Infinity} ref={cubeCameraRef}>
          {(texture) => (
            <>
              <Environment map={texture} />
            </>
          )}
        </CubeCamera>
      </Rig>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.25}
        zoomSpeed={0.25}
        target={[0, 1, 0]}
        makeDefault
      />
      <Model />
      <Ground />
      {/* <Perf position="top-right" /> */}
      <axesHelper args={[10]} />
      {/* <gridHelper args={[20, 20, 0xff0000, "teal"]} /> */}
      {/* <Lights /> */}
    </Canvas>
  );
}
