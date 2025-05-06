"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import BoxModel from "./models/BoxModel";
import SpearOfAdun from "./models/SpearOfAdun";

const Scene = () => {
    const lightRef = useRef<THREE.PointLight>(null);
    const { scene } = useThree();

    const position = useControls("position", {
        x: {
            value: 0,

            min: -10,
            max: 10,
            label: "Horizontal position"
        },
        y: {
            value: 0,
            min: -10,
            max: 10,
            label: "Vertical position"
        },
        z: {
            value: 0,
            min: -10,
            max: 10,
            label: "Depth position"
        }
    });

    const size = useControls("size", {
        x: {
            value: 1,
            min: 0,
            max: 10,
            label: "Width"
        },
        y: {
            value: 1,
            min: 0,
            max: 10,
            label: "Height"
        },
        z: {
            value: 1,
            min: 0,
            max: 10,
            label: "Depth"
        }
    });

    useFrame(() => {
        if (lightRef.current) {
            const helper = new THREE.PointLightHelper(lightRef.current, 1);
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
            <ambientLight intensity={3}/>
            <pointLight position={[0, 0, 10]} intensity={10} ref={lightRef} />
            {/* <axesHelper scale={3} /> */}

            {/* Object  */}
            <Suspense fallback={null}>
            <BoxModel position={position} size={size}/>
            <SpearOfAdun/>
            </Suspense>

            {/* Background */}
            <Environment files="/background/night-sky.exr" background frames={Infinity} />
        </>
    );
};

export default Scene;
