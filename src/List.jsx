import React from 'react'
import { useState, useEffect } from 'react'
import Display from './Display';


function List({ postId }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(err => console.log(err));
    }, [postId]);
return (
    <>{ data ? <Display data={data} /> : null}
    </>
)
}

export default List
