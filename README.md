# Explaining the Data Layer

  Mutable data can be found at `data/data.json`. Here's the schema for the JSON:

  ```typescript
  type DataLayer = {
    instagram: string // Your instagram URL
    soundcloud: string // The soundcloud URL for the botton beside the instagram button
    mixcloud_embed: string // The link for the mixcloud embed at the bottom of the page
    watchVideoButtonLink: string // the link for the "Watch Video" button
    musics: {
      name: string // Track name with number, example: 01. Track 1
      album: string // Album name
      link: string // Individual soundcloud link for the track
      toRealease: boolean // false if the track has already been released
      video: string // video ID of an youtube video, for example if the video URL is https://www.youtube.com/watch?v=fiGuXsvy69E, the id is fiGuXsvy69E
    }[]
  }
  ```