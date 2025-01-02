import { useEffect, useState } from "react";

var UseEffect=()=>{
    var[text,setText]=useState("Kongu");
    useEffect(()=>{
        //console.log(text);
        //setText("KEC")
    },[text])
    return(
        <section>
            <h1>Use Effect Example</h1>
            <input type="text" placeholder="Enter your Text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>Text Typed is {text}</h2>
        </section>
    )

}
export default UseEffect;