import React, { Component } from 'react'
import Title from '../components/Title'
import BaseButton from '../components/BaseButton'
import Spacer from '../components/Spacer'
import HorizontalRule from '../components/HorizontalRule'
import Label from '../components/Label'
import Userinput from '../components/Userinput'
import ErrorMessages from '../components/ErrorMessages'


// const LoginScreen = () => {

//     const styles ={

//     }
//   return (
//     <div style={styles}>
//          <Title value = 'Log In'/>
        
//     </div>


export default class LoginScreen extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      hasError: false,
      errorMessage: ''
    }
    // this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

// using the arrow function is an option
  changeUsername=(event) =>{
    this.setState({username: event.target.value})
  }

  changePassword(event){
    this.setState({password: event.target.value})
  }

  checkFields = ()=>{

    this.setState({hasError: false})
    // if (this.state.username.length) -- look it up
      if(!this.state.username){
        this.setState({
          hasError: true,
          errorMessage: 'username field cannot be left empty'
        })
       
        return

      }
      if(this.state.username.length < 3){
        this.setState({
          hasError: true,
          errorMessage:'username field must to longer than 3 characters'
        })
        return
      }
      if(!this.state.password){
        this.setState({
          hasError: true,
          errorMessage: 'password field cannot be left empty'
        })
        return

      }
      if(this.state.password.length < 6){
        this.setState({
          hasError: true,
          errorMessage: 'password field must to longer than 6 characters'
        })
        return
      }

      alert('Login Successfull')
    }

  render() {

      const styles = {
          backgroundColor: '#fff',
          width: 400,
          borderRadius: '10px',
          alignSelf: 'center',
          paddingLeft: 20
      
      }
    return (
      <div style ={styles}>
          <Title value = 'Log In'/>
          <Spacer height={30} />
          <BaseButton>Login With Google</BaseButton>
          <Spacer height={30} />
          <HorizontalRule />
          <Spacer height={20} />
          <div>
          <Label value='Username'/>
          <Spacer height={5} />
          <Userinput change={this.changeUsername} value={this.state.username} placeholder='Enter your Email Address'/>   
      </div>
          <Spacer height={20}/>
          <div>
          <Label value='Password'/>
          <Spacer height={5} />
          <Userinput change={this.changePassword} value={this.state.password} type='password' placeholder='Enter Password'/>   
      </div>
      {this.state.hasError && <ErrorMessages error={this.state.errorMessage} />}
      <Spacer height={20}/>
      <BaseButton checkFields={this.checkFields} color="#0285ff">Log In</BaseButton>
      <Spacer height={40}/>
      </div>
      
    )

  }
}

