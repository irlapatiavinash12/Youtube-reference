import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideosList from '../SavedVideosList'
import AppContext from '../../Context/AppContext'
import {
  SavedVideosBelowHeaderContainer,
  MainContainer,
  ListContainer,
  NoSavedVideosContainer,
  NosavedImage,
  SavedHeadingElement,
} from './styledComponents'

const SavedVideos = () => (
  <div>
    <Header />
    <SavedVideosBelowHeaderContainer>
      <Sidebar />
      <AppContext.Consumer>
        {value => {
          const {savedList, lightTheme} = value
          return (
            <MainContainer lightTheme={lightTheme} data-testid="savedVideos">
              {savedList.length > 0 ? (
                <ListContainer>
                  <SavedHeadingElement>
                    {' '}
                    <FaFire color="#ff0b37" /> Saved Videos
                  </SavedHeadingElement>
                  {savedList.map(each => (
                    <SavedVideosList homeVideoList={each} key={each.id} />
                  ))}
                </ListContainer>
              ) : (
                <NoSavedVideosContainer>
                  <NosavedImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No Saved Videos found</h1>
                  <p>You can save your videos while watching them</p>
                </NoSavedVideosContainer>
              )}
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    </SavedVideosBelowHeaderContainer>
  </div>
)
export default SavedVideos
