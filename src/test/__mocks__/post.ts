import { Post } from '@frontend/types/sanity';

export const posts: Post[] = [
  {
    _type: 'post',
    intro: "What's the role of a code linter and formatter in our projects?",
    _id: '04cf7c81-7686-4f68-a64e-9bf9449d82a9',
    slug: {
      current: 'code-linters-and-formatters',
    },
    _createdAt: '2024-11-04T22:12:14Z',
    tags: [
      {
        title: 'Linting',
        slug: {
          current: 'linting',
          _type: 'slug',
        },
      },
      {
        title: 'Formatting',
        slug: {
          current: 'formatting',
          _type: 'slug',
        },
      },
      {
        title: 'Code Style',
        slug: {
          _type: 'slug',
          current: 'code-style',
        },
      },
    ],
    title: 'Code linters and formatters',
    content:
      '## TLDR\n\n* Linters flag bugs and bad practices\n* Formatters fix your code to match style guides\n\n\n\n## Linting \n\nCode linters perform static analysis on code to identify programming errors, detect bugs, point out stylistic issues, and highlight suspicious constructs using the abstract syntax tree (AST). By ensuring your code adheres to a style guide, code linting promotes and enforces best practices.\n\nA linter typically alerts you to functions that are overly complex, suggests syntax improvements, and flags coding practices that deviate from established conventions or configurations. \n\nFor example, ESLint is a popular linter for JavaScript, while SonarLint is an IDE extension that provides linting support for code in VSCode. Popular configs such as Airbnb make it easy to start adopting strict practices in your projects\n\n\n## Formatters\n\n\nCode formatters manage style elements like spacing, line breaks, and comments, helping to enforce programming and formatting rules that can be easily automated. This reduces future code diffs by allowing an automatic tool to handle formatting instead of relying on individual developers.\n\nFor example, Prettier is a popular code formatter that automatically formats code to ensure a consistent style across various languages.\n',
    image: {
      alt: 'eslint + prettier',
      asset: {
        _ref: 'image-9171f0f3be491209389bb28a3469c12faab7a68e-1024x285-png',
      },
    },
    publishedAt: '2024-11-04',
    _rev: 'As17RvIPCrS48mQI6B00di',
    _updatedAt: '2024-11-17T14:03:04Z',
  },
  {
    _createdAt: '2024-03-25T14:42:32Z',
    slug: {
      current: 'how-to-connect-a-custom-domain-to-aws-api-gateway',
    },
    intro:
      'How to connect a custom domain (cloudflare) to AWS API gateway and generate free SSL certificates',
    _rev: '4lDd38EE1lNtgAncNqGU8p',
    publishedAt: '2024-03-25',
    _type: 'post',
    tags: [
      {
        title: 'AWS',
        slug: {
          _type: 'slug',
          current: 'aws',
        },
      },
      {
        title: 'Cloud',
        slug: {
          current: 'cloud',
          _type: 'slug',
        },
      },
    ],
    _updatedAt: '2024-03-26T09:28:10Z',
    content:
      "When creating lambda functions with HTTP API gateways, it's very common to not want to use the default function URL provided out the box by AWS. To achieve this, we are going to go over how to connect your domain in cloudflare to an endpoint exposed via AWS API gateway. \n\n\nSteps:\n\n* Generate an origin server certificate on cloudflare\n* Import the cloudflare certificate in AWS certificate manager\n* Create the custom domain name in AWS API gateway\n* Create a record in cloudflare to point the record to the API gateway\n\n\n## Generate a certificate on cloudflare\nNavigate to the cloudflare dashboard, select the site of interest, navigate to the SSL/TLS menu and click 'Overview'. Ensure the SSL/TLS encryption mode is set to full otherwise we will get 521 errors from cloudflare. \n\n\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/29492f9fec4269c780050e26dbbbc215f0b61a80-1922x1084.png?w=450)\n\nNavigate to origin server, click 'create certificate' and enter the domain you want. This must match what you enter in 'custom domain name' in AWS API gateway. \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/c617e70d6ec48cc56c687e76e762370a8b4d42ee-1922x1542.png?w=450) \n\n\nClick create and save the origin certificate and private key somewhere safe. Ideally you should also provide AWS API gateway with the certificate chain. You can find cloudflare's certificate chain [here](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/#cloudflare-origin-ca-root-certificate)\n\n\n## Import the cloudflare certificate into AWS certificate manager\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/6d9b1abac26c8efb56cbfaeea5c8b6be6642630b-2012x1298.png?w=450)\n\nFill out the required info and click Next. Enter any tags you want and click 'review and import'. Now that we've got our certificate imported we can move on to adding the domain to the API gateway.\n\n## Create the domain name in AWS API gateway \n\nGo to AWS API gateway and navigate to the custom domain names section and click 'create' \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/5696580948b3300d084c9c1e84510dc4777753d9-572x1298.png?w=450) \n\n\nFill in the domain name with the domain you entered when creating the certificate in cloudflare and then for the ACM certificate choose the certificate you just imported. \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/cddb15f9a8db27b9297623036c5ac615593ff66c-1818x2118.png?w=450)\n\nAt this point select the created domain and go to API mappings and click the Configure API mappings.\n\nAdd a new mapping selecting the API Gateway route and relevant stage.\n\n## Point the cloudflare DNS to the API gateway \n\nNow that everything is imported in AWS, we can go back to the cloudflare dashboard and enter our new DNS records for the gateway. Navigate to DNS and records. Click 'Add record', choose CNAME, ensure cloudflare is proxying the traffic and then enter your values. You can get the gateway domain name by navigating to API gateway > custom domain names > configurations > 'API Gateway domain name'\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/f2ff9d86c29931392bb6b043c0aa7a24e39ef7e8-1414x928.png?w=450)\n\n\n## Resources\n\nView https://github.com/luke-h1/lho-lambda for an example on how to automate this infrastructure with Terraform\n\nIt's worth nothing that Cloudflare origin certificates only support one level of sub domains. So you can't have a domain such as `myapi.staging.mysite.com`",
    _id: 'abd0e41b-300d-4e79-962b-9e499b819e41',
    title: 'How to connect a custom domain to AWS API gateway',
    image: {
      alt: 'aws api gateway',
      asset: {
        _ref: 'image-ac10eed3e232949959f69e0decbd593b10dfb0ea-972x611-png',
      },
    },
  },
  {
    intro:
      'AWS vault is a handy tool I use every day to manage my AWS credentials when developing locally',
    title: 'Getting started with aws-vault',
    slug: {
      current: 'getting-started-with-aws-vault',
    },
    _rev: 'sPfbpGwcTcL4Wgl0mBKRqm',
    _type: 'post',
    _updatedAt: '2024-03-06T20:51:40Z',
    tags: [
      {
        title: 'AWS',
        slug: {
          _type: 'slug',
          current: 'aws',
        },
      },
      {
        title: 'Cloud',
        slug: {
          current: 'cloud',
          _type: 'slug',
        },
      },
    ],
    _createdAt: '2024-03-06T20:45:48Z',
    image: {
      alt: 'aws vault github card',
      asset: {
        _ref: 'image-bbf409c3d66ac0b9ce20bfe4aebb9678e7eb2cab-1200x600-png',
      },
    },
    _id: 'b21d981c-ada1-4db8-aeca-c5c928bb8d71',
    content:
      "## Why aws-vault?\n\n\nWhen we are configuring the AWS CLI on our machines, it will save access key and secrets in plain text format in your home directory  `~/.aws/credentials`. As you can imagine, this becomes a big security concern as everyone knows where to look for your credentials, they're in plain text and anyone can scan/look for those keys. If you're unlucky, you've just given someone easy access to your account.  \n\n\nIn order to prevent situations like this from happening, aws-vault comes to the rescue! aws-vault is an open source tool developed by [99Designs](https://github.com/99designs) which is widely used to secure our AWS keys in an encrypted format.\n\nMoreover, aws-vault maximizes security through transient credentials obtained from Amazon's STS service. These are procured via `GetSessionToken` and `AssumeRole` API calls and have a limited timespan. Since these credentials are temporary, the danger of becoming compromised is significantly reduced. \n\n\n\n## Getting started\n\nHere's a quick starter on how you can get up and running with aws-vault\n\n\n### Setting up the tool\n\nOn mac OS, we can install aws-vault with one command:\n\n```bash\nbrew install --cask aws-vault\n\n```\n\n### Transfer any existing credentials \n\n\nMove existing credentials to aws-vault: \n\n```bash\ncat ~/.aws/credentials\naws-vault add profile_1\naws-vault add profile_2\n```\n\n### Pick an account to launch \n\nTo review all your available accounts run: \n\n```bash \n\naws-vault list\n\n```\n\nTo assume an account role: \n\n```bash\n\naws-vault exec my_profile\n\n```\n\n## Passwordless AWS console access \n\nAnother advantage of using aws-vault is that you can perform safe sign-in to the aws console. This saves the hassle of having to use your browser to navigate to aws. This command utilises your MacOS keychain and 2FA to authenticate you with your profile: \n\n```\naws-vault login my-profile --duration 2h\n```\n\n## Ending the session \n\nTo Safeguard against your account becoming comprimised you can terminate the vault session by pressing `ctrl+d`. In addition to this you can set short session durations to avoid being authenticated longer than necessary ",
    publishedAt: '2024-03-06',
  },
  {
    intro: '2023 year in review and goals for 2024',
    _id: '882abd26-0d65-47c6-a691-455be3514b55',
    tags: [
      {
        title: '2023 Review',
        slug: {
          current: '2023-review',
          _type: 'slug',
        },
      },
    ],
    publishedAt: '2024-01-14',
    _updatedAt: '2024-01-14T21:38:24Z',
    slug: {
      current: '2023-year-in-review-and-2024-goals',
    },
    _rev: 'G3kbcNFFfsjrMFx69sRmOU',
    title: '2023 in review and 2024 goals',
    content:
      "Hey, this is my first year in review. It's been a very busy year. \n\n## Accomplishments\n\n\n- Held two different titles at work and switched companies \n\n- Finished a complete redesign of my website two times over (the one you’re using right now 😉)\n\n- Took more holidays than I usually do and went on lots of leave\n\n- Finished shipping a big feature at my last job before I left\n\n- Shipping new features at my new job and learnt lots of new tech which I’m excited to improve upon in 2024\n\n- Got started on a big side project\n\n- Attended my first tech conference in Berlin (react-day berlin)\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/ecdc733df39fac1f86eff0e330782eaa32e534a7-1756x2340.jpg?w=450)\n\n## goals for 2024\n\n### Learn more things\n\nI’m hoping to get stuck into a few big projects in order to get my teeth into some new tech and learn these subject areas in depth.\n\nFor now I’ll be focussing on:\n\n- React native\n- AWS\n- Terraform / Infrastructure / DevOps\n- Monitoring - New relic, Prometheus, Grafana etc.\n\n\n### Write more blog posts\n\nHoping to write a few more blog posts than I did in 2023 particularly around things I’ve learned at work & problems I’ve faced in recent side projects and how to go about fixing them",
    image: {
      alt: 'code',
      asset: {
        _ref: 'image-5e3a80531b8b7dbf6ffbf401c278dbb2574a4572-1750x782-png',
      },
    },
    _createdAt: '2024-01-14T20:19:58Z',
    _type: 'post',
  },
  {
    _updatedAt: '2024-11-13T20:32:29Z',
    image: {
      alt: 'spotify',
      asset: {
        _ref: 'image-813fca5dcfee079e98465159c7a62742d80483a0-1280x720-jpg',
      },
    },
    _type: 'post',
    tags: [
      {
        title: 'Spotify',
        slug: {
          current: 'spotify',
          _type: 'slug',
        },
      },
      {
        title: 'Next.js',
        slug: {
          _type: 'slug',
          current: 'next-js',
        },
      },
      {
        title: 'React',
        slug: {
          _type: 'slug',
          current: 'react',
        },
      },
    ],
    _rev: '597BLCVKoLeH01f9YgmuYt',
    title: 'How to use the Spotify API with Next.js',
    publishedAt: '2023-09-09',
    intro:
      "Recently I aimed to showcase the current Spotify song I was listening to on my website. To achieve this, I connected the Spotify API with Next.js route handlers. In this post, we'll go over how to do this to help you get started with Spotify's API",
    _id: '162b0c95-fece-4964-961b-4884eb1c0c5c',
    _createdAt: '2023-09-09T17:43:55Z',
    slug: {
      current: 'how-to-use-the-spotify-api-with-next-js',
    },
    content:
      // eslint-disable-next-line no-template-curly-in-string
      '## Create an Application\n\nInitially, we need to generate a Spotify application in order to obtain the neccesary credentials for authenticating with the API\n\n* Go to your Spotify [Developer Dashboard](https://developer.spotify.com/dashboard) & login\n\n* Click **Create an App**\n* Fill out the name and description and click *create*\n* Click **Show Client Secret**\n* Save your Client ID and secret somewhere safe, we\'ll need these later\n* Click **Edit settings**\n* Add `http://localhost:3000` as a redirect URI\n\n\nYou now have a correct Spotify config and the credentials to make requests\n\n## Auth\nThere are a few ways to authenticate with the Spotify API, depending on your app. As we require permission to be granted only once, we will use the authorization code flow:  https://developer.spotify.com/documentation/web-api/concepts/authorization#authorization-code-flow\n\nInitially, our app will gather authorization by logging in with the necesary scopes. Below is an example of what the URL will resemble. Remember to swap out the `client_id` and `scopes` for your own values:\n\n```typescript\nhttps://accounts.spotify.com/authorize?client_id=1238e94b895495de7dd\nb84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http\n%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20\nuser-top-read\n\n```\n\nFollowing this, you\'ll be re-directed back to the `redirect_uri` you specified. Within the URL, you will find a `code` param. Save this value somewhere safe for later\n\n```typescript\nhttp://localhost:3000/callback?code=mAwq3...TkDeQ\n\n```\n\nNext, we will need to obtain the refresh token. You will need to generate a Base64 encoded string that includes the client ID and secret obtained earlier. You can use a tool such as [https://www.base64encode.org/](base64 encode) to do this. The format should adhere to `client_id:client_secret`.\n\n```bash\ncurl -H "Authorization: Basic <base64 encoded client_id:client_secret>"\n-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A\n%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token\n````\nThis will return a JSON response containing `refresh_token`. This token will remain valid indefinitely unless you choose to revoke access, so it\'s very important to keep this safe and only store it as an environment variable that is only available on the server.\n\n\n## Using the Spotify API\n\nWe\'re now able to use the Spotify API 🥳. In your Next.js app, create the following environment variables\n\n```bash\nSPOTIFY_CLIENT_ID=\nSPOTIFY_CLIENT_SECRET=\nSPOTIFY_REFRESH_TOKEN=\n```\n\n\nAt this stage, we can now request an access token using our client ID, client secret and refresh token\n\n\n```ts\n\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\n\nconst spotifyService = {\n  async getAccessToken(): Promise<{ access_token: string }> {\n    const response = await fetch(TOKEN_ENDPOINT, {\n      method: \'POST\',\n      headers: {\n        Authorization: `Basic ${basic}`,\n        \'Content-Type\': \'application/x-www-form-urlencoded\',\n      },\n      // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n      // @ts-ignore\n      body: new URLSearchParams({\n        grant_type: \'refresh_token\',\n        refresh_token,\n      }),\n    });\n    return response.json();\n    },\n}\n\n```\n\nThis `access_token` will now securely request things such as your top tracks, now playing etc. (this assumes you added the `user-top-read` scope at the beginning of the post)\n\nTop tracks:\n\n```typescript\n\nconst NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\n\n  async getTopTracks() {\n    const { access_token } = await spotifyService.getAccessToken();\n\n    return fetch(TOP_TRACKS_ENDPOINT, {\n      headers: {\n        Authorization: `Bearer ${access_token}`,\n      },\n    });\n  },\n\n```\n\n## Creating a route handler\n\nIn order to validate that everything is set up correctly with Spotify, let\'s begin with creating a route handler that communicates with Spotify to get our currently playing song. \n\n\n```typescript\n// app/api/spotify/now-playing/route.ts\n\nimport spotifyService from \'@frontend/services/spotifyService\';\nimport { SongItem } from \'@frontend/types/spotify\';\n\nexport const runtime = \'edge\';\nexport const revalidate = 10;\n\nexport async function GET() {\n  const res = await spotifyService.getNowPlaying();\n\n  if (res.status === 204 || res.status > 400) {\n    return new Response(JSON.stringify({ isPlaying: false }), {\n      status: 200,\n    });\n  }\n\n  const song = (await res.json()) as SongItem;\n\n  if (!song.item) {\n    return new Response(\n      JSON.stringify({\n        isPlaying: false,\n      }),\n      {\n        status: 200,\n      },\n    );\n  }\n  const isPlaying = song.is_playing;\n  const title = song.item.name;\n  const artist = song.item.artists\n    .map((_artist: { name: string }) => _artist.name)\n    .join(\', \');\n  const album = song.item.album.name;\n  const albumImageUrl = song.item.album.images[0].url;\n  const songUrl = song.item.external_urls.spotify;\n\n  const body = JSON.stringify({\n    album,\n    albumImageUrl,\n    artist,\n    isPlaying,\n    songUrl,\n    title,\n  });\n\t\nconsole.log(body)\n\n  return new Response(body, {\n    status: 200,\n  });\n}\n\n```\n\nThis handler will return the currently playing song, formatted to satisfy eslint / remove unneccesary info. If everything is working correctly, you should see some data in the console like the following after running `next dev` and hitting the endpoint when you\'re listening to a song on Spotify :)  \n\n```bash\n\n{\n  "album": "Jongen Van De Straat",\n  "albumImageUrl": "https://i.scdn.co/image/ab67616d0000b2738d30694491e182ea7e38f517",\n  "artist": "Lil Kleine",\n  "isPlaying": true,\n  "songUrl": "https://open.spotify.com/track/3bhmMwkuZFhgUr9Y6hmjze",\n  "title": "Heel Mijn Leven"\n}\n```',
  },
  {
    image: {
      alt: 'TypeScript and JavaScript logo',
      asset: {
        _ref: 'image-94eff0e8c96ad117a2f316aaad4a65c33a25dc4a-2258x1018-png',
      },
    },
    slug: {
      current: 'typescript-why-to-use-unknown-instead-of-any',
    },
    _rev: 'e91bea2b-5bf7-4fe9-9ec6-836e7b7e103f',
    _id: 'drafts.b2dc3996-2282-4036-8987-a411f940a169',
    title: 'TypeScript - why to use unknown instead of any',
    _createdAt: '2023-09-09T17:33:21Z',
    _updatedAt: '2024-11-09T14:24:41Z',
    content:
      "From time to time, we encounter a situation when we don't know the type of something, whether that be from an external API, a service etc. Before TypeScript V3, we would use 'any' to describe these types. This comes with a few tradeoffs such as lack of type safety provided by TypeScript. Take the following example:\n\n```typescript\nconst myObject: any = { \n a: \"yo\",\n b: \"yo yo\"\n}\n```\nYou would be able to access the properties of the object above, i.e. `myObject.a`, `myObject.b` and everything would work as intended. If you tried to access `myObject.c`, TypeScript **would not** throw an error at build time, since the object `myObject` can be anything. This defeats the point of TypeScript, to check types at build time and prevent you from shipping code that will blow up at runtime. i.e. if your frontend application tried to access `myObject.c` at runtime (in the browser or in a Node environment), your application would thrown an error since it wouldn't be able to access a non-existant variable\n\nThis can be a source of many bugs and footguns, since you've told TypeScript not to check the type of this object at build time by using `any`. When you use the `any` type, you are opting out of type checking and telling TypeScript \"I know what I'm doing, leave me alone and don't check this type\". This leads us onto the conversation of why unknown is a much more preferable type than 'any'\n\n\n## why use unknown instead of 'any' ?\n\nThe unknown type was introduced in V3 of TypeScript as a sidekick to 'any'. The unknown type, when assigned to a variable, tells the TypeScript compiler that the type is not known. TypeScript does not allow you to use a variable of an `unknown` type ****unless you either cast the variable to a known type or narrow its type. This results in us having to use type-safe operators to narrow its type. Take the following example:\n\n```typescript\nconst myVariable: unknown = 1;\n```\n \n If we tried to perform an arithmetic operator on `myVariable` without narrowing the type, TypeScript will throw the following error: \n \n ```bash\n Object is of type 'unknown'.\n ```\n \n In order to fix the above type error in a type safe way, we can use type guards to check that `myVariable` is a number before performing arithmetic operations on it: \n \n ```typescript\n \n if (typeof myVariable === \"number\") {\n   console.log(myVariable * 10)\n}\n \n ```\n \n As you can now see, the unknown type forces you to determine what a variable typed as unknown actually is, either via type casting or narrowing. This results in TypeScript being able to check the resulting type, resulting in a more type-safe application\n \n \n ## Conclusion\n \n The unknown type can be very handy in preventing accidental footguns and bugs in your application. Unknown was only introduced in TypeScript v3 which meant that it came well after the 'any' type. I don't think the 'any' type was a mistake even though it pretty much turns off TypeScript. JavaScript is a fast and loose language for a reason. Sometimes you don't want the rigidity of TypeScript to get in your way just for the sake of satisfying the compiler and not for building a feature. Whenever possible (imo) it's best to try to blend both and try to use the most of TypeScript whenever possible",
    publishedAt: '2023-09-09',
    intro:
      "How to manage TypeScript codebases when you don't know the exact shape of something",
    _type: 'post',
    tags: [
      {
        title: 'Typescript',
        slug: {
          current: 'typescript',
          _type: 'slug',
        },
      },
      {
        title: 'JavaScript',
        slug: {
          current: 'javascript',
          _type: 'slug',
        },
      },
    ],
  },
  {
    _id: '851e1f09-a9d3-4385-9005-3173e49c1d0f',
    _updatedAt: '2023-08-27T14:41:02Z',
    slug: {
      current: 'how-to-build-a-custom-prisma-generator',
    },
    tags: [
      {
        title: 'Prisma',
        slug: {
          current: 'prisma',
          _type: 'slug',
        },
      },
      {
        title: 'Node',
        slug: {
          current: 'node',
          _type: 'slug',
        },
      },
    ],
    publishedAt: '2023-08-27',
    _createdAt: '2023-08-27T13:21:53Z',
    title: 'How to build a custom Prisma generator',
    image: {
      alt: 'logo of prisma ',
      asset: {
        _ref: 'image-238790459de1635f19d43858680bdfe99b97d7b5-1484x460-png',
      },
    },
    _type: 'post',
    content:
      // eslint-disable-next-line no-template-curly-in-string
      '## What is a prisma generator?\n\n\nA prisma Generator is a tool that introspects your Prisma schema and outputs code from it. If you\'ve used Prisma before, you should already be quite familiar with `prisma-client-js` which generates a prisma client and TypeScript types from your schema. \n\nWhen you\'re working with Prisma, you\'ll often notice that there are a few things you always want to change after modifying your prisma Schema, and that is where generators come into the picture.\n\n\n\nNow that we\'ve gone over a high level overview of what Prisma generators are, let\'s go over a real world example where we build a custom generator to generate custom enums and publish it to NPM\n\n\n## How to create a custom Prisma generator\n\n\n### Create a new NPM project \n\n\nFirst we\'ll create a new folder and initialize a new git + NPM project \n\n```bash \nmkdir prisma-ts-enums && cd prisma-ts-enums && git init . && pnpm init\n```\n\n### Install dependencies \n\nSecondly, we\'ll install all the required dependencies \n\nProduction dependencies:\n\n```bash \npnpm i @prisma/generator-helper\n```\n\nDev dependencies:\n\n```bash\npnpm i -D @prisma/client @types/node typescript prisma prettier eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-import-resolver-typescript lint-staged husky @typescript-eslint/eslint-plugin\n\n```\n\nWe won\'t go over the linting dependencies too much for brevity\'s sake. You can find a copy of the linting config files [on the repo](https://github.com/luke-h1/prisma-custom-enums). These config files are optional and are not required to follow along with this tutorial\n\n\nThe important file that we need to include is the `tsconfig.json` file in order to build the project correctly and enforce good TypeScript practices throughout the project:\n```bash\n{\n    "compilerOptions": {\n      "allowJs": true,\n      "alwaysStrict": true,\n      "allowSyntheticDefaultImports": true,\n      "module": "esnext",\n      "moduleResolution": "node",\n      "outDir": "./dist",\n      "noEmit": true,\n      "noImplicitAny": true,\n      "strict": true,\n      "strictNullChecks": true,\n      "jsx": "preserve",\n      "target": "ES2022",\n      "lib": ["dom", "dom.iterable", "esnext", "webworker"],\n      "skipLibCheck": true,\n      "esModuleInterop": true,\n      "forceConsistentCasingInFileNames": true,\n      "resolveJsonModule": true,\n      "baseUrl": ".",\n    },\n    "exclude": ["node_modules"],\n\t\t"include": ["src"]\n  }\n\t\n```\n\n\nNow we\'re ready to start writing our new generator \n\n\n### Create a prisma generator \n\nNow with the setup out of the way, we\'ll get started with creating the generator. We will seperate each part of the generator into its own file for organisation purposes. Create a new file in the src folder, call it `generator.ts` and add the following code:\n\n```typescript\n// src/generator.ts \n\nimport { generatorHandler } from "@prisma/generator-helper";\nimport onManifest from "./onManifest";\nimport { onGenerate } from "./onGenerate";\n\ngeneratorHandler({\n    onManifest: onManifest,\n    onGenerate: onGenerate,\n  });\n\n```\n\nLet\'s start with writing the `onManifest` function. This allows us to specify defaults & other information for our generator. Create a new file called `onManifest` in `src` and add the following code: \n\n```typescript \n// src/onManifest.ts\nimport type { GeneratorManifest } from \'@prisma/generator-helper\';\n\nexport default function onManifest(): GeneratorManifest {\n  return {\n    defaultOutput: \'./types\',\n    prettyName: \'Prisma enum custom generator\',\n    version: \'0.0.1\',\n  };\n}\n\n```\n\nNow we\'ll move onto the `onGenerate function`. This is responsible for actually generating our custom types. From this point forward I\'ll explain what each piece of code does. Create a new file called `onGenerate` in `src` and add the following code: \n\n```typescript \n// src/onGenerate.ts\n\nimport { GeneratorOptions } from \'@prisma/generator-helper\';\nimport fs from \'node:fs/promises\';\nimport path from \'node:path\';\n\nconst header = `// This file was generated by a custom prisma generator, do not edit manually.\\n`;\n\nexport default async function onGenerate(options: GeneratorOptions) {\n  const start = Date.now();\n\n  const enums = options.dmmf.datamodel.enums;\n}\n\n// rest of generator code...\n\n```\n\nHere we are defining the `onGenerate` function. We are defining a start variable which we will use later on for calculating how fast the custom generation takes and displaying this to the end user. We are then grabbing the enums out of the datamodel as we will want to modify this. \n\n\n```typescript\n  const output = enums.map(e => {\n    let enumString = `export const ${e.name} = {\\n`;\n    e.values.forEach(({ name: value }) => {\n      enumString += `  ${value}: "${value}",\\n`;\n    });\n    enumString += `} as const;\\n\\n`;\n    enumString += `export type ${e.name} = (typeof ${e.name})[keyof typeof ${e.name}];\\n`;\n\n    return enumString;\n  });\n\t\n```\n\nHere we are tranforming the prisma enum type from something that looks like: \n\n\n```typescript \nenum Status {\n    DRAFT = "DRAFT",\n    PUBLISHED = "PUBLISHED",\n}\n\n```\n\nto \n\n```typescript \nconst Status = {\n    DRAFT: \'DRAFT\',\n    PUBLISHED: \'PUBLISHED\',\n} as const;\n\ntype Status = keyof typeof Status;\n```\n\nAt this point you may be wondering why we\'re going to all this trouble to not use native TypeScript enums. The main reason I don\'t use native TypeScript enums is because the TypeScript team themselves have mentioned it was a mistake on their part to create them. A few other reasons include: \n\n* Bloats bundle size\n* Numeric enums are NOT type-safe\n\n\nBecause of these issues we are using the const assertion feature. This helps us keep our bundle light and at the same time, provides us with the same typing feature as the `enum`.\n\nTo use this feature you:\n* declare the object like you would in plain JS\n* Add `as const` after the declaration\n\n```typescript \nexport const httpStatusCode = {\n    Ok: 200,\n    BadRequest: 400,\n    Unauthorized: 401,\n    Forbidden: 403,\n    NotFound: 404,\n    ServerError: 500,\n} as const;\n\n```\n\nExtract the type from it: \n\n```typescript \ntype HttpStatusCodeKey = keyof typeof httpStatusCode;\nexport type HttpStatusCode = typeof httpStatusCode[HttpStatusCodeKey];\n\n```\n\nNow we have the real type which represents the union of the `httpStatusCode` object\'s values. The good news is that this type is only used for building TS and is then removed from the transpiled output. \n\n```typescript\nclass HttpResponse {\n code: HttpStatusCode = httpStatusCode.Ok;\n// other stuff here\n}\n```\n\nThe native TypeScript enum is a C# flavor brought to TypeScript. While it provides inoccent enough syntax when you\'re coming from a C# background, it can be harmful to end users. As mentioned before TypeScript authors are also aware of these pitfalls and are doing great work to provide alternative solutions. So if you don\'t know what to use you can follow this logic:\n\n* Do you need reverse mapping? (If you don\'t know, then the answer is probably "No")\n* If Yes, and your enum is not about strings, then you\'ll have to use a standard enum\n* If No, continue at point 2\n* Do you need to loop over enum members?\n* If Yes, then use const assertion\n* If No, continue at point 3\n* Use const enum and live happy\n\n\nBack to the generator code: \n\n```typescript \n  const outputFile = options.generator.output;\n  if (!outputFile || !outputFile.value) {\n    throw new Error(\'No output file specified\');\n  }\n\n  const outputPath = path.resolve(outputFile.value);\n  await fs.mkdir(path.dirname(outputPath), { recursive: true });\n  await fs.writeFile(outputPath, header + output.join(\'\\n\'));\n\n  const end = Date.now();\n\n  console.log(`[custom-enum-generator] - Generated enums in ${end - start}ms`);\n\n```\n\nHere we are specifying an output file where the generated code will be written to. We\'re also logging to the console how long it took for the `onGenerate` function to run. \n\n\n### Final code\n\n```typescript \nimport { GeneratorOptions } from \'@prisma/generator-helper\';\nimport fs from \'node:fs/promises\';\nimport path from \'node:path\';\n\nconst header = `// This file was generated by a custom prisma generator, do not edit manually.\\n`;\n\nexport default async function onGenerate(options: GeneratorOptions) {\n  const start = Date.now();\n\n  const enums = options.dmmf.datamodel.enums;\n\n  const output = enums.map(e => {\n    let enumString = `export const ${e.name} = {\\n`;\n    e.values.forEach(({ name: value }) => {\n      enumString += `  ${value}: "${value}",\\n`;\n    });\n    enumString += `} as const;\\n\\n`;\n    enumString += `export type ${e.name} = (typeof ${e.name})[keyof typeof ${e.name}];\\n`;\n\n    return enumString;\n  });\n\n  const outputFile = options.generator.output;\n  if (!outputFile || !outputFile.value) {\n    throw new Error(\'No output file specified\');\n  }\n\n  const outputPath = path.resolve(outputFile.value);\n  await fs.mkdir(path.dirname(outputPath), { recursive: true });\n  await fs.writeFile(outputPath, header + output.join(\'\\n\'));\n\n  const end = Date.now();\n\n  console.log(`[custom-enum-generator] - Generated enums in ${end - start}ms`);\n}\n\n```\n\n\n### Wrapping up \n\nWe also need a node bash file to run the generator. Prisma will look for this file when consumers run `prisma generate`.  Create a file called `bin.ts` in `src` and add the following code: \n\n```typescript \n#!/usr/bin/env node \nimport \'./generator\'\n```\n\n\n### Publishing \n\nbefore we can go ahead with publishing the pacakge, we need to modify add the following properties to the `package.json` file: \n\n\n```bash\n"main": "dist/generator.js",\n"bin": {\n  "prisma-generator-types": "dist/bin.js"\n},\n"files": ["dist"],\n"scripts": {\n    "build": "tsc",\n}\n\n```\n* `main` is the entry point. This is where prisma will look for the generator\n* `files` is the files that will be includes when publishing a package\n* `bin` is the executable file that Prisma will run when consumers run `prisma`\ngenerate\n* `build` - build command to transpile TypeScript down to JS\n\n\nOnce you\'ve added the above, we can build the package: \n\n```bash\npnpm build\n```\n\nPublish to NPM\n\n```bash\nnpm publish\n```\n\n### Usage\n\nConsumers will now be able to use this utility in their `schema.prisma` file like so: \n\n```typescript\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["fullTextSearch"]\n}\n\ngenerator enums {\n  provider = "custom-enum-generator",\n\toutputFile = "./types"\n}\n\n```\n\n\n### Repo\n\nYou can find the full source code for this generator here: https://github.com/luke-h1/prisma-custom-enums',
    intro:
      'Learn how to create a Prisma generator that outputs TypeScript types from your Prisma schema',
    _rev: 'Gfj6DEgCseRAEM52nhy3Jh',
  },
  {
    content:
      "## App Directory (beta)\n\nYou get the latest & greatest from React - better performance and better scalability due to enforcing the way developers lay out code. \n\n\n## Turbopack (alpha)\n\nFaster builds, deploys etc. Given it's in alpha at the time of writing, you probably shouldn't be running it in production right now 😉\n\n## New next/image\n\nImages will react more natively on your website. You won't notice it, but Google will. The new image component ships less client side JavaScript and is aligned more with the native image. \n\n## New next/font \nFont is usually the main culprit for why websites look bad when they first load. This completely resolves this issue. No more comic sans appearing for a couple of seconds after your website first loads\n\n## API routes in /app dir\nAble to opt in to Edge or Node.js API routes in /app dir",
    _id: '2698df62-9040-4539-b2ae-e3b515e9391c',
    slug: {
      current: 'what-next-js-13-means-for-end-users',
    },
    _createdAt: '2023-02-18T17:46:16Z',
    _rev: 'jPzmgSHsCBXjSEEvNw7G8U',
    _type: 'post',
    title: 'What Next.js 13 means for end-users',
    _updatedAt: '2023-08-15T19:53:40Z',
    image: {
      alt: 'Next.js',
      asset: {
        _ref: 'image-bc88ee4aa7f4df2855cd2fcd6ac57af13f1dfa01-3840x1880-png',
      },
    },
    publishedAt: '2023-02-18',
    intro:
      'Next.js 13 contains a lot of quality-of-life improvements for developers, but what do these benefits actually mean to end users?',
    tags: [
      {
        title: 'Next.js',
        slug: {
          _type: 'slug',
          current: 'next-js',
        },
      },
    ],
  },
  {
    intro:
      "Conventional commits is a specification that seeks to improve and standardize commit messages in general. In this post, we'll go over the reasoning behind why you might want to use it & its benefits",
    _type: 'post',
    title: 'Conventional commits, a better way to commit',
    _updatedAt: '2023-08-16T17:22:07Z',
    content:
      "## Introduction\n\nConventional commits define a standard format that commit messages should adhere to. When using conventional commits, the reader (i.e. someone using `git log`) can easily glean valuable context & info about a given commit such as whether the commit implements a new fixture, fixes a bug, refactors existing code, etc. \n\nWhile I like conventional commits, I don't use it typically on every project. I've found it's quite common to just follow the convention of using the Jira ticket number as a template for a commit message such as: \n\n```bash\nBOARD-ID-3988 - add tests for BE product handlers \n```\n\nIn the case when I or the project however doesn't follow the above convention, I think conventional commits are a great way to go about making commit messages. \n\n\n### Standardizing commit messages\n\nConventional commits are simply a spec for adding human and machine-readable meaning to commit messages. The concept behind it is to provide a rich commit history that can be read by both humans and automated tools (think release tools such as GitHub releases, changelogs, etc). Conventional commits have the following format: \n\n```bash\n<type>[(optional<scope>)]: <description>\n```\n\nIn practice this would look something like this: \n\n```bash\nfeat(server): add endpoints for the new event system\n```\n\n### Commit types \n\nThe `<type>` field provides the context for the commit. What intent did this change make? Did the commit introduce a new feature? improve unit testing? fix a bug? etc. The `<type>` field can be quite flexible and your project can define what values you want to use. I typically use the following on a daily basis: \n\n* `feat` - This commit implements a new feature \n* `chore` - This commit includes a maintenance task that is necessary for managing the repository but doesn't introduce a major change. A good example of when I use this is when I've made a typo or am cleaning up some leftover work from a separate PR. \n* `ci` - This commit makes changes to continuous integration scripts or configuration files\n* `fix` - This commit fixes a bug\n* `test` - This commit enhances, adds to, revises, or does something else to a suite of automated tests in the repository\n \n \n \n### Scopes \nThe scope field is optional and is used to tag a given module or package in the repository. The `Scope` field is flexible, like the `<type>` field can change based on the project you're working on. If you have several packages inside a monorepo, you could preface the `Scope` field with the area you're working on i.e. \n\n```bash\nfeat(common): add common utilities\n```\n\n### Description \nThe `<description>` field is a short summary of the intent or content included in the commit. The description field can be used as a title to introduce the change and then you can write a further description on your Git provider to provide more details. \n\nWhen writing the description, it should be written in the imperative or future-tense mood, such as 'change' instead of 'changed' or 'fix' instead of 'fixed'. Instead of writing `created function MyFunction` I will write `create function MyFunction`. \n\n### Footers \nFooters are optional & I don't typically use them too much but they can be a great way to provide additional metadata for a commit. I typically use them for linking related issues, issues that will be closed by this PR, etc. Example: \n\n* Closes #3232\n* Resolves #1111\n\n\n### Enforce conventional commits adoption\n\nAdopting & following the conventional commits spec is one thing, but enforcing and making sure that everyone is following these standards is another thing. Fortunately, there are a few tools that you can use to ensure that commit messages follow the standards you set out. I typically utilize tools that make use of commit hooks to ensure these rules get enforced before a push occurs. \n\n\n* [Commit lint](https://commitlint.js.org/#/) - commitlint is a nodejs-based tool that will validate commit messages to ensure they use the conventional commit convention. This tool can be combined with a pre-commit tool such as [Husky](https://typicode.github.io/husky/#/) to ensure that a commit does not succeed if it doesn't meet the team's rules for properly formed commit messages.",
    tags: [
      {
        title: 'Git',
        slug: {
          _type: 'slug',
          current: 'git',
        },
      },
      {
        title: 'Github',
        slug: {
          _type: 'slug',
          current: 'github',
        },
      },
    ],
    image: {
      alt: 'image of code that says "git commit -am \'feat(frontend): add warning text to product page\'"',
      asset: {
        _ref: 'image-b49d3871a2a3a70268ac4cd6867974042a5c151e-1840x462-png',
      },
    },
    publishedAt: '2023-01-09',
    slug: {
      current: 'conventional-commits-a-better-way-to-commit',
    },
    _createdAt: '2023-01-09T20:16:45Z',
    _rev: 'NWkMTanCoZQbgLm8jvj1Gi',
    _id: '8f0ea826-18be-4adc-a191-523ca868cd31',
  },
  {
    _type: 'post',
    publishedAt: '2022-11-13',
    intro:
      "Playwright is a cross-browser end-to-end testing framework created by Microsoft. It's reliable, supports several languages, and is flake-resistant. In this post, we'll go over how to get started with Playwright.",
    _id: 'd1ef2cc4-9a59-4103-9641-3d7e6e697409',
    title: 'Getting started with Playwright UI testing',
    slug: {
      current: 'getting-started-with-playwright-ui-testing',
    },
    _rev: 'FUQBEvzuMU4X10wONyYWha',
    tags: [
      {
        title: 'e2e',
        slug: {
          current: 'e2e',
          _type: 'slug',
        },
      },
      {
        title: 'testing',
        slug: {
          current: 'testing',
          _type: 'slug',
        },
      },
      {
        title: 'Typescript',
        slug: {
          current: 'typescript',
          _type: 'slug',
        },
      },
    ],
    image: {
      alt: 'Playwright',
      asset: {
        _ref: 'image-eb4456a53ec38d0c984158772b5470cd528de6c6-1280x640-jpg',
      },
    },
    _createdAt: '2022-11-13T20:27:48Z',
    _updatedAt: '2023-01-29T20:18:41Z',
    content:
      "Playwright is a cross-browser end-to-end testing framework created by Microsoft. It's reliable, supports several languages, and is flake-resistant. In this post, we'll go over how to get started with Playwright.\n\n\nBefore we go over playwright & its benefits, let's first take a look at what makes UI / e2e testing hard:\n\nThese days, websites need to be rich, featured packed, fast & responsive. Nowadays, there is a multitude of frontend frameworks that do a lot more in the browser than web applications used to do a decade ago. Because of this, you may run into cases where the UI changes, shifts, or something takes longer than usual (i.e. component re-renders, state changes, WebSocket interactions, etc.). This makes any type of UI testing a difficult task. This is where the concept of brittle and flaky tests comes into focus. \n\n\nBecause of this, a few new testing frameworks have been created in the past few years that aim to keep up with ever-changing web standards and newer approaches to web development.\n\n\n\n### Enter Playwright\n\n<br />\n\nPlaywright is a newer, open-source cross-browser automation library for end-to-end / UI testing. It initially started off as a Javascript-based library but has since expanded to support Python, Java, DotNet & other bindings.\n\n\nThe main goal of Playwright is to provide a single API to developers and testers to automate web applications across today's three major browser engines: \n\n* Chromium\n* Firefox \n* Webkit \n\n\nPlaywright tries to approach the problems mentioned above by introducing intelligent defaults that reduce test flake/reliability out of the box. This includes things such as making sure the UI is ready, navigation is complete, automatically scrolling to elements, automatic retries, etc. As a tester, this saves tons of false positives and flakiness which can degrade your test confidence (and eat up a lot of your time up). \n\n\nSome of the feature highlights of Playwright:\n\n* Support for 3 browser engines (Chromium, Firefox, and WebKit)\n* Write tests in JavaScript & TypeScript, Python, .NET, and Java\n* Runs tests in parallel using worker processes (built into Playwright)\n* Support for screenshots and videos snapshots taking\n* Support for visual regression testing \n* Provides a great set of debugging tools\n* Wide range of element selectors (CSS, text, X-path, and more)\n* Intercept network activity for stubbing and mocking network requests (e.g API calls)\n\n<br />\n\n\n### Getting started \n\n<br />\n\n**Install dependencies**\n\n```bash\nnpm init playwright@latest\n\n```\n\nThis command will: \n\n* Choose between TypeScript or JavaScript (the default is TypeScript)\n* Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)\n* Add a GitHub Actions workflow to easily run tests on CI\n\n<br />\n\n\n**Install browsers**\n\n<br />\n\nBy default, Playwright tests run in a headless browser. Each version of Playwright needs specific versions of [browser binaries to operate](https://playwright.dev/docs/browsers). This command installs all supported browser binaries (by default): \n\n```bash\nnpx playwright install \n\n```\n\nBrowser binaries are installed in OS-specific cache folders by default. \n\n**Write & run your first test**\n\nThe tutorial provides a simple [first test](https://playwright.dev/docs/writing-tests#the-example-test) script that you can run. Put simply, the test visits the Playwright website and asserts that the title has the text content \"Playwright\".\n\n\n**Run in headed mode**\n\n<br />\n\nSometimes when you're debugging or creating new UI tests, you don't want to run the browser in headless mode. To see the browser, simply pass the `--headed` flag: \n\n\n```bash\nnpx playwright test --headed\n\n```\n\n<br />\n\n**Custom configuration**\n\n<br />\n\nYou can edit the configuration by looking in the `playwright.config.ts` file that was created as part of the creation process. \n\nSome options to look out for are:\n\n* workers - responsible for setting the level of parallelization\n* webServer - can start your app before running tests (useful in CI)\n* reporter - enables different reports\n\n\nThese are the modifications I typically make to the config file when starting a new project: \n\n```typescript \n\nimport type { PlaywrightTestConfig } from '@playwright/test';\nimport { devices } from '@playwright/test';\n\n/**\n * Read environment variables from file.\n * https://github.com/motdotla/dotenv\n */\n// require('dotenv').config();\n\n/**\n * See https://playwright.dev/docs/test-configuration.\n */\nconst config: PlaywrightTestConfig = {\n  testDir: './e2e',\n  /* Maximum time one test can run for. */\n  timeout: 30 * 1000,\n\n  expect: {\n    /**\n     * Maximum time expect() should wait for the condition to be met.\n     * For example in `await expect(locator).toHaveText();`\n     */\n    timeout: 10000,\n  },\n  /* Run tests in files in parallel */\n  fullyParallel: true,\n  /* Retry on CI only */\n  retries: process.env.CI ? 2 : 0,\n  reporter: [['list'], ['html'], ['github']],\n  workers: 4,\n  use: {\n    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */\n    actionTimeout: 0,\n    /* Base URL to use in actions like `await page.goto('/')`. */\n    // baseURL: 'http://localhost:3000',\n    trace: 'on-first-retry',\n  },\n\n  projects: [\n    {\n      name: 'chromium',\n      use: {\n        ...devices['Desktop Chrome'],\n      },\n    },\n  ],\n  outputDir: 'test-results/',\n  webServer:\n    // eslint-disable-next-line no-constant-condition\n    // start frontend app in CI\n    {\n      command: 'npm run start',\n      port: 3000,\n      timeout: 20000,\n    },\n};\n\nexport default config;\n\n```\n\n<br />\n\n\n**Wrapping up**\n\n<br />\n\nWhile playwright is new to the market, I think it's matured well over the past few years & has the potential to pack a punch when it comes to building an e2e testing solution. It certainly solves some of the long-standing issues with libraries such as Selenium whose behavior doesn't quite gel well with libraries such as React or Vue.\n\nIn addition to this, you still have full control over the web driver (unlike Cypress for example). This means that Selenium testers will feel right at home when developing extensive or advanced test cases",
  },
  {
    slug: {
      current: 'launching-multiple-iterm2-windows-with-one-script',
    },
    content:
      // eslint-disable-next-line no-template-curly-in-string
      'I\'ve been recently working on a project that has over 9 projects that need to be started in order to have a fully working environment. This project consists of multiple APIs, serverless functions, 2 primary frontend apps & 1 common frontend project. Recently I\'ve switched from using windows to mac OS for this particular project. On Windows, I use a script that opens a new terminal tab for each project. Here\'s a short snippet of it:\n\n```bash\n// start.cmd (example usage: \'.\\start.cmd\')\n\ncmd -new_console:t:"database":d:C:\\Users\\luke /k "cd C:\\Users\\luke\\project\\src & docker-compose up db"\n\ncmd -new_console:t:"data-storage":d:C:\\Users\\luke /k "cd C:\\Users\\luke\\project\\src & docker-compose up data-storage"\n\ncmd -new_console:t:"data":d:C:\\Users\\luke /k "sleep 10 & cd C:\\Users\\luke\\project\\src\\api && sleep 10 && cd src/api && dotnet start"\n\n```\n\nThis opens each project in a new tab which is great for keeping an eye on different services & for debugging.\n\n\n![image](https://cdn.sanity.io/images/wdj6ou2i/production/7d33246e7f54ad403a3b1d4bf71503c55148d8f3-1071x683.png?w=450)\n\nObviously, while this works on windows, it wasn\'t compatible with Mac OS.\n\n### The solution\n\n* Iterm2 \n* AppleScript\n* ZSH alias \n\nThe above 3 combined to make the experience of starting up a complex project simple.\n\nHere is the full script which will each sub-project in its own tab and label the tab appropriately \n\n\n```bash\n\n#!/bin/bash\nroot_path="/Users/luke/the-project"\n\n# script to open a new terminal window and start the project\n\nosascript <<EOF\ntell application "iTerm"\n  set newWindow to (create window with default profile)\n  tell current session of newWindow\n    set name to "db"\n    write text "pushd $root_path && cd src && docker-compose up db"\n  end tell\n  tell newWindow\n    set newTab to (create tab with default profile)\n    tell current session of newTab\n        set name to "redis"\n        write text "pushd $root_path && cd src && docker-compose up redis"\n    end tell\n  end tell\n  tell newWindow\n    set newTab to (create tab with default profile)\n    tell current session of newTab\n        set name to "api"\n        write text "pushd $root_path && cd src/api && dotnet build && dotnet start"\n    end tell\n  end tell\n\n  end tell\nEOF\n\n```\n\n![image](https://cdn.sanity.io/images/wdj6ou2i/production/3e152eec8f102ee94c8adb2259976ef23c52c3f6-2014x2112.png?w=450)\n\n\nThis script first tells iterm2 to open a new window with the default profile. Then we open a tab, set the tab name to whatever the project is, cd to the `root_path` specified by the script & run the command to start the project.\n\n\nNow all that\'s left to do is to alias this script to something memorable so you can easily start your project with one command: \n\n```bash\n\necho "alias startproject=\'cd /Users/${whoami}/start-project.sh\'" >> /Users/${whoami}/.zshrc\n\n```\n',
    intro:
      "As your project grows in size it can become a bit tedious when you're starting up your local environment. In this post, we'll go from having to run 4 commands to only one command to start a project with multiple sub-projects",
    _type: 'post',
    image: {
      alt: 'Code with blue background and terminal window containing a function which generates random CSS gradients',
      asset: {
        _ref: 'image-0ecaf94f366c0fef10ef14fd11b820209735c8a0-1440x1040-png',
      },
    },
    _createdAt: '2022-08-05T18:51:43Z',
    _updatedAt: '2023-04-01T16:03:23Z',
    _id: '635de893-a8eb-43da-8adb-b048fd99046d',
    title: 'Launching multiple Iterm2 windows with one script',
    _rev: 'h1XKCYhWMbLHTYPKmBqL4X',
    tags: [
      {
        title: 'Bash',
        slug: {
          _type: 'slug',
          current: 'bash',
        },
      },
      {
        title: 'Automation',
        slug: {
          current: 'automation',
          _type: 'slug',
        },
      },
    ],
    publishedAt: '2022-08-05',
  },
  {
    title: 'Set default node version with nvm',
    _createdAt: '2022-04-15T18:58:55Z',
    _id: 'e73c965f-681f-4085-aebb-fd0f4d1ba27c',
    _updatedAt: '2023-08-13T20:21:48Z',
    _rev: 'yb5npIo82QYgPTEX3CcfwP',
    _type: 'post',
    intro:
      'NVM (Node version manager) is a handy tool for switching between Node versions. Sometimes, you want to stick to one particular version.',
    tags: [
      {
        title: 'Node',
        slug: {
          current: 'node',
          _type: 'slug',
        },
      },
    ],
    publishedAt: '2022-04-03',
    content:
      'NVM is a great tool to quickly switch between node versions. If you\'re keeping up with the LTS (long-term support) version of node, it\'s easy to tell NVM to use a specific version as the default. To set a default node version on your machine, run the following commands: \n\n```bash\nnvm install <node version>\nnvm use <node version>\nnvm alias default <node version>\n```\n\nIn addition to this you can use the following script (add it to your .zshrc file) to automatically use / load a project\'s node version automatically! \n\n```bash\nauto-switch-node-version() {\n  NVMRC_PATH=$(nvm_find_nvmrc)\n  CURRENT_NODE_VERSION=$(nvm version)\n\n  if [[ ! -z "$NVMRC_PATH" ]]; then\n    # .nvmrc file found!\n\n    # Read the file\n    REQUESTED_NODE_VERSION=$(cat $NVMRC_PATH)\n\n    # Find an installed Node version that satisfies the .nvmrc\n    MATCHED_NODE_VERSION=$(nvm_match_version $REQUESTED_NODE_VERSION)\n\n    if [[ ! -z "$MATCHED_NODE_VERSION" && $MATCHED_NODE_VERSION != "N/A" ]]; then\n      # A suitable version is already installed.\n\n      # Clear any warning suppression\n      unset AUTOSWITCH_NODE_SUPPRESS_WARNING\n\n      # Switch to the matched version ONLY if necessary\n      if [[ $CURRENT_NODE_VERSION != $MATCHED_NODE_VERSION ]]; then\n        nvm use $REQUESTED_NODE_VERSION\n      fi\n    else\n      # No installed Node version satisfies the .nvmrc.\n\n      # Quit silently if we already just warned about this exact .nvmrc file, so you\n      # only get spammed once while navigating around within a single project.\n      if [[ $AUTOSWITCH_NODE_SUPPRESS_WARNING == $NVMRC_PATH ]]; then\n        return\n      fi\n\n      # Convert the .nvmrc path to a relative one (if possible) for readability\n      RELATIVE_NVMRC_PATH="$(realpath --relative-to=$(pwd) $NVMRC_PATH 2> /dev/null || echo $NVMRC_PATH)"\n\n      # Print a clear warning message\n      echo ""\n      echo "WARNING"\n      echo "  Found file: $RELATIVE_NVMRC_PATH"\n      echo "  specifying: $REQUESTED_NODE_VERSION"\n      echo "  ...but no installed Node version satisfies this."\n      echo "  "\n      echo "  Current node version: $CURRENT_NODE_VERSION"\n      echo "  "\n      echo "  You might want to run \\"nvm install\\""\n\n      # Record that we already warned about this unsatisfiable .nvmrc file\n      export AUTOSWITCH_NODE_SUPPRESS_WARNING=$NVMRC_PATH\n    fi\n  else\n    # No .nvmrc file found.\n\n    # Clear any warning suppression\n    unset AUTOSWITCH_NODE_SUPPRESS_WARNING\n\n    # Revert to default version, unless that\'s already the current version.\n    if [[ $CURRENT_NODE_VERSION != $(nvm version default)  ]]; then\n      nvm use default\n    fi\n  fi\n}\n\n# Run the above function in ZSH whenever you change directory\nautoload -U add-zsh-hook\nadd-zsh-hook chpwd auto-switch-node-version\nauto-switch-node-version\n``',
    slug: {
      current: 'set-default-node-version-with-nvm',
    },
    image: {
      alt: 'Picture of MacBook with a code editor open on a desk',
      asset: {
        _ref: 'image-9f0928f039a92d1e65e0d24c3861848048f8661b-1920x1080-jpg',
      },
    },
  },
  {
    _type: 'post',
    slug: {
      current: 'preventing-fouc-with-chakra-ui',
    },
    _createdAt: '2022-04-15T18:58:05Z',
    _id: '08d6e68c-324c-4df0-bd69-64a089eeeeee',
    _updatedAt: '2023-08-15T19:53:43Z',
    content:
      '### How to fix FOUC with Chakra UI & Next.js \n\nChakra UI is a modular component library which under the hood uses [Emotion](https://emotion.sh/docs/introduction) & [styled system](https://styled-system.com/). I like using Chakra UI if I want to quickly build a UI for prototype purposes. In addition to this, I typically reach for Chakra UI because it is: \n - CSS-in-JS based\n- Easily customizable\n- Written in Typescript\n- Not too bloated\n\nIf you\'ve used emotion and Next.js, there is a high chance you\'ve encountered [FOUC (flash of unstyled content)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).\n\nThis happens because the `<ChakraProivder />` stylesheets are only loaded on the client. Since Chakra UI uses [Emotion](https://emotion.sh/docs/introduction), the solution is to render the styles on the server-side & cache them using additional Emotion packages, `@emotion/cache` & `@emotion/server`.\n\n```bash \n# yarn \nyarn add @emotion/cache @emotion/server \n\n# npm \nnpm i @emotion/cache @emotion/server\n```\n\nAfter adding these dependencies, we need to create a cache for emotion to utilize: \n\n```bash \n// src/utils/cache.ts \n\nimport createCache from "@emotion/cache";\n\nexport default createCache({\n  key: "css",\n});\n```\n\nNow we can render these stylesheets on the server-side in `src/pages/_document.tsx` with `Document.getInitialProps`: \n\n```typescript \nimport { ColorModeScript } from "@chakra-ui/react";\nimport createEmotionServer from "@emotion/server/create-instance";\nimport Document, {\n  DocumentContext,\n  DocumentInitialProps,\n  Head,\n  Html,\n  Main,\n  NextScript,\n} from "next/document";\nimport emotionCache from "../utils/cache";\nconst { extractCritical } = createEmotionServer(emotionCache);\n\nexport default class CustomDocument extends Document {\n  static async getInitialProps(\n    ctx: DocumentContext\n  ): Promise<DocumentInitialProps> {\n    const initialProps = await Document.getInitialProps(ctx);\n    const styles = extractCritical(initialProps.html);\n    return {\n      ...initialProps,\n      styles: [\n        initialProps.styles,\n        <style\n          key="emotion-css"\n          dangerouslySetInnerHTML={{ __html: styles.css }}\n          data-emotion-css={styles.ids.join(" ")}\n        />,\n      ],\n    };\n  }\n  render() {\n    return (\n      <Html lang="en">\n        <Head>\n          <meta charSet="UTF-8" />\n          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />\n        </Head>\n\n        <body>\n          <ColorModeScript />\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n```\n\nNow that this is in place, the page should render the chakra UI stylesheets on both the server-side & client-side (and the FOUC issue should be fixed!).\n',
    tags: [
      {
        title: 'Next.js',
        slug: {
          _type: 'slug',
          current: 'next-js',
        },
      },
      {
        title: 'React',
        slug: {
          _type: 'slug',
          current: 'react',
        },
      },
      {
        title: 'Styled-components',
        slug: {
          current: 'styled-components',
          _type: 'slug',
        },
      },
    ],
    title: 'Preventing fouc with Chakra UI',
    image: {
      alt: 'Logo of Chakra UI',
      asset: {
        _ref: 'image-1f7d6417dffacbc4ce08aac9595e33aa6d3aaf98-1500x500-png',
      },
    },
    intro:
      'How to prevent FOUC (flash of unstyled content) when using Next.js & Chakra UI',
    _rev: 'jPzmgSHsCBXjSEEvNw7GYm',
    publishedAt: '2022-03-26',
  },
  {
    _updatedAt: '2023-01-09T21:20:42Z',
    tags: [
      {
        title: 'Git',
        slug: {
          _type: 'slug',
          current: 'git',
        },
      },
      {
        title: 'Github',
        slug: {
          _type: 'slug',
          current: 'github',
        },
      },
    ],
    intro: 'How to rename local & remote git branches.',
    publishedAt: '2022-01-01',
    _type: 'post',
    _id: '7cc9d8f7-dbd8-4358-8c2e-82b1b500981d',
    content:
      "## How to rename a local Git branch\n\nWhen you're working on a project, it's common to name your branches a certain way. It's easy to make a mistake when you name a branch so let's go over how to rename a branch.\n\nBefore you run the below commands, make sure you're on the branch you want to rename: \n\n```bash\ngit checkout old-name\n```\n\nTo rename a branch locally use the -m option:\n\n```bash\ngit branch -m new-name\n```\n\nyou will need to rename a local branch by following the previous steps: \n\n- Delete the old branch and push the new one: \n\n```bash\ngit push -u origin --delete old-name\n``` \n\nReset the upstream branch for your new local branch and you're done!\n \n```bash\ngit push -u origin new-name\n```",
    _createdAt: '2022-04-15T18:56:54Z',
    _rev: 'ez03a0XKeI50s6tUBpyazH',
    title: 'How to rename local & remote git branches',
    slug: {
      current: 'how-to-rename-local-and-remote-git-branches',
    },
    image: {
      alt: 'Image of Git logo and Github octocat logo',
      asset: {
        _ref: 'image-be6bcdbc83a80cc04798cd46067c8cd9f67a7301-1920x1080-jpg',
      },
    },
  },
  {
    _type: 'post',
    _id: '2df71aa7-0d88-4280-baeb-15033a2971ce',
    tags: [
      {
        title: 'GraphQL',
        slug: {
          current: 'graphql',
          _type: 'slug',
        },
      },
      {
        title: 'Node',
        slug: {
          current: 'node',
          _type: 'slug',
        },
      },
    ],
    _createdAt: '2022-04-15T18:55:33Z',
    publishedAt: '2021-06-05',
    _rev: 'jPzmgSHsCBXjSEEvNw7Iqk',
    _updatedAt: '2023-08-15T19:54:55Z',
    content:
      "In the past, I've worked on side projects that use TypegraphQL and Node.js as the backend API. Quite often when working on these projects, I've run into the problem of having a single [Input type](https://typegraphql.com/docs/resolvers.html#input-types) that needed to extend multiple classes. \n\nInput types in TypegraphQL is used to define what a query or mutation argument's type is. When working in TypegraphQL, we pass an @Arg decorator in order to specify what this Query or Mutation accepts as arguments. An example of this would be:\n\n```typescript\n@Mutation(() => Boolean) \n  async register(\n    @Arg('email') email: string,\n    @Arg('password') password: string,\n): Promise<boolean> { \n  // mutation logic removed from brevity's sake\n}\n```\n\nHere we have a register mutation that is responsible for registering a user. It returns a boolean and takes 'email' & 'password' as arguments. Put simply, we are specifying that we expect an email & password to be sent when a user calls this mutation.\n\nA good way to manage input types in TypegraphQL that are used in multiple places in your project is to abstract that input type into its own file (i.e. 'RegisterInput.ts', 'LoginInput.ts' etc.)\n\nIt's common for input types to become more and more complex as your project grows in size. This is where I ran into the multiple class problem. Unfortunately, Typescript doesn't support multiple inheritance so we cannot extend two classes natively.\n\nSo, how do we get around this problem?\n\n### Mixins! \n\nTo get around this issue, we need to use a [Mixin](https://www.typescriptlang.org/docs/handbook/mixins.html). Mixins rely on using generics with class inheritance to extend a base class \n\nHere is an example that solves the multiple class inheritance problem: \n\n```typescript\n // ConfirmedMixin.ts \nimport { ClassType, Field, InputType } from \"type-graphql\";\n\nexport const ConfirmedMixin = <T extends ClassType>(BaseClass: T) => {\n  @InputType()\n  class ConfirmedInput extends BaseClass {\n    @Field()\n    confirmed: boolean; \n  } \n  return ConfirmedInput;\n}; \n```\n\nHere we have a function that has an input type (ConfirmedInput). It has a single field called 'confirmed' which is a boolean. In short, all this Mixin does is take in a class and return the ConfirmedInput. So, how do we implement this mixin in the inputs we wish to extend? \n\nLet's refactor the original register example to inherit from a Mixin. First, we shall create a simple register input without a mixin.\n\n\n```typescript\nexport class RegisterInput {\n  @Field()\n  email: string;\n\n  @Field()\n  password: string;\n}\n```\n\nNow let's create two mixins that have some additional fields that you would typically include when you register a new user:\n\n\n```typescript\nexport const NotificationMixin = <T extends ClassType>(BaseClass: T) => {\n  @InputType({ isAbstract: true }) \n  class NotificationInput extends BaseClass {\n    @Field()\n     enabled: boolean;\n  } \n  return NotificationInput \n}; \n```\n\n```typescript\nexport const UserMixin = <T extends ClassType>(BaseClass: T) => {\n  @InputType({ isAbstract: true })\n  class RegisterInput extends BaseClass {\n    @Field()\n    acceptMarketingEmails: boolean;\n   \n    @Field()\n    emailConfirmed: boolean;\n\n    @Field()\n    twoFactorEnabled: boolean;\n  } \n  return userInput;\n}; \n```\n\nNote: I've included 'isAbstract: true' to get around the following error:\n\n\n```typescript\nError: Schema must contain uniquely named types but contains multiple types named \"RegisterInput\".\n```\n\n\nThis happens because we have created multiple input types with the same name. You could rename the mixin input to a different name to avoid this error.\n\nNow with the errors taken care of, we can go ahead and use the mixin in the RegisterInput input type.\n\n```typescript\nexport class RegisterInput extends UserMixin(NotificationMixin(class {})) {\n  @Field()\n   email: string;\n\n  @Field()\n  password: string;\n}\n```\n\nNow RegisterInput will inherit all the fields from the UserMixin and NotificationMixin!\n\n",
    slug: {
      current: 'extending-multiple-classes-in-typegraphql',
    },
    intro: 'How to extend multiple classes in TypeGraphQL and Typescript',
    title: 'Extending multiple classes in TypegraphQL',
    image: {
      alt: 'Logo of Apollo GraphQL, Node & Apollo client',
      asset: {
        _ref: 'image-affc45e51dc20121c5d964794a5fc901fe45ec04-1000x420-jpg',
      },
    },
  },
  {
    slug: {
      current: 'full-stack-deploy-with-dokku',
    },
    tags: [
      {
        title: 'Docker',
        slug: {
          current: 'docker',
          _type: 'slug',
        },
      },
      {
        title: 'Devops',
        slug: {
          current: 'devops',
          _type: 'slug',
        },
      },
    ],
    publishedAt: '2021-05-29',
    _type: 'post',
    title: 'Full stack deploy with dokku',
    _updatedAt: '2023-08-15T19:52:06Z',
    content:
      "Dokku is an easy to use & cost-effective solution to deploying your application in a language-agnostic way. It's an open-source, self-hosted alternative to Heroku. Once everything is set up, we can simply use a bash script to deploy your app on your own server. \n\nYou can find a real-world example of a full-stack project that has been deployed using this method [here](https://github.com/luke-h1/storify)\n\nSummary:\n* Choose a server \n* Install Dokku\n* Create the app \n* Install PostgreSQL & Redis \n* Configure ports\n* Configure domain, DNS & HTTPS \n* Deploy the app\n* Bash script deployment \n\n### **Choose a server**\n\nSince this will be a self-hosted app, you need to have a server. A good choice would be AWS EC2 (which offers a free tier) and Digital Ocean (you can grab free credits for this). If you're not eligible for a free tier they tend to cost a few euros/dollars per month. \n\n- Choose Ubuntu as your Linux distribution \n\nWe will use a custom domain to deploy our app so make sure you've created a DNS A record of the domain or subdomain of your choice to the IP address of your server. \n\n### **Install Dokku**\n\nNow that the server is up & running, we can connect to it via SSH and start installing the packages we will need. Run the following commands to install Dokku:\n\n\n```bash \nsudo apt install -y apt-transport-https \nwget https://raw.githubusercontent.com/dokku/dokku/v0.26.5/bootstrap.sh\nsudo DOKKU_TAG=v0.26.5 bash bootstrap.sh\n```\n\nThis typically takes a couple of minutes to finish. It will install all of the dependencies and start a web server (Nginx) \n\n### **Create the app**\n\nNow that the server has Dokku installed the next step is to create an app. You should create an app for each API / app you want to deploy on your server.\n\n`\ndokku apps:create my-app\n` \n\n### **Install PostgreSQL & Redis**\nSince the app we are using as an example (https://github.com/luke-h1/tmtodos.me) requires a PostgreSQL and Redis instance, we need to install it with Dokku. To do so we just have to install the following plugins: \n\n```bash\nsudo dokku plugin:install https://github.com/dokku/dokku-postgres.git\nsudo dokku plugin:install https://github.com/dokku/dokku-redis.git\n```\n\nNow that the relevant plugins are installed we can link them to our Node app:\n\n```bash\n# postgres\ndokku postgres:create db\ndokku postgres:link db app \n# redis\ndokku redis:create cache \ndokku redis:link cache app \n```\n\n### **Deploy your app**\n\nNow that our app & database are ready we can start to deploy our app for the first time. We need to create a Dockerfile and push this to Docker hub in order for our server to run this. \n\n**Locally**\n\nOpen your favorite code editor \n- Create a new Docker repository by going to https://hub.docker.com and clicking 'Create repository' \n- Create a Dockerfile (example here: [tmtodos Dockerfile](https://github.com/luke-h1/tmtodos.me/blob/dev/src/tm-server/Dockerfile)).\n- Build the docker image: `docker build -t <user>/app:1.0.0 .`\n- Push the image to Docker hub: `docker push <user>/app:1.0.0`\n\n**Server** \n\nSSH back into your VPS\n- Pull the image you've just pushed to Docker hub: `docker pull <USERNAME>/<API_NAME>:1.0.0`\n- Tag the docker image: `docker tag <user>/app:1.0.0 dokku/app:latest`\n- Deploy the image via Dokku: `dokku deploy app latest`\n\n### **Configure ports**\n\nWe now need to ensure that our app is able to run on the port we specified in the Dockerfile you created (8000 in the example provided). We will assign a port to our app. This should match whatever you've exposed in your Docker image\n\n`dokku proxy:ports-add app http:80:<port in docker image>`\n\n### **Configure domain, DNS & HTTPS**\n\nAt this stage, the DNS should have finished propagating to your domain by now **if everything is configured correctly**. Connect back to your VPS with SSH & Install Let's Encrypt so we can enable HTTPS support for your custom domain.\n\n```bash\nsudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git\ndokku config:set --global DOKKU_LETSENCRYPT_EMAIL=your-email@your.domain.com\n```\n\nNow that the Let's Encrypt plugin is installed we can go ahead and configure your domain and HTTPS for your app.\n\nFirst, we need to remove any globally configured domains which have been automatically set by Dokku. This by default is the hostname of your VPS. \n\nTo make removing this easier we will rename the hostname of the VPS first: \n\n```bash\nsudo su - && hostnamectl set-hostname <new hostname>\n```\n\nNow that is done we can remove the globally configured domains\" \n\n`dokku domains:remove-global <hostname>`\n`dokku domains:remove app <hostname>`\n\n\nOnce that's done we can check if the global domain has been removed with: \n\n`dokku domains:report`\n\nNow we are ready to configure your domain & HTTPS for your app: \n```bash\n# set a custom domain that you own for your application\ndokku domains:set app api.mydomain.com\n\n# enable letsencrypt\ndokku letsencrypt:enable app \n\n# enable auto-renewal\ndokku letsencrypt:cron-job --add\n```\n\nNote: if you have any error during this step such as:\n\n```bash\nacme: error: 403 :: urn:ietf:params:acme:error:unauthorized\n```\n\nmake sure that you have correctly configured your domain name so it points to your VPS IP.\n\nIf everything has worked correctly you should see a message such as \n\n```bash\nserved key authenticated for ...\n```\n\nNow we can enable letsencrypt: \n\n`dokku letsencrypt:enable app `\n\n### **Deploy the app**\n\nNow we should all be set to deploy our app to production. Run the following command to deploy the latest: \n\n`dokku deploy app latest`\n\nAt this stage, your app should be publicly accessible at the domain you defined with HTTPS support out of the box 😎 🎉\n\n\n### **Bash script deployment**\n\nObviously repeating the above steps isn't ideal when you want to deploy your app after you've made changes. To get around this I created a simple bash script that builds, pushes & deploys new code. You can find this [here](https://github.com/luke-h1/tmtodos.me/blob/dev/scripts/deploy:server.sh)",
    intro:
      'How to deploy a full-stack app with Dokku to AWS / Digital Ocean. Cost-effective deployment for Node, PostgreSQL & Redis',
    _rev: 'jPzmgSHsCBXjSEEvNw7Dg0',
    _id: 'f40e4321-e570-4370-a628-1f605724e220',
    image: {
      alt: 'Dokku whale logo',
      asset: {
        _ref: 'image-e31b8244d6327992b81053fd67d45e4ea723db9f-1602x902-jpg',
      },
    },
    _createdAt: '2022-04-15T18:54:24Z',
  },
  {
    content:
      "### SSR\n\nPre rendering is the term for rendering HTML before it is sent down to the client. By default, Next will pre-render every page. This however can be done in two different ways:\n- Static generation (referred to as static site generation) \n- SSR (server-side rendering)\n\nA next site can use a combination of these methods (which method you pick to use is usually determined by what data your page needs). Static generation means that the HTML is generated once on the server at build time & this HTML is reused for each request the client makes.\n\nThis is usually ok when the data you're displaying doesn't change often (such as a blog post that is statically rendered via transforming markdown to HTML) however this isn't ideal when a user needs to see a page updated after they change the data that the client displays (such as from a CMS, a backend API, etc). This means that in most cases static generation of pages cannot be used.\n\nServer-side rendering (SSR for short) means that the HTML is generated on the server on each request for the page - The HTML is fluid rather than static as it will change based on what is pulled from the backend, the CMS, the API, etc.\n\nEach time a client requests to view a page that is server-side rendered, the server will fetch the data for the page and generate the HTML using that data. At this stage, the HTML will only be sent to the client once this process has finished completed.\n\nYou can take advantage of this behavior in Next.js by using `getServerSideProps` or `getInitialProps` on the page you want to be server-side rendered\n\nThis post doesn't go into detail & doesn't completely explain the different types of ways you can fetch data in Next. If you want to read more about what the best way to fetch data is (based on your use case) you can take a look at the awesome Next documentation on the subject\n",
    _type: 'post',
    intro:
      'Notes on the different methods of rendering that you can use with Next.js',
    _updatedAt: '2023-01-09T21:23:55Z',
    _rev: 'WomxlbNsmq7UgYFaRYCFqF',
    title: 'Next.js SSR notes',
    tags: [
      {
        title: 'Next.js',
        slug: {
          _type: 'slug',
          current: 'next-js',
        },
      },
      {
        title: 'React',
        slug: {
          _type: 'slug',
          current: 'react',
        },
      },
      {
        title: 'SSR',
        slug: {
          current: 'ssr',
          _type: 'slug',
        },
      },
    ],
    image: {
      alt: 'Typescript, React & Next.js logo against a black background',
      asset: {
        _ref: 'image-ea94368c421c01ddf59da5f3a1175c7433d095ad-1000x420-png',
      },
    },
    publishedAt: '2021-04-06',
    _createdAt: '2022-04-15T18:52:46Z',
    _id: 'f3c0dcff-4abd-4303-a924-d50f2612dfad',
    slug: {
      current: 'next-js-ssr-notes',
    },
  },
  {
    _rev: 'FUQBEvzuMU4X10wONx2Zzg',
    content:
      "Isolating features into separate branches is a really common practice for most developers. By separating features & bug fixes you can avoid a lot of problems and keep your branches clean.\n\nAt some point, you may reach a state where you want to integrate your feature branch with the rest of your project. This is where the git merge command comes into play\n\nI recently ran into an issue where my feature branch conflicted with the dev branch. If I tried to merge my feature into the dev branch I would have had to deal with endless conflicts. This is where I needed to force the merge into my development branch\n\n### **Preparing to merge**\n\nLet's assume you want to merge branch hotfix into your master branch but the changes made in hotfix conflict with master. You know the changes in hotfix won't overwrite any important code in master and you need to get this fix deployed.\n\nBefore you touch anything ensure that your local repository (hotfix branch) is up to date with the latest changes from your remote origin:\n\n```bash\ngit fetch && git status\n```\n\nIf anything shows up at this point move it to a safe place or stash it\n\n**Prepare your main / master branch**\n\n```bash\ngit checkout master && git pull\n```\n\n**Prepare your hotfix branch**\n\n```bash\ngit checkout hotfix && git merge --strategy=ours master\n```\n\nAt this point, you will receive a prompt asking if you want to merge master into your hotfix branch. Ignore this & quit of the editor (with vim: `:q!`) \n\n**Merge hotfix into master 😎**\n\n```bash\ngit checkout master && git merge --no-ff hotfix\n```\n\nThis merge approach will add one commit on top of your master / main branch which pastes in whatever is in your feature branch without complaining about any pre-existing merge conflict.",
    slug: {
      current: 'forcing-git-merges',
    },
    _id: '75b7e48c-60ac-45b5-b840-f405b2dc5362',
    title: 'Forcing git merges',
    image: {
      alt: 'Code editor showing git commit history',
      asset: {
        _ref: 'image-2dd20a5da612dbb00783efcd675f1e163cf4fc5f-1920x1272-jpg',
      },
    },
    intro:
      'Isolating features into separate branches is a really common practice for most developers. By separating features & bug fixes you can avoid a lot of problems and keep your branches clean.',
    _type: 'post',
    _updatedAt: '2023-01-29T15:28:56Z',
    publishedAt: '2020-12-15',
    tags: [
      {
        title: 'Git',
        slug: {
          _type: 'slug',
          current: 'git',
        },
      },
    ],
    _createdAt: '2022-04-15T18:49:22Z',
  },
  {
    tags: [],
    content:
      'Welcome to my new blog. \n\nMy goal in creating a blog page is to write more about things I have learned, weird bugs I have encountered, new tools I try in my applications, and various other things.\n',
    image: {
      alt: 'GraphQL, Next.js  & MDX code',
      asset: {
        _ref: 'image-3b496c6bdb2556643bcc3e1352d166ef99a8b6d3-1742x904-png',
      },
    },
    _createdAt: '2022-04-15T18:42:48Z',
    _id: '9533c29d-36f4-499c-8d33-0f869b97df26',
    publishedAt: '2020-12-10',
    slug: {
      current: 'first-blog-post',
    },
    intro: 'Posting the first blog post',
    _rev: 'ez03a0XKeI50s6tUBpzS2p',
    _type: 'post',
    _updatedAt: '2023-01-09T21:23:14Z',
    title: 'First blog post',
  },
];
