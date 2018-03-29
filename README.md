# The Mini Movie DB

## What is this?

The Mini Movie DB is a simple clone of The Movie DB built with Preact and GraphQL. It's an example application which runs inside of CodeSandbox with a back-end built to deploy to AWS Lambda.

I built The Mini Movie DB as part of a take-home coding challenge. You can use it as an example of how to build a simple Preact + GraphQL application! Have fun!

## Okay, so how do I use this?

The best way to run this code is to simply open it in [CodeSandbox](https://codesandbox.io/s/github/Saeris/mini-movie-db)!

There you can both see it in action and edit the code live in your browser.

If you'd like to play with the GraphQL API directly, here's a [playground](https://y1bhafunj0.execute-api.us-west-2.amazonaws.com/prod/graphql).

> But what if I want to run this locally?

Well if you *really* want to do that, simply clone the repo and getting started is as easy as:

**1. Install dependencies:**
```shell
yarn
```
**2. Run it!**
```shell
yarn dev
```

That'll spin up both the api server and the front-end. As a bonus, the `dev` script opens a playground for you automatically. You can reach the front-end at: http://localhost:8080/

## Anything else I should know?

Yeah! If you're running this locally, you'll need to get a few things for different parts to work:

- Your own api key from The Movie DB, here's the [instructions](https://developers.themoviedb.org/3/getting-started/introduction). Once you have that, you'll need to create a new file at the root of the project named `serverless.env.yml` with the following key: `movieDBApiKey: "<YOUR_API_KEY_HERE>"`
- If you want to deploy your server, you'll need to first set up [Serverless](https://serverless.com/framework/docs/providers/aws/guide/installation/). Once your credentials are configured and you've created an IAM profile, you should be able to run the deployment commands. You'll also need to set your `apikey` environment variable inside your Lambda settings, here's a [guide](https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html).
- The project is set up to use [Travis](https://travis-ci.org/) for continuous integration and deployment, [Codecov](https://codecov.io/) for code coverage reporting, [Greenkeeper](https://greenkeeper.io/) to track dependency versions, and [Snyk](https://snyk.io/org/saeris/) to protect against security vulnerabilities. Assuming you forked this repo and you want to get all of that working, you'll need to sign up for each and follow their setup instructions. I'll leave that one for you to figure out!
- Lastly if you want to use [Wallaby](https://wallabyjs.com/) to continually run tests as you code, you'll need to get a license and configure your editor, after that the included config should help you use that tool.
- There's some other goodies you can take advantage of in your local environment, such as [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), which may require extra plugins for your editor of choice before you can use them.

And here's some other commands you can run:

- `yarn start`: Starts the server and the client without opening a playground
- `yarn deploy:dev`: Deploys the api server to AWS to the development stage
- `yarn deploy:prod`: Deploys the api server to AWS to the production stage
- `yarn test`: Runs unit tests for both the server and the client

## Thanks for stopping by!

Everything here is released as-is, without support. PRs for bug fixes are appreciated, but there are no plans to maintain this project. Hope you find it useful!
