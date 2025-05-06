import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const SpearOfAdun = () => {
    const ref = useRef<Group>(null);    

    const { scene } = useGLTF("/models/spear-of-Adun/spear_of_Adun.gltf");

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.2;

            ref.current.position.x += delta;

            if (ref.current.position.x >= 15) {
                ref.current.position.x = -15;
            }
        }
    });

    return <primitive ref={ref} object={scene} position={[0, 2, -4]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]} />;
};

export default SpearOfAdun;
