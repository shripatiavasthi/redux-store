import React from 'react';
import { connect } from 'react-redux';
import { deleteCard , fetchUser } from '../action/UserDelete';

class Loginpage extends React.Component{
    
componentDidMount(){
    this.props.fetchUser()
}

onButtonClick = (e) => {

    this.props.deleteUser(parseInt(e.target.id))
}

render(){
    console.log(this.props.users)
    return(
        (this.props.users).map((user)=> (
            <li key ={user.id}>{user.name}<button id = {user.id} onClick={this.onButtonClick} >Delete User</button></li>
            
        )
        )
        )
        
      }
    
}



const mapStateToProps = (state) => {
    return{
        userDetails : state.userDetails,
        users : state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser : (id) => {dispatch(deleteCard(id))},
        fetchUser : () => {dispatch(fetchUser())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loginpage);