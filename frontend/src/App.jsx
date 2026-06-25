import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState, useEffect } from 'react'

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
  // state variable to hold backend data
  const [boltData, setBoltData] = useState(null)

  // make the call to th C# door when the app loads
  useEffect(() => {
    fetch('http://localhost:5252/api/diagnostics/bolt')
      .then(response => response.json())
      .then(data => {
          // print out the C# data to console
          console.log("Data received from C#:", data)
          setBoltData(data)
      })
      .catch(error => console.error("Error fetching data:", error))
  }, [])

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