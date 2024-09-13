import {Link, withRouter} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {Component} from 'react'
import AppContext from '../../Context/AppContext'
import {
  NavContainer,
  OptionsUnorderedList,
  ListItem,
  Descriptions,
  LowerContainer,
  IconsContainer,
  EachIcon,
} from './styledComponents'

import './index.css'

class Sidebar extends Component {
  state = {
    active: 'home',
  }

  onHome = () => {
    this.setState({active: 'home'})
  }

  onTrending = () => {
    this.setState({active: 'trending'})
  }

  onGames = () => {
    this.setState({active: 'games'})
  }

  onSaved = () => {
    this.setState({active: 'saved'})
  }

  render() {
    const {active} = this.state
    console.log(active)
    return (
      <>
        <AppContext.Consumer>
          {value => {
            const {lightTheme} = value

            return (
              <NavContainer lightTheme={lightTheme}>
                <OptionsUnorderedList>
                  <ListItem
                    lightTheme={lightTheme}
                    onClick={this.onHome}
                    active={active === 'home'}
                  >
                    <Link to="/" className="linkstyling">
                      <FaHome color={active === 'home' ? '#ff0b37' : 'grey'} />
                      Home
                    </Link>
                  </ListItem>
                  <ListItem
                    lightTheme={lightTheme}
                    onClick={this.onTrending}
                    active={active === 'trending'}
                  >
                    <Link to="/trending" className="linkstyling">
                      <FaFire
                        color={active === 'trending' ? '#ff0b37' : 'grey'}
                      />
                      Trending
                    </Link>
                  </ListItem>
                  <ListItem
                    lightTheme={lightTheme}
                    onClick={this.onGames}
                    active={active === 'games'}
                  >
                    <Link to="/gaming" className="linkstyling">
                      <FaGamepad
                        color={active === 'games' ? '#ff0b37' : 'grey'}
                      />
                      Gaming
                    </Link>
                  </ListItem>
                  <ListItem
                    lightTheme={lightTheme}
                    onClick={this.onSaved}
                    active={active === 'saved'}
                  >
                    <Link to="/saved-videos" className="linkstyling">
                      <MdPlaylistAdd
                        color={active === 'saved' ? '#ff0b37' : 'grey'}
                      />
                      Saved Videos
                    </Link>
                  </ListItem>
                </OptionsUnorderedList>
                <LowerContainer>
                  <Descriptions lightTheme={lightTheme}>
                    CONTACT US
                  </Descriptions>
                  <IconsContainer>
                    <EachIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <EachIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <EachIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </IconsContainer>
                  <Descriptions lightTheme={lightTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </Descriptions>
                </LowerContainer>
              </NavContainer>
            )
          }}
        </AppContext.Consumer>
      </>
    )
  }
}

export default withRouter(Sidebar)
