import React, { type HTMLProps } from 'react'
import { composeProps } from '../../utils/props'

type YoutubeProps = {
  videoId?: string
} & HTMLProps<HTMLIFrameElement>

export function Youtube(props: YoutubeProps) {
  const { videoId = 'fiGuXsvy69E' } = props
  const htmlProps = composeProps(props, ['videoId'])

  return (
    <iframe
      width="315"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}?controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      {...htmlProps}
    ></iframe>
  )
}
