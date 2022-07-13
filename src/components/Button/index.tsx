// eslint-disable-next-line no-unused-vars
import React from 'react'
import type { HTMLProps } from 'react'
import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './Button.module.scss'

type ButtonProps = HTMLProps<HTMLAnchorElement> & {
  fill?: boolean
}

export function Button(props: ButtonProps) {
  const { fill } = props
  const htmlProps = filterProps(props, ['fill'])
  setDefaultClasses(htmlProps, [styles.container, fill ? styles.fill : ''])

  return <a {...htmlProps} />
}
