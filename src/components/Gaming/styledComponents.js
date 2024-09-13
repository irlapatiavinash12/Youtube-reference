import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const BelowHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GamesSection = styled.div`
  width: 100%;
`

export const GamingHeadingElement = styled.h1`
  background-color: ${props => (props.lightTheme ? '#909090' : '#313131')};
  color: #181818;
  font-weight: bold;
  margin-top: 0px;
  padding: 20px 0px 20px 40px;
`
