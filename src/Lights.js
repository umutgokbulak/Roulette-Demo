import { useControls } from "leva";

export function Lights() {
  const ambientCtl = useControls("Ambient Light", {
    visible: true,
    intensity: {
      value: 4.0,
      min: 0,
      max: 300,
      step: 0.1,
    },
  });

  const directionalCtl = useControls("Directional Light", {
    visible: false,
    position: {
      x: 3.3,
      y: 300,
      z: 4.4,
    },
    intensity: {
      value: 1.0,
      min: 0,
      max: 300,
      step: 0.1,
    },
    castShadow: true,
  });

  const pointCtl = useControls("Point Light", {
    visible: false,
    position: {
      x: 2,
      y: 0,
      z: 0,
    },
    intensity: {
      value: 1.0,
      min: 0,
      max: 300,
      step: 0.1,
    },
    castShadow: true,
  });

  const spotCtl = useControls("Spot Light", {
    visible: true,
    position: {
      x: -10,
      y: 4,
      z: 0,
    },
    intensity: {
      value: 150,
      min: 0,
      max: 300,
      step: 0.1,
    },
    castShadow: true,
  });
  const spotCtl2 = useControls("Spot Light2", {
    visible: true,
    position: {
      x: 10,
      y: 4,
      z: 0,
    },
    intensity: {
      value: 150,
      min: 0,
      max: 300,
      step: 0.1,
    },
    castShadow: true,
  });

  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        intensity={directionalCtl.intensity}
        castShadow={directionalCtl.castShadow}
      />
      <pointLight
        visible={pointCtl.visible}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
        intensity={pointCtl.intensity}
        castShadow={pointCtl.castShadow}
      />
      <spotLight
        visible={spotCtl.visible}
        intensity={spotCtl.intensity}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
        castShadow={spotCtl.castShadow}
      >
        <mesh>
          <sphereGeometry args={[0.25]}></sphereGeometry>
        </mesh>
      </spotLight>
      <spotLight
        visible={spotCtl2.visible}
        intensity={spotCtl2.intensity}
        position={[
          spotCtl2.position.x,
          spotCtl2.position.y,
          spotCtl2.position.z,
        ]}
        castShadow={spotCtl2.castShadow}
      >
        <mesh>
          <sphereGeometry args={[0.25]}></sphereGeometry>
        </mesh>
      </spotLight>
    </>
  );
}
