// import { useRef , useState , useEffect } from "react";
// var UseRef =()=>{
//     var [text,setText]=useState("");
//     var prevText=useRef("");
//     useEffect(()=>{
//         prevText.current=text
//     },[text])
//     return(
//         <section>
//             <h1>This is an Example of UseRef</h1>
//             <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//             <h2>My current Render is {text}</h2>
//             <h2>My Previous Render is {prevText.current}</h2>
//         </section>
//     )
// }
// export default UseRef;

import { useRef, useState, useEffect } from "react";

const UseRef = () => {
    const [number, setNumber] = useState(0);
    const prevNumber = useRef(0);

    useEffect(() => {
        prevNumber.current = number; // Update the previous number on each render
    }, [number]);

    const increment = () => setNumber((prev) => prev + 1);
    const decrement = () => setNumber((prev) => prev - 1);

    return (
        <section>
            <h1>This is an Example of useRef</h1>
            <h2>My Current Number: {number}</h2>
            <h2>My Previous Number: {prevNumber.current}</h2>
            <div>
                <button onClick={increment} style={{ marginRight: "10px" }}>Increment</button>
                <button onClick={decrement} style={{ marginRight: "10px" }}>Decrement</button>
            </div>
        </section>
    );
};

export default UseRef;
