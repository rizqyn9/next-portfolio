import {Sphere, MeshDistortMaterial} from '@react-three/drei'
import {Canvas,} from '@react-three/fiber'
import * as THREE from 'three'

const Bubble = () => {

    return(
        <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
            <MeshDistortMaterial
            color="blue"
            attach="material"
            distort={.7} // Strength, 0 disables the effect (default=1)
            speed={2} // Speed (default=1)
            roughness={1}
            />

        </Sphere>
    )
}

export default Bubble