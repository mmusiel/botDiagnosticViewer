import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Bolt() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.5, 6]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
    </group>
  )
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Bolt />
      <OrbitControls />
    </Canvas>
  )
}

export default App