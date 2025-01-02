import React from "react";
import Component2 from "./ContextComponents/Component2";
export var ThemeProvider=React.createContext();

//var ThemeProvider = React.createContext();
var ExamResults = () => {
    return (
        <section>
            <ThemeProvider.Provider value={{sgpa : "8.85" ,cgpa : "9.95"}}>
                <h1>This is an Example of UseContext-Parent Component</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    )

}
export default ExamResults;