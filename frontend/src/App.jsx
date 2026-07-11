import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState, useEffect } from 'react'

function Bolt({ data }) {
  if (!data) return null;

  return (
    <group>
      {/* Bolt Shaft */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, data.shaftLength, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Bolt Head */}
      {/* Need to adjust dynamically based on shaft length.
          Divide the shaftLength by 2 to find the top edge, then add 0.25 to sit
          the head on top */}
      <mesh position={[0, (data.shaftLength / 2) + 0.25, 0]}>
        <cylinderGeometry args={[data.headRadius, data.headRadius, 0.5, 6]} />
        <meshStandardMaterial color={`#${data.hexColor}`} />
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
      <Bolt data={boltData}/>
      <OrbitControls />
    </Canvas>
  )
}

export default App