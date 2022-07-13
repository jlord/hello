import React from 'react'
import { GrSoundcloud, GrInstagram } from 'react-icons/gr'
import * as styles from './FollowMe.module.scss'

type FollowMeProps = React.HTMLProps<HTMLDivElement> & {
  instagramURL?: string
  soundCloudURL?: string
}
export function FollowMe (props: FollowMeProps) {
  const { instagramURL = '#', soundCloudURL = '#' } = props
  return (
    <div className={styles.container}>
      <p className={styles.label}>Follow Me</p>
      <a href={soundCloudURL}>
        <GrSoundcloud className={styles.icon} />
      </a>
      <a href={instagramURL}>
        <GrInstagram className={styles.icon} />
      </a>
    </div>
  )
}
