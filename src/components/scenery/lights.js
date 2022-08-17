import { SpotLight } from '@react-three/drei';

export function Lamp1({angle, color, pos, power, targetPos}) {
    const defPos = [-180, 100, -350]

    return (
        <mesh>
            <meshStandardMaterial />
            <SpotLight
                color={color ? color : "#1B5E6C"}
                intensity={2}
                position={pos ? pos : defPos}
                power={power ? power : 20}
                angle={angle ? angle : 0.40054}
                decay={0}
                distance={200}
                penumbra={1}
            />
        </mesh>
    )
}
