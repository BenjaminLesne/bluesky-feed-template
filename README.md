# Bluesky feed template

## How to get my custom feed running asap? 

1. Clone this repo

```bash
git clone https://github.com/BenjaminLesne/custom-feed-template.git
```

2. Update the `YOUR_FEED` variable `constants.ts` with your information 

3. Update the `handle` variable in `scripts/publishFeedGen.ts` with your bluesky handle

3. Add your own logic to `standardAlgo` in `jetstream.ts`

4. Deploy the code to a VPS and execute the next steps in the VPS

5. Push your schemas to the sqlite database

```bash
pnpm run db:push
```

6. Provide the env variables (see .env.example)

7. Install the dependencies and start the app

```bash
npm install -g pnpm && pnpm install && pnpm run start
```

8. Publish your feed to Bluesky

```bash
pnpm run publish
```

9. Search for the feed name your provided in constants.ts in [Bluesky feeds](https://bsky.app/feeds)

10. Enjoy your feed

For more details see the [`How to code a custom bluesky feed?`](https://blog.benjamin-lesne.dev/blog/How-to-code-a-custom-bluesky-feed) blog post


### Useful links:

- [Get your did here](https://bsky-did.neocities.org/)
- [Create a Bluesky App password here](https://bsky.app/settings/app-passwords)

### Caveat

- No cron job are setup to remove old posts from the database yet
- We use `agent.api` to publish our feed even though this is deprecated (you know a better way? please let me know!)