import styled from 'styled-components'

export const HeaderMain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const WebsiteLogo = styled.img`
  height: 40px;
  margin: 10px;
`

export const LogoutContainer = styled.div`
  border-radius: 10px;
  height: 120px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-left: 60px;
`

export const LogoutButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export const ConfirmButton = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
`

export const CancelButton = styled.button`
  height: 40px;
  background-color: transparent;
  color: #ffffff;
  border-radius: 5px;
  color: grey;
  border: 1px solid grey;
`
