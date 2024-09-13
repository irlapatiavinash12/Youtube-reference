import styled from 'styled-components'

export const VideoDetailBelowHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoSpecificSection = styled.div`
  width: 100%;
`

export const MainContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  color: grey;
`
export const VideoSpecificContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const VideoSection = styled.div`
  width: 90%;
  padding: 20px;
`

export const VideoDescriptionContents = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ViewsAndPublishedDate = styled.div`
  display: flex;
  flex-direction: row;
`

export const ActiveButton = styled.button`
  color: ${props => (props.value ? '#2563eb' : '#64748b')};
  border: 0px solid transparent;
  background-color: transparent;
`
export const SaveButton = styled.button`
  background-color: transparent;
  color: grey;
  border: 0px solid transparent;
`
export const SavedButton = styled.button`
  background-color: transparent;
  color: blue;
  border: 0px solid transparent;
`

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  margin-top: 20px;
`

export const ProfileSectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
