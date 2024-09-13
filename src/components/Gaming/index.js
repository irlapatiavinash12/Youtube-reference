import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FaGamepad} from 'react-icons/fa'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GameVideoList from '../GameVideoList'
import AppContext from '../../Context/AppContext'
import {
  MainContainer,
  BelowHeaderContainer,
  GamingHeadingElement,
  GamingListContainer,
  GamesSection,
} from './styledComponents'

const callStatusCodes = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiCallStatus: callStatusCodes.loading,
    videosListHome: {},
  }

  componentDidMount() {
    this.getData()
  }

  onTryAgain = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({apiCallStatus: callStatusCodes.loading})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const apiCall = await fetch(apiUrl, options)
    if (apiCall.ok === true) {
      const response = await apiCall.json()
      const updatedData = response.videos.map(each => ({
        id: each.id,
        thumbnail: each.thumbnail_url,
        title: each.title,
        views: each.view_count,
      }))
      this.setState({
        videosListHome: updatedData,
        apiCallStatus: callStatusCodes.success,
      })
    } else {
      this.setState({apiCallStatus: callStatusCodes.failure})
    }
  }

  renderVideoList = () => {
    const {videosListHome} = this.state
    return (
      <div>
        {videosListHome.length === 0 ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <h1>No Search results Found</h1>
            <p>Try different key words or remove search filter</p>
            <button
              className="find-btn"
              type="button"
              onClick={this.onTryAgain}
            >
              Retry
            </button>
          </div>
        ) : (
          <GamingListContainer>
            {videosListHome.map(each => (
              <GameVideoList homeVideoList={each} key={each.id} />
            ))}
          </GamingListContainer>
        )}
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button className="find-btn" type="button" onClick={this.onTryAgain}>
        Retry
      </button>
    </div>
  )

  renderPortView = () => {
    const {apiCallStatus} = this.state

    switch (apiCallStatus) {
      case callStatusCodes.success:
        return this.renderVideoList()
      case callStatusCodes.failure:
        return this.renderFailView()
      case callStatusCodes.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <MainContainer lightTheme={lightTheme} data-testid="gaming">
              <Header />
              <BelowHeaderContainer className="below-header-container">
                <Sidebar />
                <GamesSection>
                  <GamingHeadingElement lightTheme={lightTheme}>
                    {' '}
                    <FaGamepad color="#ff0b37" />
                    {'  '}
                    Gaming
                  </GamingHeadingElement>
                  {this.renderPortView()}
                </GamesSection>
              </BelowHeaderContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Gaming
