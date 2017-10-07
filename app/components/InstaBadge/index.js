import React from 'react';
import { Badge, Logo } from './styles';

class InstaBadge extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Badge>
        <a href="https://www.instagram.com/dwight_draws/">
          <div>
            <Logo src={require('../../images/ig-logo.png')}/>
            <div style={{display:'inline'}}>instagram: dwight_draws</div>
          </div>
        </a>
      </Badge>
    );
  }
}

export default InstaBadge;
