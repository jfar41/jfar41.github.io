import { Html, SpotLight, useHelper } from '@react-three/drei';

export default function RectangularSign({text, position, signColor}) {
    const rotation = [0, 0.4, 0]

    return (
        <group>
            <mesh
                rotation={rotation}
                position={position}
            >
                <boxGeometry args={[12, 3, 1]} />
                <meshPhongMaterial  
                    color="#0C0F17"
                />
            </mesh>
            <Html 
                className='sign'
                style={{"backgroundColor": signColor}}
                rotation={rotation}
                position={position}
                transform
            >
                {text}
            </Html>
        </group>
    )
}