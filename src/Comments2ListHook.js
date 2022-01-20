import React, { useState, useEffect } from "react";

function Comments2ListHook(props) {

    const [st1, setSt1] = useState(props.data);
    console.log(st1);
    console.log(props.data);

    useEffect(() => {
        console.log('effect');
        if (props.data.length > 0) setSt1(props.data);
    }, [props]);

    let onlyEven = function () {
        let a = st1;
        let evenpost = a.filter((item, index) => index % 2 === 0);
        setSt1(evenpost);
    };

    console.log(st1);
    return (
        <div>
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {st1.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    );

}

export default Comments2ListHook;