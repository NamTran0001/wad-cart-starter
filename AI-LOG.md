# AI-LOG

## AI tool used

- ChatGPT

## How I used AI

I used ChatGPT to help me understand the assignment requirements and check my work while implementing `cartTotal`.

At the beginning, ChatGPT helped me set up the project workflow. I added an `AGENTS.md` file, an `npm run lint` command, and a GitHub Actions workflow for running tests and lint on push.

I also asked ChatGPT to help me plan the tests required by the rubric. Based on that, I added tests for:

- the given example returning `467400`
- an empty cart
- free shipping at the threshold
- negative price throwing `RangeError`
- non-integer quantity throwing `RangeError`
- non-positive quantity throwing `RangeError`

For `src/cart.js`, ChatGPT suggested an implementation based on the specification. I reviewed it and used it as the basis for my implementation.

## What I changed myself

I checked the code against the assignment requirements and ran the commands myself.

I noticed that an old commented-out version of the starter test was still at the bottom of `test/cart.test.js`, so I removed it.

I also accidentally created an untracked file called `tatus` while working in PowerShell. I removed that file before committing.

The first version of `BRIEF.md` also had escaped Markdown characters such as `\#` and `\*`. I noticed this when checking the file and corrected it to normal Markdown.

## Verification

Before implementing the function, I ran the original test and confirmed that it failed because `cartTotal` was still not implemented.

After implementing the function and adding the tests:

- `npm test` passed all 6 tests.
- `npm run lint` passed.
- `git status` showed a clean working tree after committing.

## Commits

- `a52ecfa` — `chore: add project harness and CI`
- `f7d810e` — `Implement cart total and add tests`
