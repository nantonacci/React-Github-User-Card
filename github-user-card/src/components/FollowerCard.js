import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function FollowerCard(props) {
    
        
    return(
        <div className="followerContainer">
        {props.follower.map(follower => (
             <Card
             className="followerCard"
                key={follower.id}
                image={follower.avatar_url}
                alt={follower.login}
                header={follower.login}
                meta={<a href={follower.html_url}>Profile</a>}
                
              
                />
        ))}
        </div>
        
               
    )
}

export default FollowerCard;