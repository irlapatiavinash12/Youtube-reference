import styled from 'styled-components'

export const BelowHeaderContainer = styled.div`
  display: flex;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#212121')};
`

export const VideosSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const HomeBannerTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoIcon = styled.img`
  height: 40px;
  widht: 120px;
`

export const HomeBannerBottomSection = styled.div`
 color:black
 justify-content:center;
`

export const PrimeDescription = styled.p`
 color:#1e293b;
 font-family:"Roboto;
 background-color:aqua;
`

export const GetItButtonNow = styled.button`
 height:40px;
 width:100px;
 border:1px solid #00000;
 color:#1e293b;
 background-color:transparent;
 font-family:"Roboto;
`

export const UserInput = styled.input`
  height: 40px;
  width: 40%;
  margin-left: 10px;
  margin-top: 10px;
  background-color: transparent;
  color: grey;
  border: 1px solid;
  border-right: 0px;
  padding-left: 5px;
`

export const SearchButton = styled.button`
  height: 40px;
  border: 1px solid grey;
  border-left: 0px;
  background-color: transparent;
`

export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 5px;
`
