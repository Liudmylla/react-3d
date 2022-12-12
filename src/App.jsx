import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Earth } from "./components/Earth";
import { Earth1 } from "./components/Earth1";
import Sphera from "./components/Sphera";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        {/* <Sphera /> */}
        <OrbitControls />
        {/* <Earth /> */}
        <Earth1 />
      </Canvas>
    </div>
  );
}

export default App;
