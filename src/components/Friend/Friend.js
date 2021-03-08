import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        borderRadius: '20px',
        margin:'20px',
        padding:'20px'
    }
    let history = useHistory();
    const handleClick=(friendId)=>{
        history.push(`/friend/${friendId}`);
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>show details of: {id}</Link></p>
            <button onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;