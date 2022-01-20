import React, { useState } from "react";

function CommentsListHook(props) {


    let onlyEven = function () {
        let a = props.data;
        let evenpost = a.filter((item, index) => index % 2 === 0);
        return evenpost;
    };


    return (
        <div>
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {props.data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    );

}

export default CommentsListHook;