import React from 'react';

export function RobotNodeComponent({ node }) {
  return (
    // Wrap every node in a R3F group to establish its local coordinate space
    <group 
      position={node.position} 
      rotation={node.rotation} 
      scale={node.scale}
    >
      {/* Render the current node's primitive mesh */}
      <mesh>
        {node.partShape === 'Box' && <boxGeometry args={node.dimensions} />}
        {node.partShape === 'Cylinder' && <cylinderGeometry args={node.dimensions} />}
        {node.partShape === 'Sphere' && <sphereGeometry args={node.dimensions} />}
        <meshStandardMaterial color="royalblue" wireframe />
      </mesh>

      {/* Recusrisve loop: Map over the children */}
      {node.children && node.children.map((childNode) => (
        <RobotNodeComponent key={childNode.id} node={childNode} />
      ))}
    </group>
  );
}