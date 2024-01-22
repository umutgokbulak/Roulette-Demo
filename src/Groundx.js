export function Ground() {
  return (
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color={"black"} />
    </mesh>
  );
}
