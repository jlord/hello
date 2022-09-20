declare module '*.module.scss' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.jpg' {
  const path: string
  export = path
}

declare module '*.webp' {
  const path: string
  export = path
}

declare module '*.svg' {
  const path: string
  export = path
}
