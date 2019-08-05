# wdjtlb
The cool, new way to handle your widgets! wdjtlb today!

## script

Install latest node / npm. (Note, npm has roughly comparable performance to yarn nowadays.)
```
# First install nvm (https://github.com/nvm-sh/nvm), not shown
$ nvm install 12
$ npm i -g npm
$ npm init -y
```

Add a failing test for the initial functionality.
```
$ npm i --save-dev jest
# create index.spec.js (not shown)
$ cat index.spec.js
const wdjtlb = require('./index');

describe('exported api of wdgtlb', () => {
  test('addTwo() adds 2 to argument', () => {
    expect(wdgtlb.addTwo(3)).toBe(5);
  });
});
$ cat package.json
(... omitted ...)
   "scripts": {
     "test": "jest"
   },
(... omitted ...)
$ npx jest
 FAIL  ./index.spec.js
  ● Test suite failed to run

(...various reasons deleted...)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.899s
Ran all test suites.
```

Make the test pass
```
# create index.js (not shown)
$ cat index.js
function addTwo(a) { return a + 2; }
modules.exports = { addTwo };
$ npx jest
 PASS  ./index.spec.js
  exported api of wdjtlb
    ✓ addTwo() adds 2 to argument (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.183s
Ran all test suites.
```

Before we commit, setup commitizen for easy commit messages / automatic changelog management.
```
$ npm i -g commitizen
$ commitizen init cz-conventional-changelog --save-dev --save-exact
```

Commit initial file.
```
$ git add .
$ git cz
cz-cli@4.0.3, cz-conventional-changelog@3.0.2

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) index.js
? Write a short, imperative tense description of the change (max 84 chars):
 (33) create index.js with add function
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? No
[master 8a371f4] feat(index.js): create index.js with add function
 3 files changed, 2057 insertions(+)
 create mode 100644 index.js
 create mode 100644 index.spec.js 
 create mode 100644 package-lock.json
 create mode 100644 package.json
$ git push origin master
```

Generate a changelog.
```
$ npm i --save standard-changelog
$ npx standard-changelog --first-release
✔ created CHANGELOG.md
✔ output changes to CHANGELOG.md
$ git add
$ git cz
(... omit lines ...)
[master cb021da] feat(changelog.md): auto-generate initial changelog
 3 files changed, 850 insertions(+), 107 deletions(-)
 create mode 100644 CHANGELOG.md
```

Automatically reformat and lint the code for staged files when trying to commit.
```
$ npm i --save-dev husky lint-staged standard
# add husky, lint-staged configuration to package.json
$ cat package.json
(... omitted ...)
   "scripts": {
     "test": "jest",
     "lint": "standard --fix"
   },
   "standard": {
     "globals": [ "jest", "describe", "test", "expects" ]
   },
   "husky": {
     "hooks": {
       "pre-commit": "lint-staged",
       "post-commit": "git update-index --again"
     }
   },
   "lint-staged": {
     "*.js": ["standard --fix", "git add"]
   }
(... omitted ...)
# add a couple blank lines to index.js and index.spec.js
$ git add index.js index.spec.js
$ git cz
```
