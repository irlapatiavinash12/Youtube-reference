import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import {
  SavedVideoListItem,
  SavedVideoItem,
  SavedVideoThumbNail,
  SavedVideoDescription,
  ViewsAndPublication,
} from './styledComponents'

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
  const displayTime = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })
  const removeUselessWords = txt => {
    const uselessWordsArray = ['almost', 'about', 'over']

    const expStr = uselessWordsArray.join('\\b|\\b')
    return txt.replace(new RegExp(expStr, 'gi'), '').trim().replace(/ +/g, ' ')
  }
  const actualTime = removeUselessWords(displayTime)
  console.log(title, channelName, viewCount, publishedAt)
  return (
    <SavedVideoListItem>
      <Link to={`/videos/${id}`} className="saved-routing-styling">
        <SavedVideoItem>
          <SavedVideoThumbNail src={thumbnail} alt="video thumbnail" />
          <SavedVideoDescription>
            <p>{title}</p>
            <p>{channelName}</p>
            <ViewsAndPublication>
              <p>{viewCount} . </p>
              <p>{actualTime}</p>
            </ViewsAndPublication>
          </SavedVideoDescription>
        </SavedVideoItem>
      </Link>
    </SavedVideoListItem>
  )
}
export default SavedVideosList
