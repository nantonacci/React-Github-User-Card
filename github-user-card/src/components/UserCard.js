import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function UserCard(props) {
    const extra = (
        <a>
          <Icon name='user' />
          {props.user.followers} followers
        </a>
      )
            
    return(
        <Card
        image={props.user.avatar_url}
        header={props.user.name}
        meta={props.user.location}
        description={<a href={props.user.url}>Check out my profile</a>}
        extra={extra}
        />
        
    )
}

export default UserCard;