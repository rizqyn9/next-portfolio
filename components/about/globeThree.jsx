import React, { useRef, useState } from "react";
import { Canvas, Camera, useFrame } from "@react-three/fiber";
import { Color } from "three";

const Box = (props) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
	// Return view, these are regular three.js elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};

const Test = () => {
	const mesh = useRef();
	const [isHover, setHover] = useState(false);

	useFrame((state, delta) => {
		mesh.current.rotation.y += 0.01;
		mesh.current.rotation.z += 0.01;
		mesh.current.rotation.x -= 0.01;
	});

	return (
		<mesh
			onPointerOver={() => {
				setHover(true);
			}}
			onPointerLeave={() => {
				setHover(false);
			}}
			ref={mesh}
		>
			<camera position={[1, 2, 0]} />
			<spotLight position={[1, 1, 0]} />
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]} />
			<meshPhongMaterial
				color={new Color("blue")}
				emissive={isHover ? new Color(100, 100, 100) : new Color("cyan")}
				wireframe={true}
				opacity={0.9}
				transparent={true}
				shininess={0.1}
			/>
			<sphereGeometry args={[2, 20, 20, 0, Math.PI * 2, 0, Math.PI]} />
		</mesh>
	);
};

const EarthThree = () => {
	return (
		<Canvas className="globe-canvas">
			<Test />
		</Canvas>
	);
};

export default EarthThree;
