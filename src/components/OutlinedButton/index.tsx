// eslint-disable-next-line no-unused-vars
import React from 'react'
import type { HTMLProps } from 'react'
import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './OutlinedButton.module.scss'

type OutlinedButtonProps = HTMLProps<HTMLAnchorElement>

export function OutlinedButton(props: OutlinedButtonProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])

  return <a {...htmlProps} />
}
