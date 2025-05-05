"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
    const lightRef = useRef<THREE.PointLight>(null);
    const { scene } = useThree();

    useFrame(() => {
        if (lightRef.current) {
            const helper = new THREE.PointLightHelper(lightRef.current, 2);
            scene.add(helper);

            return () => {
                scene.remove(helper);
                helper.dispose();
            };
        }
    });

    return (
        <>
            <OrbitControls />
            <pointLight position={[0, 0, 10]} intensity={10} ref={lightRef} />
            <axesHelper scale={3} />

            {/* Object  */}
            <mesh>
                <boxGeometry args={[1, 2, 1]} />
                <meshPhysicalMaterial roughness={0} side={2} metalness={0.2} color={"gray"} />
            </mesh>

            {/* Background */}
            <Environment files="/background/night-sky.exr" background frames={Infinity} />
        </>
    );
};

export default Scene;
