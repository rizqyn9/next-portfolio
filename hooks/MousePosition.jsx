import {createContext, useContext, useState, useEffect} from 'react'

export const useMousePosition = () => {
    const [MousePos, setMousePos] = useState({
        clientX: 0,
        clientY: 0
    })
    const updatePosition = event => {
        const { pageX, pageY, clientX, clientY } = event;
        setMousePos({
            clientX,
            clientY,
        });
    };

    useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
        document.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mouseenter", updatePosition);
    };
    }, []);

    return {
        MousePos,
        updatePosition
    }
    
}

export default useMousePosition