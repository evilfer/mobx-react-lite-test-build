# mobx-react-lite-test-build

To build:

```sh

npm i
npm run build

```

JS output in `/dist` will contain code that fails to run in the browser, e.g. `!0==={}()`, as in `/dist-mf704-mrl315/mrl.a6b78398.js`.

Build files using mobx-react:7.0.1 and mobx-react-lite:3.0.1 are fine.
