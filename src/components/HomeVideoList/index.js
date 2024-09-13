import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  ListContainer,
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailDescriptionContainer,
  ChannelIcon,
  ChannelDesignation,
  PublishedContainer,
} from './styledComponents'

import './index.css'

// import {formatDistanceToNow} from 'date-fns'

const HomeVideoList = props => {
  const {homeVideoList} = props
  const {
    id,
    thumbnail,
    title,
    ChannelName,
    channelImage,
    published,
    views,
  } = homeVideoList
  const displayTime = formatDistanceToNow(new Date(published), {
    addSuffix: true,
  })
  const removeUselessWords = txt => {
    const uselessWordsArray = ['almost', 'about', 'over']

    const expStr = uselessWordsArray.join('\\b|\\b')
    return txt.replace(new RegExp(expStr, 'gi'), '').trim().replace(/ +/g, ' ')
  }
  const actualTime = removeUselessWords(displayTime)
  /*   const displayTime = formatDistanceToNow(new Date(published), {
    addSuffix: true,
  })
  const removeUselessWords = txt => {
    const uselessWordsArray = ['almost', 'about', 'over']

    const expStr = uselessWordsArray.join('\\b|\\b')
    return txt.replace(new RegExp(expStr, 'gi'), '').trim().replace(/ +/g, ' ')
  }
  const actualTime = removeUselessWords(displayTime) */

  return (
    <ListContainer>
      <Link to={`/videos/${id}`} className="thumbnail-link-styling">
        <ThumbnailContainer>
          <ThumbnailImage src={thumbnail} alt="video thumbnail" />
          <ThumbnailDescriptionContainer>
            <ChannelIcon src={channelImage} alt="channel logo" />
            <div>
              <p>{title}</p>
              <ChannelDesignation>{ChannelName}</ChannelDesignation>
              <PublishedContainer>
                <p>
                  {views} views {' . '}
                </p>
                <p>{actualTime}</p>
              </PublishedContainer>
            </div>
          </ThumbnailDescriptionContainer>
        </ThumbnailContainer>
      </Link>
    </ListContainer>
  )
}
export default HomeVideoList
