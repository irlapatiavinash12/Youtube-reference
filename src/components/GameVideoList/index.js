import {Link} from 'react-router-dom'

import './index.css'

import {GameListItem, GameThumbNail} from './styledComponents'

const GameVideoList = props => {
  const {homeVideoList} = props
  const {id, thumbnail, title, views} = homeVideoList

  return (
    <GameListItem>
      <Link to={`/videos/${id}`} className="game-routing-styling">
        <div>
          <GameThumbNail src={thumbnail} alt="video thumbnail" />
          <div>
            <p>{title}</p>
            <div>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </Link>
    </GameListItem>
  )
}
export default GameVideoList
