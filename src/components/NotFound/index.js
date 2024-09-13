import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../Context/AppContext'

import {
  NotfoundContainer,
  NotFoundSection,
  NotFoundThumbNail,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {lightTheme} = value
      const imageUrlNotFound = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <NotfoundContainer>
            <Sidebar />
            <NotFoundSection lightTheme={lightTheme}>
              <NotFoundThumbNail
                src={imageUrlNotFound}
                alt="not found"
                className="not found"
              />
              <NotFoundHeading
                className="not-found-heading"
                lightTheme={lightTheme}
              >
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription
                className="not-found-para"
                lightTheme={lightTheme}
              >
                We are sorry, the page you requested could not be found. Please
                go back to homepage.
              </NotFoundDescription>
            </NotFoundSection>
          </NotfoundContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
