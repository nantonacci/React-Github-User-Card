import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function FollowerCard(props) {
    
        
    return(
        <div>
        {props.follower.map(follower => (
             <Card
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