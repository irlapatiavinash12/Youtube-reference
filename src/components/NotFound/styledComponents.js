import styled from 'styled-components'

export const NotfoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const NotFoundSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  justify-content: center;
  align-items: center;
`

export const NotFoundThumbNail = styled.img`
  height: 60%;
  width: 50%;
  margin-top: 30px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const NotFoundDescription = styled.p`
  color: grey;
`
