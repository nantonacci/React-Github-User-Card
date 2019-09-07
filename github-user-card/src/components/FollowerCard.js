import React from 'react';


function FollowerCard(props) {

        
    return(
        <div>
            {props.follower.map(follower => (
                <div key={follower.id}>
                <h2>{follower.login}</h2>
                <img src={follower.avatar_url} alt={follower.login} />
                <p><a href={follower.url}>View Profile</a></p>
                </div>
            ))}
            
        </div>
    )
}

export default FollowerCard;