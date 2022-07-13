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
