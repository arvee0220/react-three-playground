import Scene from "@/components/Scene";
import ThreeCanvas from "@/components/ThreeCanvas";



export default function Home() {
    return (
        <div className="max-w-full w-full max-h-full h-full">
            <h2>Three JS</h2>

            <ThreeCanvas>
              <Scene/>
            </ThreeCanvas>
        </div>
    );
}
