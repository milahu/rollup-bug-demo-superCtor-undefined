# rollup-bug-demo-superCtor-undefined

https://github.com/rollup/rollup/issues/3805

```
git clone --depth 1 https://github.com/milahu/rollup-bug-demo-superCtor-undefined.git
cd rollup-bug-demo-superCtor-undefined

pnpm install
```

breaks with rollup

```
npm run build
node dist/index.js
node dist/index.mjs
```

works with webpack

```
npm run build-wp
node dist/main.js
```

