import aboutimage from './Task2.png';
import image from './Task1.png';

var MongoDB=()=>{
    var styling={
        height:"300px",
        width:"300px"
    }
    return(
        <section>
            <h1>MongoDB Tasks:</h1>
            <h3>Task 1: Upserting Data</h3>
            <img style={styling} src={aboutimage} alt="mongosh code"></img>
            <h3>Task 2:Modified Count</h3>
            <img style={styling} src={image} alt="mongosh code"></img>
            <br></br>
            <h3>Task 3: Changes in ObjectId when Inserting and Upserting</h3>
            <pre>* ObjectId Generation: When inserting, MongoDB generates ObjectIds that are roughly ordered based on timestamps but not strictly sequential due to random and counter components.<br></br>
* Upsert Behavior: In upserts, MongoDB generates a new ObjectId only for new documents, but if _id is explicitly set or assigned programmatically, the order may deviate.<br></br>
* Causes of Out-of-Order _ids: Custom _id assignment, concurrency, or delayed operations can lead to ObjectIds appearing out of sequence. For strict order, consider alternative _id strategies.</pre>
            <br></br>
        </section>

    )
}
export default MongoDB;