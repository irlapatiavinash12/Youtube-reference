import styled from 'styled-components'

export const SavedVideosBelowHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 0px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const ListContainer = styled.ul`
  list-style: none;
  margin-left: 0px;
  margin-top: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const NoSavedVideosContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NosavedImage = styled.img`
  height: 80%;
  width: 70%;
`

export const SavedHeadingElement = styled.h1`
  background-color: ${props => (props.lightTheme ? '#909090' : '#313131')};
  color: #181818;
  font-weight: bold;
  margin-top: 0px;
  padding: 20px 0px 20px 40px;
`
