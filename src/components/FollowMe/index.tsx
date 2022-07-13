import React from 'react'
import { GrSoundcloud, GrInstagram } from 'react-icons/gr'
import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './FollowMe.module.scss'

type FollowMeProps = React.HTMLProps<HTMLDivElement> & {
  instagramURL?: string
  soundCloudURL?: string
  light?: boolean
}
export function FollowMe(props: FollowMeProps) {
  const { instagramURL = '#', soundCloudURL = '#', light = false } = props
  const htmlProps = filterProps(props, [
    'instagramURL',
    'soundCloudURL',
    'light'
  ])
  setDefaultClasses(htmlProps, [styles.container, light ? styles.light : ''])
  return (
    <div {...htmlProps}>
      <p className={styles.label}>Follow Me</p>
      <a
        href={soundCloudURL}
        className={[styles.icon, styles.soundCloud].join(' ')}
      >
        <GrSoundcloud />
      </a>
      <a
        href={instagramURL}
        className={[styles.icon, styles.instagram].join(' ')}
      >
        <GrInstagram />
      </a>
    </div>
  )
}
