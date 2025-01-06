# Luna

## Installation

```
npm install
```

## Development

```
NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

## Deployment

```
NODE_OPTIONS=--openssl-legacy-provider npm run build && npm run export
```

`docs/.nojekyll` and `docs/CNAME` are deleted during the build process, these deletions must be removed from Git before pushing to main.
