import React from 'react';


function UserCard(props) {

    function hire(){
        if(props.user.hireable === true){
                return "Hireable";
            } return "Not hireable";
        }
        const hir = hire();
        
    return(
        <div>
            <h1>{props.user.name}</h1>
            <img src={props.user.avatar_url} alt={props.user.name} />
            <p><a href={props.user.blog}>Twitter</a></p>
            <p>{props.user.location}</p>
            <p><a href={props.user.email}>Contact</a></p>
            <p>{hir}
            </p>
            {/* <p>{props.user}</p>
            <p>{props.user}</p> */}
        </div>
    )
}

export default UserCard;