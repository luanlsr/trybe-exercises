// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { id, name, email, avatar } = this.props.user
    return (
      <div>
        <p> ID: {id} </p>
        <h1> {name} </h1>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;