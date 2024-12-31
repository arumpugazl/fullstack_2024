/* eslint-disable react/prop-types */
const About = (props) => {
    return (
    <section>
        <h1>This is my About Page</h1>
        <h2 style = {{ textAlign: "center" }}>Learning about props in about page</h2>
        <h2>I am teaching in {props.college} College</h2>
        <h2>The other colleges are:{props.clg1} , {props.clg2}</h2>
    </section>)

}
export default About;