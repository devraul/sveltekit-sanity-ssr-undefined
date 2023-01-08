# Vite + Sveltekit + Sanity

This repo is just a minimal environment to understand why `sanity` package.

## Repro steps

> Make sure you have `pnpm`

1. install dependencies with `pnpm i`
2. run `pnpm -F sveltekit run dev`
3. Open `http://127.0.0.1:5173/`

You'll see that:

- import `sanity` and `sanity/desk` has the following effects:
  - in the server: undefined;
  - in the client: all modules are there

## Attempts

### optimizeDeps.include on vite config

Code:

```js
optimizeDeps: {
  include: ["sanity", "sanity/desk"];
}
```

Has no effect

### ssr.noExternal

Code:

```js
ssr: {
  noExternal: ["sanity", "sanity/desk"];
}
```

Throws an error:

```
require is not defined
ReferenceError: require is not defined
    at /@fs/Users/raulmelo/development/undefined-dep/node_modules/.pnpm/@sanity+client@3.4.1/node_modules/@sanity/client/lib/sanityClient.js:9:14
    at instantiateModule (file:///Users/raulmelo/development/undefined-dep/node_modules/.pnpm/vite@4.0.4/node_modules/vite/dist/node/chunks/dep-5e7f419b.js:52224:15)
```

### ssr.optimizedDeps.includes

Code:

```js
ssr: {
  optimizeDeps: {
    include: ["sanity", "sanity/desk"];
  }
  // noExternal: ['sanity', 'sanity/desk']
}
```

Has no impact.
