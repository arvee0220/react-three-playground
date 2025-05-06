"use client";

interface BoxModelProps {
    size: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
}

const BoxModel = ({ size, position }: BoxModelProps) => {
    const { x: posX, y: posY, z: posZ } = position;
    const { x: sizeX, y: sizeY, z: sizeZ } = size;

    return (
        <mesh position={[posX, posY, posZ]}>
            <boxGeometry args={[sizeX, sizeY, sizeZ]} />
            <meshPhysicalMaterial roughness={0} side={2} metalness={0.2} color={"gray"} />
        </mesh>
    );
};

export default BoxModel;
