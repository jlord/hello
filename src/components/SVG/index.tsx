import React, { HTMLProps } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { filterProps, setDefaultClasses } from '../../utils/props'
import { useSvgUrl, type AvailableIcons } from './hooks'
import * as styles from './svg.module.scss'

type SVGProps = {
  icon: AvailableIcons
  alt?: string
  colorize?: boolean
} & HTMLProps<HTMLDivElement>

const fetcher = (...args: Parameters<typeof axios.get>) =>
  axios.get(...args).then((response) => response.data)

export function SVG(props: SVGProps) {
  const { icon, alt, colorize } = props
  const htmlProps = filterProps(props, ['icon', 'alt', 'colorize'])

  const iconURL = useSvgUrl(icon)

  const { data } = useSWR(iconURL, fetcher)
  setDefaultClasses(
    htmlProps,
    data
      ? [styles.finalImage, colorize ? styles.colorize : '']
      : [styles.tempIMG]
  )

  if (data) {
    return <div {...htmlProps} dangerouslySetInnerHTML={{ __html: data }} />
  } else {
    return <img {...(htmlProps as any)} src={iconURL} alt={alt ?? ''} />
  }
}
