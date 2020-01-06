# Host coverage reports

```shell script
cd coverage/lcov-report && python -m SimpleHTTPServer 3030;
```

# Requirement

- coreutils

# TODOS

- [ ] Test coverage
  - [ ] Server
  - [ ] App
- [ ] https://docs.cypress.io/guides/tooling/code-coverage.html
- [ ] jest.config.js
  - [ ] Server
  - [ ] App
- [ ] eslint
- [ ] prettier.json
- [ ] nodemon.json
- [ ] docker for ci
- [ ] tune next.config.ts
- [ ] one-for-all i18n solution
- [ ] define dir in next so we can move pages out of the root
- [ ] cli toolchain for starting servers and frontends
- [ ] make production build from outside `next build` to work
      -> probably by copy pasting stuff
