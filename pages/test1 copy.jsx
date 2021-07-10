import React, {useEffect, useRef} from 'react'


const Test1 = () => {
    const sphere = useRef()
    useEffect(() => {
        TagCanvas.Start('myCanvas', "tags", {
            textColour: '#33D6FF',
            outlineColour: 'transparent',
            reverse: true,
            depth: .11,
            maxSpeed: 0.05,
            textFont: null,
            weightMode:'both',
        });
    },[]);
    return(
        <>
        <div id="myCanvasContainer">
            <canvas width="300" height="300" id="myCanvas" ref={sphere}>
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
        </div>
        <div id="tags"  style={{color :"transparent",fontSize : "50%"}}>
            <a href="#" style={{color :"transparent",fontSize : "2.83ex"}}>WebGL</a>
            <a href="#" style={{color :"transparent",fontSize : "3.61ex"}}>html5</a>
            <a href="#" style={{color :"transparent",fontSize : "9.64ex"}}>canvas</a>
            <a href="#" style={{color :"transparent",fontSize : "4.47ex"}}>Three.js</a>
            <a href="#" style={{color :"transparent",fontSize : "3.46ex"}}>Node JS</a>
            <a href="#" style={{color :"transparent",fontSize : "12.32ex"}}>Express JS</a>
            <a href="#" style={{color :"transparent",fontSize : "3.74ex"}}>Bootsrap</a>
            <a href="#" style={{color :"transparent",fontSize : "3.16ex"}}>SQL</a>
            <a href="#" style={{color :"transparent",fontSize : "3.74ex"}}>NoSQL</a>
            <a href="#" style={{color :"transparent",fontSize : "3.16ex"}}>npm</a>
            <a href="#" style={{color :"transparent",fontSize : "8.36ex"}}>SASS</a>
            <a href="#" style={{color :"transparent",fontSize : "4.36ex"}}>JQuery</a>
            <a href="#" style={{color :"transparent",fontSize : "3.32ex"}}>CSS</a>
            <a href="#" style={{color :"transparent",fontSize : "10.68ex"}}>React JS</a>
            <a href="#" style={{color :"transparent",fontSize : "4.69ex"}}>Git</a>
            <a href="#" style={{color :"transparent",fontSize : "4.8ex"}}>Javascript</a>
            <a href="#" style={{color :"transparent",fontSize : "5.47ex"}}>C#</a>
            <a href="#" style={{color :"transparent",fontSize : "2.65ex"}}>Python</a>
            <a href="#" style={{color :"transparent",fontSize : "8.77ex"}}>C++</a>
            <a href="#" style={{color :"transparent",fontSize : "2.65ex"}}>Next JS</a>
        </div>
        </>
    )
}

export default Test1