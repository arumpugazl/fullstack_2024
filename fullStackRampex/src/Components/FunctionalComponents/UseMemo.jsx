import { useMemo, useState } from "react"

var slowFunction = (number) => {
    for (let i = 0; i < 10000000000; i++); 
    return number * 2
}

var UseMemo = () => {
    var [num, setNum] = useState(0)
    var [theme, setTheme] = useState(true)
    var themes = {
        backgroundColor: (theme) ? "black" : "white",
        color: (theme) ? "white" : "black",
    };
    var doublingANumber=useMemo(()=>{
        return slowFunction(num)
    },[num])
    return (
        <section>
            <h1>The useMemo Hook returns a memoized value and prevents the application from unnecessary re-renders. It is useful in heavy computations and processes when using functional components.
                The useMemo hook helps optimize performance by memoizing expensive calculations.</h1>
            <h1>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) useMemo(calculateValue, dependencies)
            </h1>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            <button onClick={()=>setTheme(theme=!theme)}>Toggle Theme</button>
            <h2 style={themes}>{doublingANumber}</h2>
        </section>
    )

}
export default UseMemo;