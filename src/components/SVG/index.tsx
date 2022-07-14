import React, { HTMLProps } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './svg.module.scss'

type SVGIconProps = {
  icon: string
  alt?: string
  colorize?: boolean
} & HTMLProps<HTMLDivElement>

const fetcher = (...args: Parameters<typeof axios.get>) =>
  axios.get(...args).then((response) => response.data)

export function SVGIcon(props: SVGIconProps) {
  const { icon, alt, colorize } = props
  const htmlProps = filterProps(props, ['icon', 'alt', 'colorize'])

  const { data } = useSWR(icon, fetcher)
  setDefaultClasses(
    htmlProps,
    data
      ? [styles.finalImage, colorize ? styles.colorize : '']
      : [styles.tempIMG]
  )

  if (data) {
    return <div {...htmlProps} dangerouslySetInnerHTML={{ __html: data }} />
  } else {
    return <img {...(htmlProps as any)} src={icon} alt={alt ?? ''} />
  }
}
