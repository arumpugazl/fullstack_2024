// import { useEffect, useState } from "react";
// import axios from 'axios';
// var Useeffect = () => {
//     var [post, setPost] = useState([]);
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
//             console.log(res.data);
//             setPost(res.data);
//         }).catch((err) => {
//             console.log(err);
//         })

//     }, []);
//     return (
//         <section>
//             <h1>Fetching data from Json Placeholder API</h1>
//             <h2>Posts are </h2>
//             <ol>
//                 {post.map((data) => (<li key={data.id}>{data.title}</li>))}
//             </ol>
//         </section>
//     );
// };
// export default Useeffect

import { useEffect, useState } from "react";
import axios from 'axios';
var Useeffect = () => {
    var [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get("https:jsonplaceholder.typicode.com/photos?_limit=10").then((res) => {
            console.log(res.data);
            setPhotos(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, []);
    return (
        <section>
            <h1>Fetching Photos from Json Placeholder API</h1>
            <h2>Photos are </h2>
            <ol>
                {photos.map((image) => (
                    <li key={image.id} style={{ marginBottom: "20px" }}>
                        <img
                            src={image.thumbnailUrl}
                            alt={image.title}
                            style={{ borderRadius: "10px", width: "150px", height: "150px" }}
                        />
                        <p>{image.title}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};
export default Useeffect



