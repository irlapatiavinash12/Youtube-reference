import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import AppContext from '../../Context/AppContext'

import {
  LoginButton,
  MainContainer,
  LoginContainer,
  CompanyLogo,
  FormContainer,
  UserNameInputContainer,
  UserPasswordInputContainer,
  LabelStyling,
  InputStyling,
  ShowPasswordLabel,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showLoginError: false,
    error: '',
    showPassword: false,
  }

  inputUsername = event => {
    this.setState({username: event.target.value})
  }

  inputPassword = event => {
    this.setState({password: event.target.value})
  }

  checkboxChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({
        showLoginError: true,
        error: errorMsg,
      })
    }
  }

  render() {
    const {username, password, showLoginError, error, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value
          console.log(lightTheme)
          const webLogo = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <MainContainer lightTheme={lightTheme}>
              <LoginContainer lightTheme={lightTheme}>
                <CompanyLogo src={webLogo} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <UserNameInputContainer>
                    <LabelStyling htmlFor="username" lightTheme={lightTheme}>
                      USERNAME
                    </LabelStyling>
                    <InputStyling
                      type="text"
                      id="username"
                      onChange={this.inputUsername}
                      value={username}
                      placeholder="Username"
                    />
                  </UserNameInputContainer>
                  <UserPasswordInputContainer>
                    <LabelStyling htmlFor="password" lightTheme={lightTheme}>
                      PASSWORD
                    </LabelStyling>
                    <InputStyling
                      type={inputType}
                      id="password"
                      onChange={this.inputPassword}
                      value={password}
                      placeholder="Password"
                    />
                  </UserPasswordInputContainer>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={this.checkboxChange}
                    />
                    <ShowPasswordLabel
                      htmlFor="checkbox"
                      lightTheme={lightTheme}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </div>
                  {showLoginError && <ErrorMsg>*{error}</ErrorMsg>}
                  <LoginButton type="submit">Login</LoginButton>
                </FormContainer>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
