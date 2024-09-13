import styled from 'styled-components'

export const NavContainer = styled.nav`
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vh;
  background-color: ${props => (props.lightTheme ? '#f1f1f1' : '#231f20')};
`

export const OptionsUnorderedList = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
`
export const ListItem = styled.li`
  background-color: ${props => (props.active ? '#d7dfe9' : 'transparent')};
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  margin-left: 0px;
  padding: 5px 5px 0px 5px;
  height: 30px;
`

export const LowerContainer = styled.div`
  justfy-content: center;
  align-items: center;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const EachIcon = styled.img`
  height: 40px;
  width: 40px;
`

export const Descriptions = styled.p`
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  font-weight: bold;
  margin-left: 20px;
`
