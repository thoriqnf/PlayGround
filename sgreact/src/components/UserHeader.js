import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchUser)
    this.props.fetchUser(this.props.userId);
  }

  renderList() {
    return this.props.users.map(users => {
      return (
        <div className="item" key={users.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{users.name}</h2>
              <p>{users.email}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed devided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);