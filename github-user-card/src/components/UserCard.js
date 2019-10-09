import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function UserCard(props) {
    const extra = (
        <div>
        <a href={props.user.email}>
            <Icon name='mail' />
        </a>

        <a href={props.user.blog}>
          <Icon name='twitter' />
        </a>
        
        <a href={props.user.html_url}>
            <Icon name='github' />
        </a>
        
        </div>
      )
            
    return(
        <Card className="userCard"
        image={props.user.avatar_url}
        alt={props.user.name}
        header={props.user.name}
        meta={props.user.location}
        description={props.user.bio}
        extra={extra}
        />
        
    )
}

export default UserCard;