import React, { useEffect, useState } from "react";

function PlaceholderPostHook() {
    const [st, setSt] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSt(data);
            
        });
    }, []);
    
    // let count = 1;
    return (
        <div>
            <h1>Posts</h1>
                {st.map((el, index) => (                    
                    <section key={el.id}>
                        <h2>{index+1}. {el.title}</h2>
                        <p>{el.body}</p>
                        </section>
                ))}
        </div>
    );

}    


export default PlaceholderPostHook;