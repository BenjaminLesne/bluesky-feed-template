export const FEED_GENERATOR = {
    did: 'did:web:' + (process.env.HOSTNAME as string),
    endpoint: `https://${(process.env.HOSTNAME as string)}`
  } as const
  
  export const YOUR_FEED = {
    name: "My custom feed", // displayed to bluesky users when searching for feeds
    description: 'This is my feed description that is visible in Bluesky',
    rkey: 'my-custom-feed', // will be part of the feed's url
  } as const
  