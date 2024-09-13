import styled from 'styled-components'

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  height: 38px;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: bold;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
`

export const LoginContainer = styled.div`
  display: flex;
  min-width: 360px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 4px 10px black;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#0f0f0f')};
`

export const CompanyLogo = styled.img`
  height: 40px;
  width: 160px;
  margin-bottom: 40px;
`

export const FormContainer = styled.form`
  width: 100%;
`

export const UserNameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`

export const UserPasswordInputContainer = styled(UserNameInputContainer)`
  margin-bottom: 0px;
`

export const LabelStyling = styled.label`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`

export const InputStyling = styled.input`
  border-radius: 5px;
  height: 38px;
  outline: none;
  border-color: #475569;
  padding-left: 5px;
  border-width: 1px;
`

export const ShowPasswordLabel = styled(LabelStyling)`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-weight: normal;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font: 'Roboto';
  font-weight: 400;
  margin: 0px;
`
