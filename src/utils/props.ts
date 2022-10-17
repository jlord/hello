import type { CSSProperties } from 'react'

export function filterProps<T extends Object, U extends keyof T>(
  props: T,
  filterOut: U[]
): Omit<T, U> {
  const propEntries = Object.entries(props)
  const filteredProps = propEntries.filter(
    ([prop, value]) => !filterOut.includes(prop as any)
  )
  return Object.fromEntries(filteredProps) as Omit<T, U>
}

export function setDefaultClasses(
  props: { className?: string },
  defaultClasses: string[],
  prioritizeDefaultClasses: boolean = true
): void {
  let classes = ''
  if (prioritizeDefaultClasses) {
    classes = [...defaultClasses, props.className].join(' ')
  } else {
    classes = [props.className, ...defaultClasses].join(' ')
  }
  props.className = classes
}

type Options = {
  prioritizeDefaultClasses?: boolean
}

export function composeProps<
  T extends { className?: string },
  U extends keyof T
>(props: T, filterOut: U[], classesToAdd: string[] = [], options?: Options) {
  const htmlProps = filterProps(props, filterOut)
  setDefaultClasses(
    htmlProps,
    classesToAdd,
    !!options?.prioritizeDefaultClasses
  )
  return htmlProps
}

type CssCustomvar = `--${string}`

export function setCSSInlineStyles(
  props: { style?: CSSProperties },
  newProps: CSSProperties & Record<CssCustomvar, string>
) {
  const cssProps = { ...(props.style ?? {}) }
  for (const [prop, value] of Object.entries(newProps)) {
    ;(cssProps as any)[prop] = value
  }
  props.style = cssProps
}
