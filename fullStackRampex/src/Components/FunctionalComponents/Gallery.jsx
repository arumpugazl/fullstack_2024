import { useState } from "react";

const Gallery = () => {
    var [counter, setCount] = useState(0);
    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Learning about State in Gallery Page</h2>
            <h1>This is my Gallery Page</h1>
            <h2>The state of my variable counter is {counter}</h2>
            <button onMouseOver={()=>{setCount(counter+1)}}>Increment</button>
            <button onDoubleClick={()=>{setCount(counter-1)}}>Decrement</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </section>
        )
}
export default Gallery;