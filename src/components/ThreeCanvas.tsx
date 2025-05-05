"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { ReactNode } from "react";

interface ThreeCanvasProps {
    children: ReactNode;
}

const ThreeCanvas = ({children}: ThreeCanvasProps) => {
    return (
        <Canvas className="w-full max-w-full h-full max-h-full" >
            {children}
        </Canvas>
    );
};

export default ThreeCanvas;