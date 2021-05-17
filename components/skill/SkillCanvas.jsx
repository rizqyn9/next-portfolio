import React, {useRef, useEffect} from 'react'

const SkillCanvas = () => {
    const sphere = useRef()
    useEffect(() => {
        try {
            TagCanvas.Start('myCanvas', "tags", {
                textColour: '#33D6FF',
                outlineColour: 'transparent',
                reverse: true,
                depth: .9,
                maxSpeed: 0.05,
                textFont: 'Quantico',
                weightMode:'both',
                wheelZoom: false,
                noSelect: true,
                fadeIn : 200,
                shadowBlur:10,
                animTiming : 100,
                decel : 1
            });
        } catch (error) {
            console.log("CANVAS ERROR");
            document.getElementById('tags').style.display = "none"
        }
    },[]);
    return(
        <>
        <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas" ref={sphere}>
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
        </div>
        <div id="tags"  style={{color :"transparent", position:"absolute"}}>
            <a href="#" style={{color :"transparent"}}>WebGL</a>
            <a href="#" style={{color :"transparent"}}>html5</a>
            <a href="#" style={{color :"transparent"}}>canvas</a>
            <a href="#" style={{color :"transparent"}}>Three.js</a>
            <a href="#" style={{color :"transparent"}}>Node JS</a>
            <a href="#" style={{color :"transparent"}}>Express JS</a>
            <a href="#" style={{color :"transparent"}}>Bootsrap</a>
            <a href="#" style={{color :"transparent"}}>SQL</a>
            <a href="#" style={{color :"transparent"}}>NoSQL</a>
            <a href="#" style={{color :"transparent"}}>npm</a>
            <a href="#" style={{color :"transparent"}}>SASS</a>
            <a href="#" style={{color :"transparent"}}>JQuery</a>
            <a href="#" style={{color :"transparent"}}>CSS</a>
            <a href="#" style={{color :"transparent"}}>React JS</a>
            <a href="#" style={{color :"transparent"}}>Git</a>
            <a href="#" style={{color :"transparent"}}>Javascript</a>
            <a href="#" style={{color :"transparent"}}>C#</a>
            <a href="#" style={{color :"transparent"}}>Python</a>
            <a href="#" style={{color :"transparent"}}>C++</a>
            <a href="#" style={{color :"transparent"}}>Next JS</a>
        </div>
        </>
    )
}
export default SkillCanvas