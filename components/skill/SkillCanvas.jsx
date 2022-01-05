import React, { useRef, useEffect } from "react";
import { skill } from "../../dataConfig";
const SkillCanvas = () => {
	const sphere = useRef();
	useEffect(() => {
		try {
			TagCanvas.Start("myCanvas", "tags", {
				textColour: "#33D6FF",
				outlineColour: "transparent",
				initial: [0.2, 0.3],
				reverse: true,
				depth: 0.9,
				maxSpeed: 0.05,
				textFont: "Quantico",
				weightMode: "both",
				wheelZoom: false,
				noSelect: true,
				fadeIn: 200,
				shadowBlur: 10,
				animTiming: 100,
				decel: 1,
			});
		} catch (error) {
			console.log("CANVAS ERROR");
			document.getElementById("tags").style.display = "none";
		}
	}, []);
	return (
		<>
			<div id="myCanvasContainer">
				<canvas width="500" height="500" id="myCanvas" ref={sphere}>
					<p>
						Anything in here will be replaced on browsers that support the
						canvas element
					</p>
				</canvas>
			</div>
			<div id="tags" style={{ color: "transparent", position: "absolute" }}>
				{skill.map((el) => {
					return (
						<a href="#" key={el}>
							{el}
						</a>
					);
				})}
			</div>
		</>
	);
};
export default SkillCanvas;
