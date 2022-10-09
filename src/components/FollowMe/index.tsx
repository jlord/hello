import React from 'react'
import { GrSoundcloud, GrInstagram } from 'react-icons/gr'
import { useLinks } from '../../utils/hooks/useLinks'
import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './FollowMe.module.scss'

type FollowMeProps = React.HTMLProps<HTMLDivElement> & {
  light?: boolean
}
export function FollowMe(props: FollowMeProps) {
  const { light = false } = props
  const htmlProps = filterProps(props, ['light'])
  const { instagram, soundcloud } = useLinks()
  setDefaultClasses(htmlProps, [styles.container, light ? styles.light : ''])
  return (
    <div {...htmlProps}>
      <p className={styles.label}>Follow Me</p>
      <a
        href={soundcloud}
        className={[styles.icon, styles.soundCloud].join(' ')}
        target="_blank"
        rel="noreferrer"
      >
        <GrSoundcloud />
      </a>
      <a
        href={instagram}
        className={[styles.icon, styles.instagram].join(' ')}
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram />
      </a>
    </div>
  )
}
