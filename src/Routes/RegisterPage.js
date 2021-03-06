import React, { Component } from 'react'
import { Section } from '../Components/Utils/Utils';
import Register from '../Components/LoginRegister/Register';

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleRegisterSuccess = user => {
    const {history} = this.props
    history.push('/login')
  }
 
  render() {
    return (
      <Section className="RegisterPage">
        <Register 
          onRegistrationSuccess={this.handleRegisterSuccess}
        />
      </Section>
    )
  }
}
