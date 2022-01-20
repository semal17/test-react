import React, { useState } from "react";

import CommentsListHook from './CommentsListHook';
import Comments2ListHook from './Comments2ListHook';

function Comment2Hook() {

    const [st, setSt] = useState([]);

    let selectHandler = (event) => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + event.target.value + "/comments")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSt(data);
            });            
    }
    
   

    return (
        <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                <Comments2ListHook data={st} />
            </div>
        </div>
    );

}

export default Comment2Hook;