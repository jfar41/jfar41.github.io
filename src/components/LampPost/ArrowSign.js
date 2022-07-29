import * as THREE from 'three';

export default function makeTriangle() {
    const shape = new THREE.Shape();
    const x = 0;
    const y = 0;
    shape.moveTo(x - 2, y - 2)
    shape.lineTo(x + 10, y - 10);
    shape.lineTo(x, y + 10)
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshPhongMaterial({color: "red"})
    return (
        <mesh
        >
            <shapeBufferGeometry shapes={[shape]}/>
            <meshPhongMaterial color="red"/>
        </mesh>
    )
    // return new THREE.Mesh(geometry, material)
    // return (
    //     <mesh>
    //         <bufferGeometry attach="geometry" >
    //             <vector3 attachArray="vertices" args={[0, 0, 0]}/>
    //             <vector3 attachArray="vertices" args={[1, 0, 0]}/>
    //             <vector3 attachArray="vertices" args={[1, 1, 0]}/>
    //             {/* <face attachArray="faces" args={[0, 1, 2]} /> */}
    //         </bufferGeometry>
    //         <meshBasicMaterial attach="material" color="red"/>
    //     </mesh>
    // )
}