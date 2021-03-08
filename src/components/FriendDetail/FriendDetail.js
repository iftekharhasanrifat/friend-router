import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [FriendDetail,setFriendDetail] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data => setFriendDetail(data))
    },[])
    return (
        <div>
            <h1>This is friend details of {friendId}</h1>
            <h3>Name : {FriendDetail.name}</h3>
            <p>Phone : {FriendDetail.phone}</p>
            <p>Website : {FriendDetail.website}</p>
        </div>
    );
};

export default FriendDetail;