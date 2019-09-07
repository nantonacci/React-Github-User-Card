import React from 'react';


function UserCard(props) {

    return(
        <div>
            <h1>{props.user.name}</h1>
            <p><a href={props.user.blog}>Twitter</a></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

export default UserCard;