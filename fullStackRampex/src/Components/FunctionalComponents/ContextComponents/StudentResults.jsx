import { useContext } from "react";
import {ThemeProvider} from "../UseContext";


var StudentResults=()=>{
    var result = useContext(ThemeProvider)
    return (
        <section>
            <h1>My SGPA Result is : {result.sgpa} and My CGPA result is : {result.cgpa}</h1>
        </section>
    )
}
export default StudentResults;