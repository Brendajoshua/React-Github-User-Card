import React from 'react';
import axios from 'axios';
import {UserCard, FollowerCard} from './UserCard';

class FollowersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFollowers: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(`https://api.github.com/users/${this.props.userName}/followers`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(res => {
                console.log(res);
                this.setState({ userFollowers: res });
            })
            .catch(err => console.log(err));
        this.setState({ loading: false });
    }

    componentDidUpdate() {
        fetch(`https://api.github.com/users/${this.props.userName}/followers`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(res => {
                console.log(res);
                this.setState({ userFollowers: res });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h1>GitHub User</h1>
                <UserCard user={this.props.user} full={true} />
                <h2>Followers</h2>
                <div>
                    {this.state.loading
                        ? 'Loading'
                        : this.state.userFollowers.map(follower => {
                              return <FollowerCard user={follower} />;
                          })}
                </div>
            </>
        );
    }
}

export default FollowersList;