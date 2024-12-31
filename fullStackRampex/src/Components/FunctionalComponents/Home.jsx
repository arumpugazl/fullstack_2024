//import React from 'react';//optional
import '../../assets/css/Home.css'
var Home = () => {
    var styling = {
        textAlign:"Center",
        fontSize: "30px",
        textDecoration: "underline",
        color: "blue"
    }
    return (
        <div>
            <h1 style={styling}>This is my Home Page</h1>
            <h2 id='idSEg'>Testing Styling</h2>
            <p className="box-model">Hello</p>
        </div>
    )
}
export default Home;
