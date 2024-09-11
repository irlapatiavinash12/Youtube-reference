import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

const SavedVideosList = props => {
  const {homeVideoList} = props
  const {
    id,
    thumbnail,
    title,
    channelName,
    publishedAt,
    viewCount,
  } = homeVideoList
  console.log(title, channelName, viewCount, publishedAt)
  return (
    <li>
      <Link to={`/videos/${id}`}>
        <div>
          <img src={thumbnail} alt="video thumbnail" />
          <div>
            <p>{title}</p>
            <p>{channelName}</p>
            <div>
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default SavedVideosList
