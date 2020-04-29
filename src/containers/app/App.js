import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchUsers, postUser, sendDeletetUser, sendEditUser} from '../../store/actions/actions';
import UsersTable from '../../components/users-table/users-table';
import 'bootstrap/dist/css/bootstrap.css';
import AddUser from '../../components/add-user/add-user';
import DeleteUser from '../../components/delete-user/delete-user';

class App extends Component {
  state = {
    addUserVisible: false,
    deleteUserVisible: false,
    editing: null,
    deleting: null
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  openAdd = (id) => {
    this.setState({addUserVisible: true, editing: id})
  }

  closeAdd = () => {
    this.setState({addUserVisible: false, editing: null})
  }

  openDelete = (id) => {
    this.setState({deleteUserVisible: true, deleting: id})
  }

  closeDelete = () => {
    this.setState({deleteUserVisible: false, deleting: null})
  }

  render(){
    return (
      <div className="App">
        <h1>Dashboard</h1>
        {!this.state.addUserVisible ?
         <UsersTable users={this.props.users} openAdd={this.openAdd} openDelete={this.openDelete} /> :
         <AddUser editUser={this.props.editUser} users={this.props.users} editing={this.state.editing} postUser={this.props.postUser} closeAdd={this.closeAdd} />
        } 
        { this.state.deleteUserVisible && 
          <DeleteUser 
          closeDelete={this.closeDelete} 
          deleting={this.state.deleting} 
          deletetUser={this.props.deletetUser} />}
      </div>
    );
  } 
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    postUser: (userData) => dispatch(postUser(userData)),
    deletetUser: (id) => dispatch(sendDeletetUser(id)),
    editUser: (data) => dispatch(sendEditUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
