import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { RobotNodeComponent } from './RobotNodeComponent';

export default function App() {
  function RobotViewer() {
    // Establish the memory bank for the robot data (starting at null)
    const [robotData, setRobotData] = useState(null);

    useEffect(() => {
      // Fetch the data when the component mounts
      async function fetchRobot() {
        try {
          const response = await fetch('http://localhost:5252/api/diagnostics/robot');
          // Parse the JSON
          const data = await response.json();
          console.log("Data received from C#:", data);
          // Save it to the state using setRobotData
          setRobotData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      // run the app
      fetchRobot();
    }, []); // Empty array means "only run once on mount"

    // If data hasn't arrived yet, show a loading message
    if (!robotData) return <div>Loading Optimus Diagnostics...</div>;

    // Once data arrives, render the 3D Canvas
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [0, 5, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          
          {/* Render root recursive node */}
          <RobotNodeComponent node={robotData} />
          
        </Canvas>
      </div>
    );
  }
}