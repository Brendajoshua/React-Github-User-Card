import React from 'react';

export const UserCard = props => {
    const { login, followers, following, avatar_url, createdAt } = props.user;
    return (
        <div full={props.full}>
            <img src={avatar_url} width="200" height="200" />
            <div>
                <h1>{login}</h1>
            </div>
        </div>
    );
};

export const FollowerCard = props => {
    let { login, avatar_url, followers, following, createdAt } = props.user;

    return (
        <div full={props.full}>
            <img src={avatar_url} width="200" height="200" />
            <h1>{login}</h1>
        </div>
    );
};