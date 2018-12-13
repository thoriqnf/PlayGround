import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchUsers)
    this.props.fetchUsers();
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

export default connect(mapStateToProps, { fetchUsers })(UserList);