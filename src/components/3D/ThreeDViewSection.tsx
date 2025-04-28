import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeDViewSection = () => {
  return (
    <section style={{ height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Example 3D objects */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <OrbitControls enableZoom={true} />
      </Canvas>
    </section>
  );
};

export default ThreeDViewSection;
