# Changesets

Each file in this directory is one release note. A pull request adds one with:

```sh
bun run changeset
```

Write one or two sentences for the person who reads the site. The bump type
sets the heading the note lands under and the size of the next version:

| Bump    | Heading          |
| ------- | ---------------- |
| `major` | Breaking changes |
| `minor` | New              |
| `patch` | Fixed            |

A note must have both a bump and text: the check fails a file that has one
without the other. A change with nothing to tell a reader (a refactor, a test,
CI) still has to pass the check. Add an empty note:

```sh
bun run changeset -- --empty
```

The notes stay here until a production deploy ships. The `Deploy to Production`
workflow then takes the highest bump of the waiting notes to pick the next
version, writes the notes into `CHANGELOG.md` under that version, deletes the
files, sets `version` in `package.json`, tags `vX.Y.Z` and creates a GitHub
release. A deploy with only empty notes waiting makes no release.

Preview the notes that are waiting:

```sh
bun run release:notes pending
```
