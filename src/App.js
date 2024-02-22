import { OrbitControls, } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import Model from "./components/Shoe";

function App() {

    const [mesh, setMesh] = useState("#ffffff");
    const [strips, setStrips] = useState("#ffffff");
    const [soul, setSoul] = useState("#ffffff");
    
    return (
        <div class="wrapper">
            <div class="card">
                <div class="product-canvas">
                  <Canvas>
                    <Suspense fallback={null}>
                      <ambientLight/>
                      <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                      <OrbitControls enablePan enableZoom enableRotate/>
                      <Model customColors={{mesh, strips, soul}} />
                    </Suspense>
                  </Canvas>
                </div>
                <h2>Color picker</h2>
                <div class='colors'>
                    <div>
                        <input type="color" id="head" name="head" value="#ffffff" onChange={(e) => setMesh(e.target.value)}/>
                        <label for="head">Main</label>
                    </div>

                    <div>
                        <input type="color" id="body" name="body" value="#ffffff" onChange={(e) => setStrips(e.target.value)}/>
                        <label for="body">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="body" name="body" value="#ffffff" onChange={(e) => setSoul(e.target.value)}/>
                        <label for="body">Soul</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
