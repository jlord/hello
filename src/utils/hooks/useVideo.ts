import { useStaticQuery, graphql } from 'gatsby'

const getVideosQuery = graphql`
  query GetVideos {
    allFile(filter: { extension: { regex: "/(mp4)|(webm)/" } }) {
      edges {
        node {
          publicURL
          name
          extension
        }
      }
    }
  }
`

type AvailableVideos = 'GTO90-Scene-001-New'
type QueryReturnType = {
  allFile: {
    edges: {
      node: {
        publicURL: string
        name: string
        extension: string
      }
    }[]
  }
}

export function useVideo(videoName?: AvailableVideos) {
  if (!videoName) return ''
  const data: QueryReturnType = useStaticQuery(getVideosQuery)
  const videos = data.allFile.edges
    .filter((edge) => edge.node.name === videoName)
    .map((edge) => edge.node)
  const defaultVideoUrl = videos[0].publicURL

  if (videos.length > 1) {
    const webmVersion = videos.find(
      (video) => video.extension === 'webm'
    )?.publicURL

    return webmVersion ?? defaultVideoUrl
  }

  return defaultVideoUrl
}
