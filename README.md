# [lhowsam.com](https://lhowsam.com)

My website & blog

## Tech Stack:

- [React](https://github.com/facebook/react)
- [Astro](https://github.com/withastro/astro)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [Playwright](https://playwright.dev/)
- [Jest](https://jestjs.io)
- [MDX](https://github.com/mdx-js/mdx)
- [Vercel](https://vercel.com)
- [AWS lambda](https://aws.amazon.com/lambda/)

<br />

[![CI / build](https://github.com/luke-h1/lhowsam.com/actions/workflows/build.yml/badge.svg)](https://github.com/luke-h1/lhowsam.com/actions/workflows/build.yml)

[![Deploy](https://github.com/luke-h1/lhowsam.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/luke-h1/lhowsam.com/actions/workflows/deploy.yml)

[![UI tests](https://github.com/luke-h1/lhowsam.com/actions/workflows/ui-tests.yml/badge.svg)](https://github.com/luke-h1/lhowsam.com/actions/workflows/ui-tests.yml)

[![CodeQL](https://github.com/luke-h1/lhowsam.com/actions/workflows/codeql.yml/badge.svg)](https://github.com/luke-h1/lhowsam.com/actions/workflows/codeql.yml)

[![Dependency Review](https://github.com/luke-h1/lhowsam.com/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/luke-h1/lhowsam.com/actions/workflows/dependency-review.yml)

## Environments

| Environment | URL                     | Version endpoint                    |
| ----------- | ----------------------- | ----------------------------------- |
| Production  | https://lhowsam.com     | https://lhowsam.com/api/version     |
| Development | https://dev.lhowsam.com | https://dev.lhowsam.com/api/version |

## Changelog and releases

Release notes are changesets. A pull request adds a `.changeset/*.md` file with
`bun run changeset`: a bump type and one or two sentences for the person who
reads the site. The `Changeset present` check fails a pull request that adds no
file. Use `bun run changeset -- --empty` for a change with nothing to tell a
reader. `major`, `minor` and `patch` select the heading (Breaking changes, New,
Fixed) and the size of the next version. The check also fails a note that has
text but no bump, or a bump but no text.

The `Deploy to Production` workflow releases after the live deploy. It takes
the highest bump of the waiting changesets to pick the next version, writes the
notes into `CHANGELOG.md` under that version, deletes the files, sets `version`
in `package.json`, pushes the commit to the deployed branch, tags `vX.Y.Z` and
creates a GitHub release. A deploy with no bump waiting makes no release.
The build gets that next version as `PUBLIC_APP_VERSION`, so `/api/version`
reports the version the deploy releases.

The release job pushes with the `RELEASE_TOKEN` repository secret, a personal
access token with `contents: write`. The `dev` ruleset requires a pull request
and lets only repository admins bypass it, so the default `GITHUB_TOKEN` cannot
push the release commit. Without the secret the job falls back to
`GITHUB_TOKEN` and the push fails.

Preview the waiting notes with `bun run release:notes pending`.

## Supporting repositories

- [AWS lambdas](https://github.com/luke-h1/lho-lambda)
- [Sanity studio](https://github.com/luke-h1/lhowsam-studio)
