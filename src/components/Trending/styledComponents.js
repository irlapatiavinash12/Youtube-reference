import styled from 'styled-components'

export const TrendingHeaderBelowContainer = styled.div`
  display: flex;
  flex-directon: row;
`

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const HeadingElement = styled.h1`
  background-color: ${props => (props.lightTheme ? '#909090' : '#313131')};
  color: #181818;
  font-weight: bold;
  margin-top: 0px;
  padding: 20px 0px 20px 40px;
`

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
