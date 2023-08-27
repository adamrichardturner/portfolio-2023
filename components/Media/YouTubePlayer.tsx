import { FunctionComponent } from 'react'
import YouTube from 'react-youtube'

interface YouTubePlayerProps {
  videoId: string
}

const YouTubePlayer: FunctionComponent<YouTubePlayerProps> = ({ videoId }) => {
  const onError = (error: any) => {
    console.error('YouTube Player Error:', error)
  }

  return <YouTube videoId={videoId} onError={onError} />
}

export default YouTubePlayer
